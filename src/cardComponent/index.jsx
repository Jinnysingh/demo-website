import React, { useState} from 'react';
import "./index.css"
import Card from "../Cards/index"

// let object = [{
//     image: "/images/image1.jpeg",
//     cardTitle: "Barbeque Nation",
//     address: "Pan India",
//     offer: "Food Voucher",
//     offerDesc: "Buy a gift voucher and get two free"
// }]



const CardComponent = () => {
    return (
        <> 
            <div className="col-md-3">
                <Card 
                    image="/images/image1.jpeg"
                    cardTitle= "Barbeque Nation"
                    address= "Pan India"
                    offer = "Food Voucher"
                    offerDesc= "Buy a gift voucher and get two free"
                />
                </div>
            <div className="col-md-3">
                <Card
                    image="/images/image2.jpeg"
                    cardTitle="Barbeque Nation"
                    address="Pan India"
                    offer="Food Voucher"
                    offerDesc="Buy a gift voucher and get two free"
                />
            </div>
            <div className="col-md-3">
                <Card
                    image="/images/image3.jpeg"
                    cardTitle="Barbeque Nation"
                    address="Pan India"
                    offer="Food Voucher"
                    offerDesc="Buy a gift voucher and get two free"
                />
            </div>
            <div className="col-md-3">
                <Card
                    image="/images/image4.jpeg"
                    cardTitle="Barbeque Nation"
                    address="Pan India"
                    offer="Food Voucher"
                    offerDesc="Buy a gift voucher and get two free"
                />
            </div>
        </>
    );
}

export default CardComponent;
