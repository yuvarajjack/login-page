import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Left from './components/left.jsx';
import {Row, Col} from 'react-bootstrap'
import Logo from './components/logo';
import Footer from './components/footer';



function App() {
  
  return (
    <div >
      <Row className="Page">

        <Col><Left/></Col>
        <Col>
        <Logo/>
        <Login/>
        <Footer/>
        </Col>

      </Row>
      
    </div>
  );
}

export default App;
