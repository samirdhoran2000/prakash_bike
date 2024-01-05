
import  { useState } from "react";
import SingleCard from "./SingleCard";
import "./card.css";
const BikeData = [
  {
    bikeId: 1,
    imgSrc: "/Royal_Enfield_Classic_350.png",
    bikeName: "Royal Enfield Classic 350",
    category: "bike",
    ammount: 1499,
    discountedAmmount:1199,
    desc: "Experience the legendary charm of the Royal Enfield Classic 350 as you ride into the essence of timeless elegance and unmatched power on your rental journey.",
  },
  {
    bikeId: 7,
    imgSrc: "/Activa.png",
    bikeName: "Honda Activa 125",
    category: "scooter",
    ammount: 499,
    desc: "Effortless elegance meets seamless performance - experience the city in style with our Activas for rent.",
  },
  {
    bikeId: 2,
    imgSrc: "/TVS_Rider.webp",
    bikeName: "TVS Rider ",
    category: "bike",
    ammount: 799,
    desc: "Unleash the rider in you with TVS - where every journey is a symphony of freedom, power, and unforgettable experiences.",
  },
  {
    bikeId: 8,
    imgSrc: "/TVS_Jupiter.png",
    bikeName: "TVS Jupiter ",
    category: "scooter",
    ammount: 599,
    desc: "Ride the epitome of style and reliability with TVS Jupiter - where every journey becomes an effortless joyride on two wheels.",
  },
  {
    bikeId: 3,
    imgSrc: "/Honda_Shine.png",
    bikeName: "Honda Shine",
    category: "bike",
    ammount: 499,
    desc: "Ride the elegance, embrace the performance - Honda Shine, where every journey becomes a shimmering experience in motion.",
  },
  {
    bikeId: 4,
    imgSrc: "/Honda_Unicorn.png",
    bikeName: "Honda Unicorn",
    category: "bike",
    ammount: 599,
    desc: "Unleash the power of smooth rides and unmatched reliability with the Honda Shine - your perfect companion for rental adventures on two wheels.",
  },
  {
    bikeId: 5,
    imgSrc: "/yamaha_fz.webp",
    bikeName: "Yamaha FZ",
    category: "bike",
    ammount: 599,
    desc: "Unleash the power of Yamaha FZ: Elevate your ride, amplify the thrill. Experience the pinnacle of performance with our premium FZ rentals.",
  },
  {
    bikeId: 6,
    imgSrc: "/TVS_Apache.webp",
    bikeName: "TVS Apache",
    category: "bike",
    ammount: 599,
    desc: "Ride the adrenaline wave with our TVS Apache rentals - where precision meets performance, and every journey becomes a symphony of speed and style.",
  },
  {
    bikeId: 9,
    imgSrc: "/Vespa_Classic.webp",
    bikeName: "Vespa Classic",
    category: "scooter",
    ammount: 399,
    desc: "Embrace the allure of a bygone era with our classic Vespa rentals—a timeless ride that effortlessly blends style and sophistication on the urban streets.",
  },
  {
    bikeId: 10,
    imgSrc: "/Suzuki_Access_125.png",
    bikeName: "Suzuki Access 125",
    category: "scooter",
    ammount: 399,
    desc: "Elevate your ride, seize the city with Suzuki Access 125 – where style meets performance in every rental journey.",
  },
  {
    bikeId: 11,
    imgSrc: "/TVS_Ntorque.png",
    bikeName: "TVS Ntorque 125",
    category: "scooter",
    ammount: 399,
    desc: "Experience urban exhilaration with the TVS Ntorq 125 – redefine your ride, redefine your journey, now available for rent.",
  },
];
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
      <div className="category-main-container">
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
