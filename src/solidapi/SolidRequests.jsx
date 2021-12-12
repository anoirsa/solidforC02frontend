import { fetch } from "@inrupt/solid-client-authn-browser";
import {
  getSolidDataset,
  getThing,
  createThing,
  saveSolidDatasetAt,
  createSolidDataset,
  setThing,
  addUrl,
  addStringNoLocale,
  buildThing,
  getStringNoLocale,
} from "@inrupt/solid-client";
import { RDF } from "@inrupt/vocab-common-rdf";
import {
  SOLID_MAIN_PROPERTY,
  SOLID_SUB_PROPERTY,
  SOLID_RESOURCE_URL,
  SOLID_TYPES,
} from "../globals/GlobalSolid";

const isThingExsists = (dataSet, url) =>
  getThing(dataSet, url) == null ? false : true;

const initiatDataSet = async (dataSetUrl) => {
  let dataSet = null;
  try {
    dataSet = await getSolidDataset(dataSetUrl, { fetch: fetch });
  } catch (error) {
    dataSet = createSolidDataset();
  }
  return dataSet;
};

const adjustSubDataSet = async (subComponent, mainComponent) => {
  for (let i in subComponent) {
    let componentSolidDataSet = await initiatDataSet(
      SOLID_RESOURCE_URL.SUB_COM
    );
    let thingToAdd = null;
    let componentsThatBelongTo = null;
    if (
      !isThingExsists(
        componentSolidDataSet,
        `${SOLID_RESOURCE_URL.SUB_COM}#${subComponent[i].subIdentifier}`
      )
    ) {
      thingToAdd = createThing({ name: subComponent[i].subIdentifier });
      componentsThatBelongTo = [];

      for (let key in SOLID_SUB_PROPERTY) {
        thingToAdd = addStringNoLocale(
          thingToAdd,
          SOLID_SUB_PROPERTY[key].url,
          subComponent[i][SOLID_SUB_PROPERTY[key].value]
        );
      }
      thingToAdd = addUrl(thingToAdd, RDF.type, SOLID_TYPES.PRODUCT);
    } else {
      thingToAdd = getThing(
        componentSolidDataSet,
        `${SOLID_RESOURCE_URL.SUB_COM}#${subComponent[i].subIdentifier}`
      );
      componentsThatBelongTo = JSON.parse(
        getStringNoLocale(thingToAdd, SOLID_TYPES.PART_OF)
      );
    }
    thingToAdd = buildThing(thingToAdd)
      .setStringNoLocale(
        SOLID_TYPES.PART_OF,
        JSON.stringify([
          ...componentsThatBelongTo,
          {
            productName: mainComponent.productName,
            identifer: mainComponent.identifer,
            productEmission: mainComponent.productEmission,
          },
        ])
      )
      .build();

    componentSolidDataSet = setThing(componentSolidDataSet, thingToAdd);
    await saveSolidDatasetAt(
      SOLID_RESOURCE_URL.SUB_COM,
      componentSolidDataSet,
      { fetch: fetch }
    );
  }
};

export const addComponent = async (component) => {
  let componentSolidDataSet = await initiatDataSet(SOLID_RESOURCE_URL.MAIN_COM);
  // Validation check if the main components already exsited

  if (
    isThingExsists(
      componentSolidDataSet,
      `${SOLID_RESOURCE_URL.MAIN_COM}#${component.identifer}`
    )
  ) {
    return {
      success: true,
      thingExisted: true,
    };
  }
  let componentThing = createThing({ name: component.identifer });
  for (let key in SOLID_MAIN_PROPERTY) {
    componentThing = addStringNoLocale(
      componentThing,
      SOLID_MAIN_PROPERTY[key].url,
      component[SOLID_MAIN_PROPERTY[key].value]
    );
  }

  let subComponents = [];
  const sComponents = component.subComponents;
  for (let value in sComponents) {
    subComponents.push({
      subIdentifier: sComponents[value].subIdentifier,
      subProductEmission: sComponents[value].subProductEmission,
      subProductName: sComponents[value].subProductName,
      amount: sComponents[value].amount,
    });
  }
  componentThing = addStringNoLocale(
    componentThing,
    SOLID_TYPES.SUB_COMPONENT,
    JSON.stringify(subComponents)
  );
  componentThing = addUrl(componentThing, RDF.type, SOLID_TYPES.PRODUCT);
  componentSolidDataSet = setThing(componentSolidDataSet, componentThing);
  console.log(componentSolidDataSet);
  try {
    await saveSolidDatasetAt(
      SOLID_RESOURCE_URL.MAIN_COM,
      componentSolidDataSet,
      { fetch: fetch }
    );
    await adjustSubDataSet(sComponents, component);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

//// //// //////

export const getComponent = async (identifier) => {
  const { MAIN_COM, SUB_COM } = SOLID_RESOURCE_URL;
  let myDataset = await getSolidDataset(MAIN_COM, { fetch: fetch });
  let isComponent = isThingExsists(myDataset, `${MAIN_COM}#${identifier}`);
  let isSubComponent = false;
  if (!isComponent) {
    myDataset = await getSolidDataset(SUB_COM, { fetch: fetch });
    isComponent = isThingExsists(myDataset, `${SUB_COM}#${identifier}`);
    if (!isComponent) {
      return { success: false };
    } else {
      isSubComponent = true;
    }
  }
  const cmp = getThing(
    myDataset,
    `${isSubComponent ? SUB_COM : MAIN_COM}#${identifier}`
  );
  const properties = Object.values(
    isSubComponent ? SOLID_SUB_PROPERTY : SOLID_MAIN_PROPERTY
  );
  if (isComponent) {
    let componentValue = {};
    properties.forEach((item) => {
      componentValue[item.value] = getStringNoLocale(cmp, item.url);
    });
    let subPossibleArray = JSON.parse(
      getStringNoLocale(
        cmp,
        isSubComponent ? SOLID_TYPES.PART_OF : SOLID_TYPES.SUB_COMPONENT
      )
    );
    componentValue.isSubComponent = isSubComponent;
    componentValue[
      isSubComponent ? "isPartOf" : "subComponents"
    ] = subPossibleArray;
    return { componentValue, success: true };
  }
};
