 

 export const ACTIONS = {
    FILL_FORM: 'fillform',
    FOCUS_SET: 'focusset',
    INPUT_SET : 'inputset',
    ADD_SUB_TO_MAIN: 'addSubToMain'
 }

 export const INPUTS_FOCUS =  {
     PRODUCT_FOCUS: 'productFocus',
     COUNTRY_FOCUS: 'countryFocus',
     IDENTIFIER_FOCUS: 'identifierFocus',
     EMISSION_FOCUS: 'emissionFocus',
     SUB_PRODUCT_FOCUS: 'subProductFocus',
     SUB_IDENTIFIER_FOCUS: 'subIdentifierFocus',
     SUB_EMISSION_FOCUS: 'subEmmissionFocus'

 }


// CMP refeers to components 
export const CMP_MAIN_INPUTS = {
    PRODUCT: 'productName',
    COUNTRY: 'countryOrigin',
    IDENTIFIER: 'identifer',
    EMISSION: 'productEmission'
}

export const CMP_SUB_INPUTS = {
    PRODUCT: 'subProductName',
    IDENTIFIER: 'subIdentifier',
    EMISSION: 'subProductEmission'
}