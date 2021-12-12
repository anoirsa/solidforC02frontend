export const SOLID_RESOURCE_URL = {
  MAIN_COM:
    "https://pod.inrupt.com/anoirsana/profile/otherFolder/maincomponents",
  SUB_COM: "https://pod.inrupt.com/anoirsana/profile/otherFolder/subcomponents",
};

export const SOLID_TYPES = {
  PRODUCT: "http://schema.org/Product",
  SUB_COMPONENT: "http://schema.org/isRelatedTo",
  QUANTITY: "http://schema.org/amountOfThisGood",
  PART_OF: "http://schema.org/IsAccessoryOrSparePartFor",
};

/** 
export const SOLID_MAIN_PROPERTY = {
    COUNTRY_OF_ORIGIN: "https://schema.org/countryOfOrigin",
    NAME : "https://schema.org/name",
    IDENTIFIER: "https://schema.org/identifier",
    PRODUCT_EMISSIONS: "https://schema.org/emissionsCO2"
}
**/

export const SOLID_MAIN_PROPERTY = {
  COUNTRY_OF_ORIGIN: {
    url: "http://schema.org/countryOfOrigin",
    value: "countryOrigin",
  },
  NAME: {
    url: "http://schema.org/name",
    value: "productName",
  },
  IDENTIFIER: {
    url: "http://schema.org/identifier",
    value: "identifer",
  },
  PRODUCT_EMISSIONS: {
    url: "http://schema.org/emissionsCO2",
    value: "productEmission",
  },
};

export const SOLID_SUB_PROPERTY = {
  NAME: {
    url: "http://schema.org/name",
    value: "subProductName",
  },
  IDENTIFIER: {
    url: "http://schema.org/identifier",
    value: "subIdentifier",
  },
  PRODUCT_EMISSIONS: {
    url: "http://schema.org/emissionsCO2",
    value: "subProductEmission",
  },
};
