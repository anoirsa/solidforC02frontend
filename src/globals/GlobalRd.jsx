/**
 TOTAL_EMISSION_PER_COM mean total emission per sub component
 for example if a sub-component has 5 amount and each piece generates 50 Kg carbon emissions the total 
 therefore is 50 X 5 = 250
 */

export const ACTIONS = {
  FILL_FORM: "fillform",
  FOCUS_SET: "focusset",
  INPUT_SET: "inputset",
  ADD_SUB_TO_MAIN: "addSubToMain",
  TOTAL_EMISSION_PER_SUB_COM: "totalemissionpersubcom",
  TOTAL_EMISSIONS_OF_ALL: "totalemissionsofall",
  CLEAR: "clear",
};

export const INPUTS_FOCUS = {
  PRODUCT_FOCUS: "productFocus",
  COUNTRY_FOCUS: "countryFocus",
  IDENTIFIER_FOCUS: "identifierFocus",
  EMISSION_FOCUS: "emissionFocus",
  SUB_PRODUCT_FOCUS: "subProductFocus",
  SUB_IDENTIFIER_FOCUS: "subIdentifierFocus",
  SUB_EMISSION_FOCUS: "subEmmissionFocus",
  AMOUNT: "amountFocus",
};

// CMP refeers to components
export const CMP_MAIN_INPUTS = {
  PRODUCT: "productName",
  COUNTRY: "countryOrigin",
  IDENTIFIER: "identifer",
  EMISSION: "productEmission",
};

export const CMP_SUB_INPUTS = {
  PRODUCT: "subProductName",
  IDENTIFIER: "subIdentifier",
  EMISSION: "subProductEmission",
  AMOUNT: "amount",
};
//  FOR facilitating

export const DETAILS_INPUT = (isMain) => {
  let returnedArray = [
    {
      label: "Product name",
      valueName: isMain ? "productName" : "subProductName",
    },
    {
      label: "Identifier",
      valueName: isMain ? "identifer" : "subIdentifier",
    },
    {
      label: "Product emission:",
      valueName: isMain ? "productEmission" : "subProductEmission",
    },
  ];
  if (isMain) {
    returnedArray.push({
      label: "Country of origin: ",
      valueName: "countryOrigin",
    });
  }
  return returnedArray;
};

export const MODAL_OPTIONS_TEXT = {
  insertHeader: "Data enetred Succesfully !",
  insertText:
    "You have entered successfully new component details with the following information:",
  searchHeader: "Search results are:",
  searchText: "The information were entered by authenticated owner",
  insertErrorHeader: "Insertion error",
  insertErrorText: "There is an error while saving the data in  our database",
  insertErrorPos: ["- Component has been inserted before", "- Server problem"],
  searchErrorHeader: "Search results not found",
  searchErrorText: "There is an error while searching for the product details",
  searchErrorPos: [
    "- No component with this identifier in our dataset",
    "- Server problem.",
  ],
  errorAdvice:
    "Please feel free to contact our customer service to inquire about the issue or if you would like to edit some data.",
  partOf: "This component is included in these products",
  subComponentsAre: "Sub components are:",
};
