// import Image from "next/image";

import "./card.css";

const SingleCard = ({ bikeId, imgSrc,bikeName, category, ammount, desc}) => {
  return (

        <div className="basic-container">
          <img className="img-card"
        src={imgSrc}
        loading="lazy"
           
        alt={`Image of ${bikeName}`} style={{
              borderRadius:'15px'
            }} />
          <div className="desc-container">
            <div>
              <h2>{bikeName}</h2>
              {/* <button>Available</button> */}
            </div>
            <div>
              <button>Available</button>
                  <h2 style={{
                      fontWeight: 500,
                      fontSize:"18px"
              }}>{ammount}/Day</h2>
            </div>
        <p style={{
              padding:'5px 7px'
            }}>{desc}</p>

            <button>View</button>
          </div>
        </div>
     
  );
}

export default SingleCard;