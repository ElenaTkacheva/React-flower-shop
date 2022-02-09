import { useState } from "react";
import { datas } from "./datas";
import "./App.css";

function About() {

    const [photo, setPhoto] = useState(0);
    const {id, img} = datas[photo];

    const previousPhoto = () => {
        setPhoto(photo => {
            photo--;
            if (photo < 0) {
                return datas.length - 1;
            }
            return photo;
        })
    }

    const nextPhoto = () => {
        setPhoto(photo => {
            photo++;
            if (photo > datas.length - 1) {
                photo = 0;
            }
            return photo;
        })
    };
  
  return (
    <div className="container center">
      <h2 className="subtitle-main">Order today</h2>
      <h3 className="review">
        Guarantee the best selection of flowers and gifts for your present it is
        too late!
      </h3>
      <img className="slider" src={img} alt="bouquet" />
      <div className="btn-wrapper-slider">
        <button className="btn-next" onClick={previousPhoto}>
          &lt;
        </button>
        <button className="btn-next" onClick={nextPhoto}>
          &gt;
        </button>
      </div>
      <h3 className="contacts">Contact us:</h3>
      <div className="contacts-info">
        <div className="column">
          <h4 className="column-title">Customer Service</h4>
          <a href="#">Help</a>
          <a href="#">FAQ</a>
          <a href="#">Delivery Info</a>
          <a href="#">Refund Policy</a>
        </div>
        <div className="column">
          <h4 className="column-title">Contact</h4>
          <a href="#">1-(888)-888-88-88</a>
          <a href="#">email@gmail.com</a>
          <p>8888 King Ave</p>
          <p>Montreal, QC</p>
        </div>
      </div>
    </div>
  );
}

export default About;
