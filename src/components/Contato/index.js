import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './styles.css';

function Contato(){
    return(
        <section className="CorpoContato">
             <Carousel className="carrosel">
      <Carousel.Item >
        <figure 
        />
        <Carousel.Caption >
          <h1>O Inicio da minha Pequena história.</h1>
          <p>Quando criança, meu pai comprou o primeiro celular para meu irmão mais velho 
              e me apaxonei por aquele nokia tijolão,
              aos 7 ia para casa da minhna tia para usar o computador, escrever no 
              word e desenhar no pint, já estava fascinado pela tecnologia.

                 </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <figure
        />
        <Carousel.Caption>
          <h1>Tecnologia na Juventude</h1>
          <p>Aos 14 Comecei a fazer curso de informática básica e avançada pelo CETAM. No Ensino Médio eu 
              já estava decidido 
              que cursaria algo que me levasse para perto do mundo tecnologico, então em 2015 comecei a
               cursar Ciência da computação
              no Centro Universitario De Ensino Superior Do Amazonas - CIESA. Lá acompanhei vários cursos 
              e palestras para o meu aperfeiçoamento.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <figure
         
        />
        <Carousel.Caption>
          <h1>Finalmente Fomado</h1>
          <p>
             Na faculdade, o Desejo de querer Desenvolver já era grande, então comecei da os primeiros passos desenvolvendo
             Pequenos projetos em C++ e Java.
             Me formei em 2019 e Hoje sou Analista de Desenvolvimento Trainee. Tento Trabalhar 
             com as melhores linguagens do mercado Web, como ReactJS, NodeJS, MongoDB entre vários que existem.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    );
}

export default Contato;