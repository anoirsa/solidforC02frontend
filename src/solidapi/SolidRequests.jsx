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
  SOLID_PROPERTY,
  SOLID_RESOURCE_URL,
  SOLID_TYPES,
} from "../globals/GlobalSolid";
import { SignalCellularNull } from "@material-ui/icons";

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
    if (
      !isThingExsists(
        componentSolidDataSet,
        `${SOLID_RESOURCE_URL.SUB_COM}#${subComponent[i].subIdentifier}`
      )
    ) {
       // Debug
       console.log("Thing has been created");
       //
      thingToAdd = createThing({ name: subComponent[i].subIdentifier });

      for (let key in SOLID_SUB_PROPERTY) {
        thingToAdd = addStringNoLocale(
          thingToAdd,
          SOLID_SUB_PROPERTY[key].url,
          subComponent[i][SOLID_SUB_PROPERTY[key].value]
        );
      }
      thingToAdd = addUrl(thingToAdd, RDF.type, SOLID_TYPES.PRODUCT);
    } else {
      // Debug
      console.log("Thing has been gotten");
      //
      thingToAdd = getThing(
        componentSolidDataSet,
        `${SOLID_RESOURCE_URL.SUB_COM}#${subComponent[i].subIdentifier}`
      );
    }
    // Debug
    console.log("Thing is:");
    console.log(thingToAdd);
    //
    thingToAdd = buildThing(thingToAdd)
      .addStringNoLocale(
        SOLID_TYPES.PART_OF,
        JSON.stringify({
          name: mainComponent.productName,
          identifer: mainComponent.identifer,
        })
      )
      .build();

    // Debug
    console.log("Thing after modification:");
    console.log(thingToAdd);
    //

    componentSolidDataSet = setThing(componentSolidDataSet, thingToAdd);
    const savedSolidDataSet = await saveSolidDatasetAt(
      SOLID_RESOURCE_URL.SUB_COM,
      componentSolidDataSet,
      { fetch: fetch }
    );
  }
};

export const addComponent = async (component) => {
  let componentSolidDataSet = await initiatDataSet(SOLID_RESOURCE_URL.MAIN_COM);

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
      subComponentIdentifier: sComponents[value].subIdentifier,
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
    const savedSolidDataSet = await saveSolidDatasetAt(
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
