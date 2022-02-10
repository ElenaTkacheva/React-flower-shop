import { useState } from "react";
import { data } from "./data";
import "./App.css";
import Bouquet from "./Bouquet";
import Buttons from "./Buttons";

function Shop() {
  const [bouquet, setBouquet] = useState(data);
  

  const chosenBouquet = (searchTerm) => {
    const newBouquet = data.filter(
      (element) => element.searchTerm === searchTerm
    );
    setBouquet(newBouquet);
  };

  return (
    <div>
      <div className="cont">
        <h2 className="banner">
          Order flowers online for same day delivery across Quebec seven days a week, including Sundays.
        </h2>
      </div>
      <Buttons filteredBouquet={chosenBouquet} />
      <Bouquet flowerForSale={bouquet} />
    </div>
  );
}

export default Shop;
