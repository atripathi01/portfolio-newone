import React from 'react'
import styled from 'styled-components';

const PageNotFound =()=>{
    return(<>
       <Center>
           <Image src="./image/404-error-5.png"></Image>
           <Page>Page Not Found </Page>
       </Center>
    </>);
}
export default PageNotFound

const Center=styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 text-align:center;
 flex-direction:column;
`
const Image=styled.img`
padding:2rem 0;


`
const Page=styled.div`
text-align:center;
font-size:60px;
font-style:italic;
font-weight:800;
font-family: 'Roboto', sans-serif;
`