
import React from 'react'
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import Footer from './Footer';
import { MdKeyboardArrowRight } from "react-icons/md";
import {motion} from 'framer-motion'

const Home =()=>{
   
    return(<>
    <Center >
    <HomePage >
        <Myself
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        ><Ava><Img src="./image/av.png"></Img></Ava><br></br>Hey there!👋 I'm <Color>Ayush</Color>.<br></br>India-based <Color>Frontend developer</Color>.
        </Myself>
        <Section id="about-section">
        <Box><About>About</About></Box>
        <Cene>
          
            <Vector><img src="./image/oo.svg" alt="vector"></img></Vector>
        <Block1>
            <Block2><AboutArticle>
                <Paragraph>
               
                           
                    Hey i am Ayush Tripathi.Front end webdeveloper majorily work on Reactjs.<br></br>
                    I am also famlier with redux, javascript, nodejs, expressjs, framer-motion.
                    and also have experience of github & figma.<br></br>
                    I use firebase, netlify & vercel for hosting and 
                    I built some project in react and also write blogs.<br></br>
                    I love to code and customization.
                    </Paragraph></AboutArticle></Block2>
        </Block1>
        </Cene>
        </Section>
        <Section id="skill-section">
        <Box><Skills>Skills</Skills></Box>
        <Types>
            <Span><ImgIcon src="./image/rect.svg" alt="React"></ImgIcon></Span>
            <Span><ImgIcon src="./image/redux.svg" alt="React"></ImgIcon></Span>
            <Span><ImgIcon src="./image/java.svg" alt="React"></ImgIcon></Span>
            <Span><ImgIcon src="./image/nod.svg" alt="React"></ImgIcon></Span>
            <Span><ImgIcon src="./image/expres.svg" alt="expressjs"></ImgIcon></Span>
            <Span><ImgIcon src="./image/fram.svg" alt="framer motion"></ImgIcon></Span>
            <Span><ImgIcon src="./image/bot.svg" alt="bootstrap"></ImgIcon></Span>
            <Span><ImgIcon src="./image/firebas.svg" alt="firebase"></ImgIcon></Span>
             
            <Span><ImgIcon src="./image/css.svg" alt="css"></ImgIcon></Span>
            <Span><ImgIcon src="./image/githu.svg" alt="React"></ImgIcon></Span>
            <Span><ImgIcon src="./image/gitt.svg" alt="React"></ImgIcon></Span>
            <Span><ImgIcon src="./image/twincss.svg" alt="styled-compnents"></ImgIcon></Span>
            
        </Types>
        </Section>
        <Section id="project-section">
            <Box><Project>Project</Project></Box>
            <Content>
            <Image src="./image/p1.png"></Image>
            <ProjectContent><Paragraph1>
                I have learned lot of technologies like Reactjs framerwork, Redux, Javascript, etc.With the help of these technologies
                I have created some projects which are hosted online with their sourcce code. You can also see these projects on my twitter account.
                Go and check them out! 
                </Paragraph1>
                <ProjectLink to="/projects"><Button >See projects <MdKeyboardArrowRight /></Button></ProjectLink></ProjectContent>
                </Content>
        </Section>
        <Section id="blog-section">
        <Box><Blog>Blogs</Blog></Box>
        <Content>
        <ProjectContent><Paragraph1>
        According to me, If you think you are good at something or you know about something.
        Write a great blog on that. It will not only  helps you also the helps community too.
         That's why I have written some blogs on hashnode.So, go and read the blogs!
                </Paragraph1>
                <ProjectLink to="/blogs"><Button >See blogs <MdKeyboardArrowRight /> </Button></ProjectLink></ProjectContent>
                </Content>
        </Section>
        
    </HomePage>
    </Center>
    <footer>
        <Footer />
    </footer>
    
    
    </>);
}



const Center=styled.main`
display:flex;
justify-content:center;
align-items:center;
background-color:hsla(0, 0, 100, 0)
scroll-behavior:smooth;
`
const HomePage=styled.section`
width:100%;
max-width:900px;
// padding:0 10px;
color:#000;


`

const Myself = styled(motion.div)`
font-size:42px;
font-weight:800;
text-align:center;
margin:15vh 0;
font-family: 'Roboto', sans-serif;
font-style:italic;
color:#000;

`

const Ava=styled.span`
margin:1rem 0;
align-items:center;

`
const Img=styled.img`
width:150px;
height:auto;
`
const Color=styled.span`
// color:#f48c06;
color:#e85d04;

`
const About=styled.div`
width:100%;
font-size:60px;
font-weight:800;
font-family: 'Roboto', sans-serif;
font-style:italic;
color:#000;
padding-left:1rem;

`
const Block1=styled.div`

width:400px;
height:400px;
background-color:#dda15e;
border:2px solid #283618;
overflow:visible;
overflow-x:visible;
@media screen and (max-width:533px){
    height:350px;
    width:350px;
}

`
const Block2=styled.div`
display:flex;
justify-content:center;
margin-left:35px;
margin-top:25px;
width:400px;
height:400px;
background-color:#bc6c25;
border:2px solid #fefae0;
overflow:visible;
@media screen and (max-width:533px){
    height:350px;
    width:350px;
}

`
const Cene =styled.div`
display:flex;
justify-content:center;
flex-direction:row;

`

const Paragraph=styled.p`
font-size:18px;
// font-weight:500;
// font-family: 'Inconsolata', monospace;
// font-family: 'Nunito', sans-serif;
font-family: 'JetBrains Mono', monospace;
font-weight:700;
// color:#fff;
letter-spacing:1px;
@media screen and (max-width:533px){
    font-size:14px;
}
`
const AboutArticle=styled.div`
margin:10px;
`

const Vector=styled.div`
width:400px;
height:auto;
@media screen and (max-width:533px){
    display:none;

}


`

const Skills =styled.div`
width:100%;
font-size:60px;
font-weight:800;
margin-top:5vh;
font-family: 'Roboto', sans-serif;
font-style:italic;
color:#000;
padding-left:1rem;
`

const Types=styled.div`
margin:5px 15px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding-top:2rem;
`
const Span=styled.span`
font-size:18;
padding:2px 15px;
// width:60px;
// height:auto;
margin:15px 5px;
border:none;

`
const ImgIcon=styled.img`
width:auto;
height:60px;
`

const Project=styled.div`
width:100%;
font-size:60px;
font-weight:800;
margin-top:5vh;
font-family: 'Roboto', sans-serif;
font-style:italic;
color:#000;
padding-left:1rem;
`

const Image=styled.img`
align-items:center;
width:350px;
height:auto;
margin-right:2rem;
@media screen and (max-width:750px){
    display:none;
    
}
`
const Paragraph1=styled.p`
font-size:24px;
// font-weight:900;
// font-family: 'Inconsolata', monospace;
font-family: 'Nunito', sans-serif;
font-weight:600;
color:#000;
letter-spacing:1px;
margin:0 1rem;
margin-bottom:1rem;
@media screen and (max-width:533px){
    font-size:20px;
}

`
const Content=styled.div`
display:flex;
flex-direction:row;
padding-top:2rem;
`
const ProjectContent=styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
flex-direction:column;
`

const Button=styled.button`
padding:5px 20px;
font-size:18px;
font-weight:700;
border:4px solid #000;
border-radius:9px;
background-color:#fff;
color:#000;

text-decoration:none;
&:hover{
    background-color:#000;
color:#fff;
}
`
const ProjectLink=styled(LinkR)`
text-decoration:none;
color:#fff;

`
const Blog=styled.div`
width:100%;
font-size:60px;
font-weight:800 ;
font-style:italic;
margin-top:5vh;
font-family: 'Roboto', sans-serif;
color:#000;
padding-left:1rem;

`
const Box=styled.div`
width:40px;
height:40px;
background-color:#ffba08;
margin-bottom:5vh;
cursor:pointer;
&:hover{
    background-color:#9d0208;
}
`

const Section=styled.section`
padding-top:15vh;
`

export default Home