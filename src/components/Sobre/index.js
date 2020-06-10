import React from 'react';
import  ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Sobre/styles.css';
 

function Sobre(){
    return(
        <section className="CorpoSobre">
         <div className="SobreConteudo">
             <div className="SobreTitulo">
                 <h1>Sobre Mim</h1>
                  <p>Olá meu nome é Fernando Silva Dos Reis, tenho 24 anos, nascido e criado na cidade de Manaus - AM. 
                       sou formado em ciência da computação no CIESA em 2019.  Gosto muito de desenvolver
                        e aprender novas tecnologias, e de saber tudo que está acontecendo no mundo tecnológico. 
                        Atualmente estou aprendendo ReactJS e NodeJS, mas já utilizei HTML5, CSS3, AngulaJS,
                         Ionic, JavaScript, PHP, MongoDB, Mysql, Firebase entre outros.<br/>
                         Sou muito dedicado, e gosto de aprender, por isso sempre converso com quem entende do assunto
                         para ganhar ainda mais conhecimento e desenvolver projetos e ganhar muita experiência. 
                         Atualmente não Trabalho Desenvolvendo sitemas, mas estou em busca dos meus objetivos, 
                         e um deles é arranjar um emprego na área de desenvolvedor.<br/>
                         Nas minhas Horas vagas gosto de programar e ir ao cinema com minha esposa ou encontrar amigos no fim de semana
                         para botar o assunto em dia.<br/><br/>

                         Para conversar, Tirar Dúvidas ou alguma ajuda mande um e-mail:<br/> 
                         <a arial-label="e-mail" href="mailto:fernandoreis9173@gmail.com">fernandoreis9173@gmail.com</a>
                         </p>
                        
                </div>
                
      
                <div className="Progess">
                    ReactJS <ProgressBar animated now={60} label={`${60}%`} />
                    NodeJS<ProgressBar animated now={50} label={`${50}%`} />
                    HTML5<ProgressBar animated now={80} label={`${80}%`}/>
                    CSS3<ProgressBar animated now={80} label={`${80}%`} />
                    Bootstrap<ProgressBar  animated now={70} label={`${70}%`} />
                    JavaScript<ProgressBar animated now={70} label={`${70}%`} />
                    PHP <ProgressBar animated now={80} label={`${80}%`}/>
                    MongoDB<ProgressBar animated now={40} label={`${40}%`}/>
                    Firebase<ProgressBar animated now={30} label={`${30}%`}/>
                    Ionic<ProgressBar animated now={30} label={`${30}%`}/>
                    AngulaJS<ProgressBar animated now={30} label={`${30}%`}/>
                </div>
                
                
                </div>
            
        </section>
    );

}

export default Sobre;