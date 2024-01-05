
import  { useState } from "react";
import "./card.css";
import SingleCard from "./SingleCard";
import {BikeData} from '../assets/data'
const Card = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [bikeData, setBikeData] = useState(BikeData);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
   
    const vehData = BikeData.filter((item) => {
      if (category==='all') {
        return item;
      }
      return item.category === category;
    });

    setBikeData(vehData);
  };

  const category = ["all", "bike", "scooter"];
  return (
    <div className="card-main-container" id="services">
      <div className="category-main-container" data-aos="zoom-in-down">
        <div
          style={{
            background: "rgb(164 173 255)",
            padding: "10px",
            width: "600px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          <div className="category-sub-container">
            {category.map((cat) => {
              return (
                <button
                  key={cat}
                  className="category-btn"
                  onClick={() => {
                    handleCategoryClick(cat);
                  }}
                  style={{
                    backgroundColor:
                      selectedCategory === cat ? "#ffc9ae" : "antiquewhite",
                    border:
                      selectedCategory === cat ? " 2px solid black" : "none",
                    textTransform: "capitalize",
                    boxSizing: "border-box",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="card-sub-main-container">
        <div className="card-sub-container">
          {bikeData.map((item) => {
            return <SingleCard key={item.bikeId} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
