import "./footer.css";
const Footer = () => {
  return (
    <div
      className="footer-main-container"
      id="footer"
      style={{
        fontSize: "20px",
      }}
    >
      <div className="footer-primary-container">
        <div className="footer-content">
          <div className="footer-content-child1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.9210663529684!2d73.7354821376651!3d18.598310616009293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb1058e0556f%3A0xb0a9356c5227a980!2sGuru%20Krupa%20Bike%20Rentals!5e0!3m2!1sen!2sin!4v1707385263850!5m2!1sen!2sin"
              width="300"
              height="300"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
          <div
            className="footer-content-child2"
            style={{
              color: "white",
              fontSize: "24px",
              textDecoration: "underline",
              display: "flex",
              alignItems: "end",
            }}
          >
            <address
              style={{
                lineHeight: "50px",
                backgroundColor: "black",
                borderRadius: "13px",
                padding: "5px 10px",
              }}
            >
              Gurukrupa Sales and Services, Lakshmi Chowk Road Hinjawadi, Behind
              MRF Showroom, Near Mukai Food Court, Mukai Nagar,
              Hinjawadi-411057, Pune, Maharashtra, India
            </address>
          </div>
          <div className="footer-content-child3">
            <p>
              Life&apos;s Beautiful Ride: Make every moment count on two wheels.
              Rent a bike and transform your travels into a canvas of
              experiences, where each pedal stroke paints a story of exploration
              and joy.
            </p>
            <p>
              Adventure Awaits: Embark on a journey of discovery with our rental
              bikes. Explore new horizons, create lasting memories, and
              experience the freedom of the open road.
            </p>
            <p>
              Pedal to Freedom: Break free from the ordinary and embrace the
              extraordinary with our bike rentals. Feel the wind in your hair as
              you pedal towards unforgettable moments and scenic wonders.
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            &copy;All Rights Reserverd{" "}
            <span
              style={{
                textDecoration: "underline",
                color: "rgb(203, 203, 203)",
              }}
            >
              Gurukrupa Sales
              and Services
            </span>
          </p>
          <div>
            <a
              href="tel:+917378753636"
              style={{
                color: "orange",
              }}
            >
              Phone :- +91 7378753636
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
