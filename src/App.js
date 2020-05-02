import React,{useState, useImperativeHandle} from 'react';
import Button from './components/components/Button/Button'
import ServerButton from './components/components/Button/archive/ServerButton'
import ServerButtonHooks from './components/components/Button/ServerButtonHooks'
import SignIn from './components/components/Forms/SignIn'

// import logo from './logo.svg';
// import './App.css';
var socket = require('socket.io-client')('http://localhost:4000');

function App() {

  const [LoggedIn,setLoggedIn]=useState(false)
  const [response,setResponse]=useState(``)
  const [Warning,setWarning]=useState(``)

  return (
    <React.Fragment>  

      {!LoggedIn&&
      <SignIn 
      confirmation={confirm=>{

        if(!confirm){

          setWarning(`User doesn't exist in our database`)
        }

        setLoggedIn(confirm)
      }} 
      socket={socket}/>
      }
      {!LoggedIn && Warning}
      {LoggedIn&&<h1>Sir, I am logged in</h1>}

    </React.Fragment>
  );
}

export default App;
