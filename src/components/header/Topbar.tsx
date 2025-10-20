import React from "react";
import styles from "./Topbar.module.css";
import { FaPhoneAlt, FaWhatsapp, FaCapsules } from "react-icons/fa";

const Topbar: React.FC = () => {
  const phoneNumber = "+254700000000";
  
  return (
    <header className={styles.topbar}>
      <div className={styles.container}>
        {/* Pharmacy Brand */}
        <div className={styles.brand}>
          <FaCapsules className={styles.logoIcon} aria-hidden="true" />
          <h1 className={styles.brandName}>MAPLEWOOD PHARMACY JUJA</h1>
        </div>

        {/* Tagline */}
        <p className={styles.tagline}>
          Smart Care for a Modern World — Caring Beyond Prescriptions
        </p>

        {/* Contact Actions */}
        <nav className={styles.actions} aria-label="Contact options">
          <a 
            href={`tel:${phoneNumber}`}
            className={styles.callBtn}
            aria-label="Call to order"
          >
            <FaPhoneAlt className={styles.icon} aria-hidden="true" />
            <span>Call to Order</span>
          </a>
          <a
            href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label="Order via WhatsApp"
          >
            <FaWhatsapp className={styles.icon} aria-hidden="true" />
            <span>WhatsApp Order</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;