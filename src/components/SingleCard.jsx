// import Image from "next/image";

import "./card.css";

const SingleCard = ({
  bikeId,
  imgSrc,
  bikeName,
  category,
  ammount,
  discountedAmmount,
  desc,
}) => {
  return (
    <div className="basic-container">
      <img
        className="img-card"
        src={imgSrc}
        loading="lazy"
        alt={`Image of ${bikeName}`}
        style={{
          borderRadius: "15px",
        }}
      />
      <div className="desc-container">
        <div>
          <h2>{bikeName}</h2>
          {/* <button>Available</button> */}
        </div>
        <div>
          <button>Available</button>
          <h2
            style={{
              fontWeight: 500,
              fontSize: "18px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                textDecoration: bikeId === 1 ? "line-through" : "",
              }}
            >
              {ammount}/Day
            </p>
            {discountedAmmount && (
              <p
                style={{
                  color: "rgb(203, 127, 42)",
                }}
              >
                {discountedAmmount}/Two Days OR More
              </p>
            )}
          </h2>
        </div>
        <p
          style={{
            padding: "5px 7px",
          }}
        >
          {desc}
        </p>

        <button>
          <a
            href={`https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'm%20interested%20in%20renting%20a%20bike.%20Can%20you%20please%20provide%20details%20on%20availability%20,rates,%20and%20any%20necessary%20information?%20about%20${bikeName}%20Thank%20you!`}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Enquiry
          </a>
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
