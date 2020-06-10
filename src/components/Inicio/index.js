import React from 'react';
import caricatura from "../../img/caricatura.jpeg";

import '../Inicio/styles.css';

function Inicio(){
    return(
        <section className="corpo">
             <div className="conteudo">
           
                 <div className="imgcari">
                        <img width="100%"  height="550" src={caricatura}/>
                 </div>
 
                <div className="titulo">
                     <h1>Olá,<br/> Eu sou Fernando Reis,<br/> seja Bem-Vindo ao meu Portifólio.</h1>
                       <p>Sou Muito dedicado, procurando sempre aprender para me tornar um bom desenvolvedor.</p>
                 </div>
            

         </div>
        </section>
    );
}

export default Inicio;