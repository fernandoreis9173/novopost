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
          <p>Olá meu nome é Fernando Reis, tenho 24 anos e moro em manaus.
            Sou formado em Ciências da Computação pelo Centro Universitario de Ensino Superior do Amazonas.
            Sempre Gostei de Tecnologia, foi por isso que entrei na faculdade de T.I , 
            mexer com computadores, jogos e celulares é o que eu mais gosto de fazer.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <figure
        />
        <Carousel.Caption>
          <h1>Experiências Profissionais</h1>
          <p>Meu primeiro trabalho de T.I foi como estagiário para uma empresa prestadora de serviços
            de digitalização de documentos chamada DIGIDOC, prestávamos serviços de suporte para 
            a junta comercial do estado do Amazonas - JUCEA. Suporte a usuários, cabeamento de rede, instalação de programas
            digitalização e manutenção de impressoras eram algumas das atividades prestadas.
            Meu Segundo estagio, agora no Hotél Holiday Inn Manaus, também foi como suporte a usuários, la pude aprender de tudo
            na área de hotelaria, foi uma Experiência incrivel, prestava suporte aos usuários, montagem e manutenção dos computadores,
            manutenção e instalação de impressoras, cabeamentos estruturados, roteadores, telefonia, chave de acesso e muitos outros processos.
              </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <figure
         
        />
        <Carousel.Caption>
          <h1>Minhas Skills</h1>
          <p>Tenho objetivo muito grande que é me tornar desenvolvedor,
            estudo todos os dias linguagens de programação, principalmente voltadas 
            para WEB como HTML5, CSS3, PHP, JAVASCRIP, BOOTSTRAP, REACTJS, NODEJS, ANGULARJS
            e outras linguagens. tenho também conhecimento em banco de dados MYSQL, MONGODB E FIREBASE.
            sempre importo minhas aplicações para o github, e para colocar na web sempre uso heroku ou netlify. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <figure
         
        />
        <Carousel.Caption>
          <h1>Meus Cursos</h1>
          <p>Uma das minhas qualidades é sempre procurar aprender e estar estudando
            para meu intelecto crescer, tenho curso de inglês básico e intermediario
            , informática básica e avançado pelo CETAM, e inglês básico pelo YES,
            mas sempre estudo em plataformas e app particulares. 
            Tenho curso de desenvolvimento web realiado pela fundação paulo feitosa e shellscript pelo ciesa.
            Realizei Reactjs do básico ao avançado pela Udemy, e todos os dias venho praticando
            e estudando inglês, linguagens de programação e empreendedorismo para um 
            melhor desempenho.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
        </section>
    );
}

export default Contato;