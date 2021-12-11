import React, {useState} from 'react';


const useMainInput = () => {
    const [productIdentifer, setProductIdentifer] = useState("");

    return {productIdentifer, setProductIdentifer}
}



export {useMainInput};