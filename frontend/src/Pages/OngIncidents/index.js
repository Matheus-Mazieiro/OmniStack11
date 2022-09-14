import React, { useEffect, useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import api from "../../Services/api";

export default function OngIncidents() {
    const ongId = localStorage.getItem('seeOngId');
    const [incidents, setIncidents] = useState([])
    const history = useHistory();

    useEffect(() => {
        api.get('ong/incidents', {
            headers: {
                Authorization: ongId,
            },
        }).then(response => setIncidents(response.data))
    }, [ongId]);


    async function handleDonate(e) {
        if(localStorage.getItem('donorId') && localStorage.getItem('donorId')!=0)
            return;
        alert("Entre como doador para poder fazer uma doação!");
        history.push('/ong/incidents');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vindo(a)</span>

                <Link className="back-link" to="/ongs" >
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar
                </Link>
            </header>

            <h1>Casos da ong</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <Link className="button"/* to="/incidents/new" */onClick={handleDonate}>Doar</Link>
                    </li>

                ))}

            </ul>
        </div>
    );
}