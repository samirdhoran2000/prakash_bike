import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = () => {
    setIsChecked(!isChecked);
 };
  return (
    <div className="nav">
      <input
        type="checkbox"
        id="nav-check"
        onClick={() => {
          handleChange();
        }}
      />
      <div className="nav-header">
        <div className="nav-title">Rental Bike</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div
        className="nav-links"
        style={{
          height: isChecked === false ? "0" : "100vh",
        }}
      >
        <a
          href={"/#home"}
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          Home
        </a>
        <a
          href={"/#services"}
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          Services
        </a>
        <a href={"tel:+917378753636"}>Contact Us</a>
        <a href="https://wa.me/917378753636?text=I%20would%20like%20to%20chat%20with%20you">
          Whatsapp
        </a>
        <a
          href={"#footer"}
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          About Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
