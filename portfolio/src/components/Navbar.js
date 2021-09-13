import React from 'react'
import {Link as LinkR} from 'react-router-dom'
import styled from 'styled-components';

// font-family: 'BioRhyme', serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Source Sans Pro', sans-serif;
const Navbar =()=>{
    return(<Center>
    <Nav>
        <NavLogo>
           <Logo></Logo>
           <Name><NavLink to="/">Ayush</NavLink></Name>
        </NavLogo>
        <NavWrapper>
            
            <NavItems>
                <NavLink to="/">/home</NavLink> 
                 {/* /about */}
                {/* <Atag href="#about-section">/about</Atag> */}
            </NavItems>
            <NavItems>
                <NavLink to="/projects">/projects</NavLink> 
                 {/* /projects */}
                {/* <Atag href="#project-section">/projects</Atag> */}
            </NavItems>
            <NavItems>
                <NavLink to="/blogs">/blogs</NavLink> 
                  {/* /blogs */}
                {/* <Atag href="#blog-section">/blog</Atag> */}
            </NavItems>
            <NavItems>
                <NavLink to="/resume">/resume</NavLink>
                {/* <a href="#about-section">/resume</a> */}
            </NavItems>
        </NavWrapper>
    </Nav>
    
    </Center>);
}

const Center=styled.section`
display:flex;
justify-content:center;
border-bottom: 2px solid #000;
width:100%;
height:9vh;
position:fixed;
backdrop-filter: blur(10px);
color:#000;
`

const Nav = styled.nav`
width:100%;
max-width:1150px;
align-items:center;
min-height:9vh;
height:fit-content;
// border-bottom: 1px solid #000;
display:flex;
justify-content:space-between;
// filter:blur(4px);

position:sticky;
position:fixed;
z-index:10;
padding:0 20px;
@media screen and (max-width:440px){
    padding:0;
    
}
`
const NavLogo=styled.div`
display:flex;
justify-content:flex-start;

// @media screen and (max-width:535px){
//     display:none;
// }
`

const Logo=styled.div`
width:18px;
height:18px;
background: #ff00cc;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #333399, #ff00cc);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #333399, #ff00cc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// background: #f79d00;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #64f38c, #f79d00);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #64f38c, #f79d00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
box-shadow: #ff00cc  0px 22px 70px 4px;
border:none;
border-radius:5px;
`
const Name=styled.div`
font-size:24px;
// font-family: 'BioRhyme', serif;
// font-family: 'Azeret Mono', monospace;
// font-family: 'Roboto', sans-serif;
font-family: 'Work Sans', sans-serif;
// font-style:italic;
margin-left:5px;
// font-weight:800px;


`

const NavWrapper=styled.ul`
display:flex;
justify-content:space-evenly;
list-style-type:none;
font-size:18px;
font-family: 'Poppins', sans-serif;
font-weight:500;
flex-wrap:wrap;
// @media screen and (max-width:430px){
//     font-size:16px;
// }
`

const NavItems=styled.li`
text-decoration:none;
margin:0 10px;
transition:0.8s;
&:hover{
  transform:scale(1.2);  
}

`
// const Atag=styled.a`
// cursor:pointer;
// text-decoration:none;
// color:#000;
// &:hover{
//     color:#000;
// }

// `
const NavLink=styled(LinkR)`
cursor:pointer;
text-decoration:none;
color:#000;
&:hover{
    color:#000;
}

`
export default Navbar