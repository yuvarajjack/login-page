import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Left from './components/left.jsx';
import Logo from './components/logo';
import Footer from './components/footer';



function App() {
  
  return (
 
    <table  className="Container">
      <tbody>
    <tr>
      <td  width="50%"><Left/></td>

      
      <td width="50%">
            <Logo/>
            <Login/>
            <Footer/>
      </td>
    </tr>
    </tbody>
  </table>
    
      
      
    
  );
}

export default App;
