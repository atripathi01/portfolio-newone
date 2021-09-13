import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';

const Projects = () => {
    return (
        <>  
             <ProjectBack>Projects</ProjectBack>
            {/* <ProjectTitle>P<Under>rojects</Under></ProjectTitle> */}
            <ProjectPage>
                {/* <ProjectList> */}
                    <CenterF>
                    <ProjectBox>
                        <Image src="/image/ecart.jpg" alt="ecommerce"></Image>
                        <ProjectContentF>
                            <ProjectName>#5 Ecommerce App</ProjectName>
                            <Detail>Built an eCommerce site with the help of react, redux, nodejs, style-components and framer-motion.
                              <br /> It is based on Vitejs build tool.
                                It is built for the practice of Reactjs and Redux in general.

                            </Detail>
                            <LinkS href="https://github.com/atripathi01/Ecommerce.git"><ButtonViewSource>View Source</ButtonViewSource></LinkS>
                            <LinkA href="#"><ButtonLiveDemo>Live Demo</ButtonLiveDemo></LinkA>
                        </ProjectContentF>
                    </ProjectBox>
                    </CenterF>


                    <CenterS>
                    <ProjectBox>
                        <Image src="/image/weather.jpg" alt="weatherapp"></Image>
                        <ProjectContentS>
                            <ProjectName>#4 Weather App</ProjectName>
                            <Detail>
                            This app is built on Reactjs and it's made in vite app This app is based on reactjs and framer-motion.<br />
                             It uses an open-source REST API to fetch weather data of any coordinates and it is hosted on Netlify.  
                            </Detail>
                            <LinkS href="https://github.com/atripathi01/WeatherApp.git"><ButtonViewSource>View Source</ButtonViewSource></LinkS>
                           <LinkA href="https://confident-goodall-bfdd2c.netlify.app/"> <ButtonLiveDemo>Live Demo</ButtonLiveDemo></LinkA>
                        </ProjectContentS>
                    </ProjectBox>
                    </CenterS>
                    <CenterF>
                    <ProjectBox>
                        <Image src="/image/todo.png" alt="todo"></Image>
                        <ProjectContentF>
                            <ProjectName>#3 Todo List App</ProjectName>
                            <Detail>
                            A single-page app is developed on Reactjs. It is a smart task lists app for everyday use.<br />
                                Used technologies are Reactjs & CSS and it's deploy on  Netlify. 
                            </Detail>
                            <LinkS href="https://github.com/atripathi01/todoApp.git"><ButtonViewSource>View Source</ButtonViewSource></LinkS>
                            <LinkA href="https://csb-81pum.netlify.app/"><ButtonLiveDemo>Live Demo</ButtonLiveDemo></LinkA>
                        </ProjectContentF>
                    </ProjectBox>
                    </CenterF>

                    <CenterS>
                    <ProjectBox>
                        <Image src="/image/xo.jpg" alt="tictactoe"></Image>
                        <ProjectContentS>
                            <ProjectName>#2 Tic Tac Toe Game</ProjectName>
                            <Detail>
                                Built a Tic-Tac-Toe game on Reactjs.Made for practice of Reactjs when I started.
                                Used technologies are Reactjs & CSS .It's deploy on Firebase.Here I know about Firebase.
                            </Detail>
                            <LinkS href="https://github.com/atripathi01/Tic-Tac-Toe-Game-.git"><ButtonViewSource>View Source</ButtonViewSource></LinkS>
                            <LinkA href="https://fir-game-21ef3.web.app/"><ButtonLiveDemo>Live Demo</ButtonLiveDemo></LinkA>
                        </ProjectContentS>
                    </ProjectBox>
                    </CenterS>

                    <CenterF>
                    <ProjectBox>
                        <Image src="/image/calculator.png" alt="calculator"></Image>
                        <ProjectContentF>
                            <ProjectName>#1 Calculator</ProjectName>
                            <Detail>This is created in Javascript and CSS. This web app have features like Addition, subtraction, Multiplication, etc. </Detail>
                            <LinkS href="https://github.com/atripathi01/Calculator.git"><ButtonViewSource>View Source</ButtonViewSource></LinkS>
                            <LinkA href="#"><ButtonLiveDemo>Live Demo</ButtonLiveDemo></LinkA>
                        </ProjectContentF>
                    </ProjectBox>
                    </CenterF>


                {/* </ProjectList> */}
            </ProjectPage>
            <Footer />
        </>
    );
}

//style


// const ProjectTitle=styled.div`
// // font-size:28px;
// // align-items:center;
// // text-align:center;
// // font-size:36px;
// width:100%;
// text-align:center;
// font-size:35px;
// font-style:italic;
// font-weight:800;
// font-family: 'Roboto', sans-serif;

// `
const ProjectBack=styled.div`
font-size:90px;
font-weight:900;
color:#d3d3d3;
border-left:6px solid #253237;
margin-left:1rem;
margin-top:1rem;
@media screen and (max-width:445px){
    font-size:75px;
}
`
// const Under=styled.span`
// border-bottom:5px solid #000;
// `
const ProjectPage=styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
color:#000;
`
// const ProjectList=styled.div`
// max-width:900px;
// width:100%;

// `
const CenterF=styled.article`
 background-color:#fff;
 width=100%;
 display:flex;
justify-content:center;
align-items:center;
`
const CenterS=styled.article`
 background-color:#fff;
 width=100%;
 display:flex;
justify-content:center;
align-items:center;
`

const ProjectBox=styled.div`
width:100%;
heigth:500px;
padding:0.5rem;
max-width:900px;
display:flex;
justify-content:center;
align-items:center;
padding:2rem 0;


@media screen and (max-width:765px){
  flex-direction:column;
}

`
const Image=styled.img`
width:300px;
height:300px;
border:none;
border-radius:25px 0 0 25px ;
@media screen and (max-width:765px){
    border-radius:25px 25px 0 0;
 }

`
const ProjectName=styled.h1`
font-size:35px;
font-style:italic;
font-weight:800;
font-family: 'Roboto', sans-serif;
`
const ProjectContentF=styled.div`
width:100%;
height:100%;
padding:1.5rem;
// box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
border-radius:20px;
background-color:#fff;
min-height:370px;
`
const ProjectContentS=styled.div`
width:100%;
height:100%;
padding:1.5rem;
// box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
border-radius:20px;
background-color:#fefae0;
min-height:370px;

`
const Detail=styled.p`
font-size:20px;
// font-family: 'Inconsolata', monospace;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;
font-family: 'Nunito', sans-serif;
font-weight:600;
letter-spacing:1px;

`
const ButtonLiveDemo=styled.button`
font-size:18px;
padding:0.5rem 2rem;
background-color:#fff;
border:4px solid #000;
border-radius:8px;
color:#000;
margin:1rem;
font-weight:bold;
`
const ButtonViewSource=styled.button`
font-size:18px;
padding:0.5rem 2rem;
color:#ffffff;
background-color:#000;
border:4px solid #000;
margin:1rem;
border-radius:8px;
font-weight:bold;
`

const LinkA=styled.a`

color:#000;
text-decoration:none;
&:hover{
    color:#000;
}
`
const LinkS=styled.a`

color:#fff;
text-decoration:none;
&:hover{
    color:#fff;
}
`


export default Projects