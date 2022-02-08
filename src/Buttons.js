function Buttons({ filteredBouquet }) {
  return (
    <div className="cont">
      <button className="btn-cont" onClick={() => filteredBouquet("Birthday")}>
        Birthday
      </button>
      <button
        className="btn-cont"
        onClick={() => filteredBouquet("Sentiments")}
      >
        Sentiments
      </button>
      <button className="btn-cont" onClick={() => filteredBouquet("Thank You")}>
        Thank You
      </button>
      <button className="btn-cont" onClick={() => filteredBouquet("Occasions")}>
        Occasions
      </button>
      <button className="btn-cont" onClick={() => filteredBouquet("Sympathy")}>
        Sympathy
      </button>
    </div>
  );
}

export default Buttons;