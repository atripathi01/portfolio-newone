import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';

const Center=styled.main`
display:flex;
justify-content:center;
align-items:center;
`

const Button=styled.button`
    background-color:#fff;
    border:4px solid #000;
    color:#000;
    font-size:16px;
    font-weight:700;
    padding:0.5rem 2rem;
    border-radius:9px; 
    transition :0.2s;
    cursor:pointer;

    &:hover{
        transform:scale(0.9);
    }
`
const ResumePage=styled.section`
width:100%;
max-width:900px;
padding:0 10px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
@media screen and (max-width:600px){
    flex-direction:column;
    padding:2rem 0.5rem;
}

`
const Content=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`

// const Heading=styled.div`
// // font-size:36px;
// width:100%;
// text-align:center;
// font-size:35px;
// font-style:italic;
// font-weight:800;
// font-family: 'Roboto', sans-serif;

// `

const Paragraph=styled.p`
font-size:18px;
width:100%;

`

const Download=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:left;
`

const For=styled.p`
font-size:16px;
color:blue;
`
const ImageResume=styled.img`
width:200px;
height:auto;
padding:2rem  0;
margin 0 2rem;
`
// const Underline=styled.span`
// border-bottom:5px solid black;
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

const Resume =()=>{
    return(<>
    <ProjectBack>Resume</ProjectBack>
    <Center>
    <ResumePage>
    
    {/* <Heading>R<Underline>esume</Underline></Heading> */}
    <ImageResume src="/image/res.jpg" alt="resume"></ImageResume>
    <Content>
    <Paragraph>
        If know more about my projects, achivement, experiences, etc.So, get Download my Resume.
    </Paragraph>
    <Download>
        <For>For download resume click below.</For>
        <a href="https://drive.google.com/file/d/1iqw0CW1JQ1WsvoqJGh4Oh2QxYVsHMcZI/view?usp=sharing" >
            <Button type="button">Download </Button>
            </a>
    </Download>
    </Content>
    </ResumePage>
    </Center>
    <Footer />
    </>
);
}
export default Resume