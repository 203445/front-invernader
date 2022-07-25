import {Link} from "react-router-dom";

const Home = () => {
    return(
    <header className="App-header">
        <section className="content is-medium"  >


            <div className="contenedor" >
                <img src="https://acortar.link/RQQh14" className="opep"/>
                <div className="box" className="texto-encima">
                    <div className="centrado"  className="hero-body" >
                        <p className="title">
                            Bienvenido
                        </p>
                        <p className="subtitle">
                            Da click y continua
                        </p>
                    </div>
                    <div className="boxi" >
                        <Link to="/general">General</Link>
                    </div>
                    <div className="boxi">
                       <Link to="/Estadistica" >Estadistica</Link>
                    </div>
                    {/*<div className="align-content: space-between">kcdeck</div>*/}
                </div>

            </div>


        </section>
    </header>
    );

}
export default Home;