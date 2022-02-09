import { useState } from "react";
import { data } from './data';

function Bouquet({ flowerForSale }) {

    const [bouquets, setBouquet] = useState(data);


     const setShowMore = (id) => {
       const newSet = [];
       bouquets.forEach((bouquet) => {
         if (bouquet.id === id) {
           const changedShop = { ...bouquets, showMore: !bouquet.showMore };
           newSet.push(changedShop);
         } else {
           newSet.push(bouquet);
         }
       });
       setBouquet(newSet);
     };

  return (
      <div className="products">
      {flowerForSale.map((element => {
      const { id, name, searchTerm, price, description, image, showMore } = element;
      
    return (
      <div key={id} className="product-card">
        <img src={image} width="250px" alt="bouquet" />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <h4 className="product-price">$ {price}</h4>
          <p>
            {showMore ? description : description.substring(0, 120) + "..."} 
            <button className="btn-show" onClick={() => setShowMore(id)}>
              {showMore ? "Show less" : "Show more"}
            </button>
          </p>
        </div>
        <div className="btn-wrapper">
          <button className="btn-order">Order</button>
        </div>
      </div>
    );
  }))}
  </div>
  )
}

export default Bouquet;