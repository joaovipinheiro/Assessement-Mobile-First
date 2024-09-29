import React from "react";
import qrCode from "../assets/qrcode.png";
import styles from "./InfoCard.module.css";

const InfoCard = () => {
  return (
    <div className={styles.infoCard}>
      <h3>Saiba mais sobre</h3>
      <img src={qrCode} alt="QR Code" className={styles.qrCode} />
    </div>
  );
};

export default InfoCard;
