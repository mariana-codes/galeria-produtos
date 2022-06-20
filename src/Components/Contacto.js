import React from "react";
import styles from "./Contacto.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contacto = () => {
  return (
    <section className={`${styles.contacto} animeLeft`}>
      <Head title="Contactos" description="Entra em contacto" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contacto</h1>
        <ul className={styles.dados}>
          <li>
            <a href="mailto:hello@mariana.codes">hello@mariana.codes</a>
          </li>
          <li>
            <a href="https://mariana.codes/" target="_blank">
              www.mariana.codes
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacto;
