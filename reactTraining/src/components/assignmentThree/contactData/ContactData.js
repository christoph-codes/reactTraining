import React, { useState, useEffect } from "react";
import "./ContactData.scss";

export default function ContactData(props) {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactAddress, setContactAddress] = useState({
    street: "",
    zipCode: ""
  });
  const [purchaseable,setPurchaseable] = useState(false);

  const updatePurchaseableStatus = () => {
    if(contactName && contactEmail && contactAddress.street && contactAddress.zipCode) {
        setPurchaseable(true);
    } else {
        setPurchaseable(false);
    }
  }

  const handleOrderData = () => {
    let orderData = {
        name: contactName,
        email: contactEmail,
        address: contactAddress
    }
    props.checkoutConfirmed(orderData)
  }

  const customerInformation = (
        <div className="customer-information">
          <h4>Customer Information</h4>
          <p>{contactName}</p>
          <p>{contactEmail}</p>
          <p>
            {contactAddress.street} <br /> {contactAddress.zipCode}{" "}
          </p>
          <small>Please confirm all of the information in the fields are correct and click purchase when you are ready!</small>
          <button onClick={handleOrderData} disabled={!purchaseable} className='cta btn'>Purchase</button>
          <button onClick={props.checkoutCancelled} className="btn cancel">Cancel</button>
        </div>
  );

  useEffect(() => {
      updatePurchaseableStatus();
  });

  return (
    <div className="ContactData">
      <h3>Enter Contact Info</h3>
      <p>
        First we need to get your order information so we know where to ship
        your burger!
      </p>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={e => setContactName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={e => setContactEmail(e.target.value)}
      />
      <input
        type="text"
        name="street_address"
        placeholder="Your Address"
        onChange={e => {
          const val = e.target.value;
          setContactAddress(prev => {
            return {
              ...prev,
              street: val
            };
          });
        }}
      />
      <input
        type="text"
        name="zipcode_address"
        placeholder="Your Zip Code"
        onChange={e => {
          const val = e.target.value;
          setContactAddress(prev => {
            return {
              ...prev,
              zipCode: val
            };
          });
        }}
      />
      {contactName || contactEmail || contactAddress.street || contactAddress.zipCode ? customerInformation : null}
    </div>
  );
}
