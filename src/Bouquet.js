import { useState } from "react";

function Bouquet({ flowerForSale }) {
  return (
      <div className="products">
      {flowerForSale.map((element => {
      const { id, name, searchTerm, price, description, image } = element;
      const [showMore, setShowMore] = useState(false);
    return (
        <div key = {id} className="product-card">
            <img src = {image} width='250px'  alt='bouquet' />
            <div className="product-info">
                <h3 className="product-name">{ name }</h3>
                <h4 className="product-price">$ { price }</h4>
                <p>
                    { showMore ? description : description.substring(0, 140) + '...'}
                    <button className="btn-show" onClick={() => setShowMore(!showMore)}>{ showMore ? 'Show less' : 'Show more' }</button>
                </p>
            </div>
        </div>
    )
  }))}
  </div>
  )
}

export default Bouquet;