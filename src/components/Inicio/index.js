import React from 'react';
import familia2 from "../../img/familia2.jpeg";

import '../Inicio/styles.css';

function Inicio(){
    return(
        <section className="corpo">
             <div className="conteudo">
           
                 <div className="imgcari">
                        <img src={familia2}/>
                 </div>
 
                <div className="titulo">
                     <h1>OLÁ,<br/> Eu sou Fernando Reis, seja Bem-Vindo ao meu Portifólio.</h1>
                       <p>Esta é minha Família e somos muitos felizes. Busco sempre trabalhar para dar o melhor
                           para eles. Sou formado em ciência da computação no CIESA, hoje trabalho na FLEX,
                           primeira empresa a me dar oportunidade na área de T.I, também sou freelancer fixo 
                           na SINALIZEWEB, empresa de desenvolvimento de site de E-commerce, que me da oportunidade
                           de sempre estar por dentro de tecnologias novas e me ajudando a desenvolver SKILLS
                           na parte de desenvolvimento. Tenho objetivos de crescer na área e ser FULLSTACK,
                           não para saber todas as coisas, mas sim para saber o suficiente em todas as áreas de atuação.
                        </p>
                        <span>"O sucesso nasce do querer, da determinação
                         e persistência em se chegar a um objetivo. Mesmo não
                         atingindo o alvo, quem busca e vence obstáculos,
                         no mínimo fará coisas admiráveis."
                         </span><br/>
                         <span className="autor">JOSÉ DE ALENCAR</span>
                 </div>
            

         </div>
        </section>
    );
}

export default Inicio;