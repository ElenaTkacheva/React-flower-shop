function Home() {
 return (
   <div className="container">
     <div className="home-main home-main-mobile">
       <img className="image-main" src="../image/photo6.jpg" alt="flowers" />
       <div className="home-main-title">
         <h1 className="title-main">New Collections</h1>
         <h2 className="subtitle-main">A Perfect Bouquet</h2>
         <a href="/shop" className="btn-shop">
           SHOP
         </a>
       </div>
     </div>
     <div className="row-first">
       <img src="../image/photo2.jpg" alt="flowers" />
       <img src="../image/photo3.jpg" alt="flowers" />
     </div>
     <h3 className="review">
       All of our products are professionally designed and hand-delivered by a
       Canadian florist.
     </h3>
     <div className="row-first">
       <img src="../image/photo4.jpg" alt="flowers" />
       <img src="../image/photo5.jpg" alt="flowers" />
     </div>
     <p className="home-desc">
       Our <a href="/about">Customer Service Team</a> is a dedicated group of
       caring, knowledgeable professionals who are fully committed to the
       highest levels of service and Customer Satisfaction.
     </p>
   </div>
 );
}

export default Home;