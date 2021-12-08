
import React from 'react'
import { BoxContainer,SubName, InfosSub} from './BoxSubSC'
import {RemoveRedEye} from "@material-ui/icons";
// sData stands for sub components data

// Example

const dataExample = {
    subProductName: "ALG Keyboard",
    subIdentifier: "7439-4930-0001",
    subProductEmission: "12200",
    amount: 2,
    totalCarbonEmission: "24400"
}

function BoxSub({sData}) {
    return (
        <BoxContainer>
            <SubName>
                {sData.subProductName}
            </SubName>
            <InfosSub>
                <p>Identifier: {sData.subIdentifier}</p>
                <p>Emissions: {sData.subProductEmission} kt</p>
                <p>Amount: {sData.amount}</p>

            </InfosSub>
        </BoxContainer>
    )
}

const SeeMore = () => {

    return (
        <BoxContainer>
            <RemoveRedEye className="icon--see" />
        </BoxContainer>
    )

}
export default BoxSub
export {SeeMore}
