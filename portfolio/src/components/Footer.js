import React from 'react'
import styled from 'styled-components'
import { FaTwitter,FaGithub,FaLinkedin,FaDiscord } from "react-icons/fa";

const Foo=styled.section`
background-color:#f48c06;
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:40vh;
margin-top:3rem

`
const Copyr8=styled.div`
width:100%;
text-align:center;
backgound-color:#000;
color:#fff;

`
const Contact=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Title=styled.h1`
text-align:center;
width:100%;

`
const List=styled.ul`
list-style:none;
display:flex;
justify-content:center;
align-items:center;

`
const Item=styled.li`
padding:0 0.5rem;

`
const Link=styled.a`
text-decoration:none;
color:#000;
font-size:36px;
cursor:pointer;
&:hover{
    color:#023e8a;
    
}
`
const LinkM=styled.a`
color:#fff;
font-size:18px;
cursor:pointer;
&:hover{
    color:#fff;

}
`

const Footer =()=>{
    return(
        <>
        <Foo>
        <Contact>
         <Title>
          Keep in touch
         </Title>
         <List>
             <Item> <Link href="https://twitter.com/ayush___07"><FaTwitter /></Link></Item>
             <Item> <Link href="https://www.linkedin.com/in/ayush-tripathi-1341651b6/"><FaLinkedin /></Link></Item>
             <Item> <Link href="https://github.com/atripathi01"><FaGithub /></Link></Item>
             <Item> <Link href="https://discord.gg/twQwByKM"><FaDiscord /></Link></Item>
         </List>
        </Contact>
        <Copyr8>
            <p><LinkM href="mailto:ayushtripathi4113@gmail.com">ayushtripathi4113@gmail.com</LinkM></p>
        </Copyr8>
        </Foo>
        </>
    );
}
export default Footer

