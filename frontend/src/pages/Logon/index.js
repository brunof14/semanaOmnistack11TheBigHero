import React, { useState, useEffect } from "react";

import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  const [id, setID] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function isLogged() {
      const ongeId = await localStorage.getItem("ongId");
      if (ongeId) {
        return true;
      }
      return false;
    }

    async function redirectIfLogged(isLogged) {
      if (await isLogged()) {
        history.push("/profile");
      }
    }

    redirectIfLogged(isLogged);
  }, []);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", {
        id
      });

      const { name } = response.data;

      await localStorage.setItem("ongId", id);
      await localStorage.setItem("ongName", name);

      history.push("/profile");
    } catch (err) {
      console.log("Falha no login, tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <div className="box-logo">
          <img src={logoImg} alt="Be The Hero" />
        </div>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            onChange={e => setID(e.target.value)}
            value={id}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
