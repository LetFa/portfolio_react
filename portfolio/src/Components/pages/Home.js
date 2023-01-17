import Container from "../layout/Container";
import styles from "./Home.module.css"
import menina from "../../img/menina.jpg"

function Home(){
    return(
       <section>
           <Container>
                       <div className={styles.home}>
                                 <div >
                                       <h3 className={styles.subtitulo}>Olá, Me chamo Letícia Farias</h3>
                                       <h1 className={styles.titulo}>Desevolvedora Front End</h1>
                                       <p className={styles.paragrafo}>Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com </p>
                                       <button  className={styles.btn}>Contratar</button>
                                 </div>

                                 <div>
                                    <img src={menina}  alt="menina" />
                                 </div>
                       </div>

           </Container>
       </section>
    );
}

export default Home