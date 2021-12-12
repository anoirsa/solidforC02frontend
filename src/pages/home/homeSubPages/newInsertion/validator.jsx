

export const mainCmpValidator = (inputs) => {
    // Debug
    console.log("Inputs are");
    console.log(inputs)


    let errors = {};
    for (let key in inputs) {
        if (key !== 'subComponents' && key !== 'productEmission') {
            console.log("We are here" + key);
            inputs[key] = inputs[key].trim()
        }
    }
    if (inputs.productName === "") {
        errors.productName = 'Product name cannot be empty'
    }
    if (inputs.countryOrigin === "") {
        errors.countryOrigin = 'Country of origin cannot be empty'
    }
    if (inputs.identifer === "") {
        errors.identifer = "Identfier cannot be empty"
    }
    if (inputs.productEmission === "") {
        errors.productEmission = "The product must have emissions"
        if (isNaN(errors.productEmission)) {
            errors.productEmission = "Must be number"
        }
    }

    return errors
}