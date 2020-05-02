import React from 'react';
import "./index.css"
import ImagePopup from '../PopupImage';

class Card extends React.Component {
  constructor(props){
      super(props)
      this.state={
        openImage : false,
        imageLink : ""
      }
  }

    // openImage = (event) =>{
    //     let Value = event.target.src
    //     localStorage.setItem("imageLink", Value)
    //     Window.open

    //     // this.setState({
    //     //     openImage : true,
    //     //     imageLink: Value
    //     // })
    // }

  render(){
      const { image, cardTitle, address, offer, offerDesc} = this.props
      const {openImage, imageLink } = this.state
    return(
    <>
        <div className="card">
                <img src={image} onClick={this.openImage}></img>
            <div className="card-body">
                <h5 className="font-weight-bold mb-0" >{cardTitle}</h5>
                <p className="card-address">{address}</p>
                <p className="pt-10 pb-10 card-address">{offer}</p>
                <p className="card-address">{offerDesc}</p>
                <div className="footer-icons">
                    <img src="/images/like.png" className="like-icons"></img>
                    <img src="/images/buy-now.jpg" className="buy-now-icons"></img>
                </div>
            </div>
        </div>
        {/* {openImage &&  
            <ImagePopup
                imageLink={imageLink} />
        } */}
    </>
    )
}
}
    export default Card;

