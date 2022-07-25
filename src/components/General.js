import React from 'react';

import {useEffect, useState} from "react";

const General = () => {

    const [datos, setDatos] = useState('')

    const get = async ()  => {
            const dato = await fetch("http://192.168.43.188/ard-get.php")
            const temperatura =   await dato.json()
            setDatos(temperatura);

            console.log(temperatura);
    }

    useEffect(() => {

        get();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="box">
            <section className="section">
                <h1 className="title">Temperatura</h1>
                <br/>
                <h2 className="subtitle">
                   En esta sección  muestra los cálculos de <strong> 3 </strong> sensores, DT11 , FC-28 SENSOR Y DS18B20 SENSOR.
                </h2>
            </section>
            <nav className="level is-mobile">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Temperatura</p>
                        <p className="title"> {datos !== '' ? datos[datos.length -1][4] : 0}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">

                    <div>
                        <p className="heading">Humedad</p>
                        <p className="title">{ datos !== '' ? datos[0][5] : 0} %</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Suelo</p>
                        <p className="title">{ datos !== '' ? datos[0][3] : 0}</p>

                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Temperatura Agua</p>
                        <p className="title">{ datos !== '' ? datos[0][2] : 0}°C</p>
                    </div>
                </div>

            </nav>
        </div>

    );
}
export default General;