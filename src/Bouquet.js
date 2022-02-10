import { useState } from "react";

function Bouquet({ flowerForSale }) {

    const [showMore, setShowMore] = useState(false);


     const setShowClick = (element) => {
       element.showMore = !element.showMore;
       setShowMore(!showMore);
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
            <button className="btn-show" onClick={() => setShowClick(element)}>
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