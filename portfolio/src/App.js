import React from 'react'
import styled from 'styled-components'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Resume from './components/Resume'
import PageNotFound from './components/PageNotFound'


const Container=styled.div`
display:flex;
justify-content:center;
`
const Port=styled.div`
width:100%;
max-width:900px;
font-size:35px;
// height:500vh;
align-items:center;
text-align:center;
// background-color:yellow;
margin-top:9vh;
`

function App() {

  return (<>
  <Router>
    <Navbar />
    <Container>
    <Port>
    
    </Port>
    </Container>
 
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/projects" exact>
        <Projects />
      </Route>
      <Route path="/blogs" exact>
        <Blogs />
      </Route>
      <Route path="/resume" exact>
        <Resume />
      </Route>
      <Route path="*" exact>
        <PageNotFound />
      </Route>
    </Switch>
    </Router>
    </>
  )
}

export default App
