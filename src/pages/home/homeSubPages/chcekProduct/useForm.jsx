import {useContext, useState} from 'react';
import { Context } from '../../../../context/DataContext';


const useMainInput = () => {
    const [productIdentifer, setProductIdentifer] = useState("");
    const {getReadComponent} = useContext(Context);

    const rComponent = async () => {
        await getReadComponent(productIdentifer);
    }
    return {productIdentifer, setProductIdentifer, rComponent}
}



export {useMainInput};