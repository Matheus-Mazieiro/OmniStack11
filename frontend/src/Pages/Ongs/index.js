import React, { useEffect, useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft} from "react-icons/fi";
import "./styles.css";
import api from "../../Services/api";

export default function Ongs() {
    const [ongs, setOngs] = useState([])

    useEffect(() => {
        api.get('ongs').then(response => setOngs(response.data))
    }, []);

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vindo(a)</span>

                <Link className="back-link" to="/" >
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar
                </Link>

            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {ongs.map(ong => (
                    <li key={ong.id}>
                        <strong>ONG:</strong>
                        <p>{ong.name}</p>
                        
                        <Link className="button" to="/ong/incidents" onClick={() => localStorage.setItem('seeOngId', ong.id)}>Ver casos</Link>
                    </li>

                ))}

            </ul>
        </div>
    );
}