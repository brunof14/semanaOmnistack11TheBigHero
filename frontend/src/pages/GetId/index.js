import React from "react";

import { Link, useHistoryl, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function GetId() {
  const { id } = useParams();

  return (
    <div className="getid-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro Efetuado</h1>
          <p>
            Seu ID de acesso: <strong>{id}</strong>
          </p>
          <Link className="back-link button" to="/">
            <FiArrowLeft size={16} color="white" />
            Fazer Logon
          </Link>
        </section>
      </div>
    </div>
  );
}
