import React, { useRef } from "react";
import delivery from "../imgs/delivery.png";
import securePayment from "../imgs/securePayment.png";
import returnFree from "../imgs/return.png";
import useOnScroll from "../hooks/useOnScroll";

function Services() {
  const targetRef = useRef(null);
  const visible = useOnScroll(
    {
      root: null,
      rootMargin: "-50px 0px 0px 50px",
      threshold: 0.4,
    },
    targetRef
  );
  if (visible) {
    targetRef.current.classList.add("active");
  }

  return (
    <div className={`services-container fade-in `} ref={targetRef}>
      <div className="service">
        <img src={delivery} alt="Icons of services" />
        <div>
          <h3>FREE SHIPPING</h3>
          <p>Free shipping on all order above 100$</p>
        </div>
      </div>
      <div className="service">
        <img src={returnFree} alt="Icons of services" />
        <div>
          <h3>30 DAYS RETURN </h3>
          <p>Simply return it within 30 days for an exchange</p>
        </div>
      </div>
      <div className="service">
        <img src={securePayment} alt="Icons of services" />
        <div>
          <h3>100% PAYMENT SECURE</h3>
          <p>Centralized Secure payment method</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
