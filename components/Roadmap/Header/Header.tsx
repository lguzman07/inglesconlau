import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.eyebrow}>TU RECORRIDO</p>

      <h2 className={styles.title}>
        Así es como
        <br />
        aprenderás inglés.
      </h2>

      <p className={styles.description}>
        No encontrarás una colección de clases al azar.
        <br />
        Cada lección prepara la siguiente para que avanzar se sienta natural.
      </p>

      <div className={styles.path}>
        <span className={styles.bubble}>🌱 Hablar</span>
        <span className={styles.arrow}>⟶</span>
        <span className={styles.bubble}>🎙️ Pronunciar</span>
        <span className={styles.arrow}>⟶</span>
        <span className={styles.bubble}>🧠 Entender</span>
        <span className={styles.arrow}>⟶</span>
        <span className={styles.bubble}>💬 Conversar</span>
        <span className={styles.arrow}>⟶</span>
        <span className={styles.bubble}>🌎 Vivir el inglés</span>
      </div>
    </div>
  );
}