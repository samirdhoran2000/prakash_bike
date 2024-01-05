import "./footer2.css";
const Footer2 = () => {
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
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3781.4994077907804!2d73.73166607465392!3d18.596594066848674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM1JzQ3LjciTiA3M8KwNDQnMDMuMyJF!5e0!3m2!1sen!2sin!4v1704433241135!5m2!1sen!2sin"
              width="300"
              height="300"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
          <div className="footer-content-child2" style={{
            color: "white",
            fontSize: '24px',
            textDecoration:"underline"
          }}>
            <p style={{
              lineHeight:"50px"
            }}>
              Gurukrupa Sales and Services, Hinjawadi Lakshmi Chowk Road, Behind
              MRF Showroom, near Mukai Food Court, Mukai Nagar,
              Hinjawadi-411057, Pune, Maharashtra
            </p>
          </div>
          <div className="footer-content-child3" 
            >
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
          <p>&copy; All Rights Reserverd Gurukrupa Sales and Services </p>
          <div>
            <a href="tel:+917378753636" style={{
              color:"orange"
            }}>Phone :- +91-7378753636</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
