import React from 'react'
import Footer from './Footer';
import styled  from 'styled-components';

const Blogs =()=>{
    return(<>
      <ProjectBack>Blogs</ProjectBack>

      <BlogPage>
      <CenterF>
                    <BlogBox>
                        <Image src="/image/blog1.png" alt="ecommerce"></Image>
                        <BlogContentF>
                            <BlogName>#1 Firebase Hosting</BlogName>
                            <Detail>Firebase is a mobile and web application development platform created for developers.
                                 It does help the developers by providing a ton of backend functionality to developers like Cloud Firebase (a real-time database),
                                  Firebase ML, Hosting, etc. Firebase can be a good choice to deploy static websites and Single Page Apps. 
                                Firebase offers an awesome speed....<LinkA href="https://ayush07-blog.hashnode.dev/firebase-hosting">Read more</LinkA></Detail>
                            
                           {/* <LinkA href="https://ayush07-blog.hashnode.dev/firebase-hosting"> <ButtonRead>Read Blog</ButtonRead></LinkA> */}
                        </BlogContentF>
                    </BlogBox>
                    </CenterF>
                    </BlogPage>        
        <Footer /></>);
}
export default Blogs

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
const BlogPage=styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
color:#000;
`
const CenterF=styled.article`
 background-color:#fff;
 width=100%;
 display:flex;
justify-content:center;
align-items:center;
`
const BlogBox=styled.div`
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
const BlogContentF=styled.div`
width:100%;
height:100%;
padding:1.5rem;
// box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
border-radius:20px;
background-color:#fff;
min-height:370px;
`
const BlogName=styled.h1`
font-size:35px;
font-style:italic;
font-weight:800;
font-family: 'Roboto', sans-serif;
`
const Detail=styled.p`
font-size:20px;
// font-family: 'Inconsolata', monospace;
font-family: 'Nunito', sans-serif;
font-weight:600;

letter-spacing:1px;

`
// const ButtonRead=styled.button`
// font-size:18px;
// padding:0.5rem 2rem;
// background-color:#fff;
// border:4px solid #000;
// border-radius:8px;
// color:#000;
// margin:1rem;
// font-weight:bold;
// `
const LinkA=styled.a`
font-family:'Roboto', sans-serif;
font-weight:400;
font-size:17px;

`