import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/Textfrom';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [mode, setmode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#3f3a47';

      showAlert("Night Mode Enable",'success');
      
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
     
      showAlert("Light Mode Enable",'success');
    }
  }
  //null hai islliye error(1) dega 
  const [alert, setAlert] = useState(null)
//Change color using setAlert of Alert And send massage

   const showAlert = (massage,type) =>{
    //earliar alert is NULL Now Alert is Object
    setAlert({
      msg : massage,
      type :type
    })
    setTimeout(()=>{
        setAlert(null);
    },1500)
   }
  return (
      <>
        <Navbar title="TextEditor" Home ="Home" About= "About" mode={mode} toggleMode={toggleMode} />
        <div >
              {/* <Alert type={} msg={} />   -->>> this wrong because object nahi pass hoga  useState ka const pass hoga as a function*/}
              <Alert alert={alert} />
        </div>
        <div className="container" >
          <TextFrom heading="Welcome to our website"  />
        </div>
      </>
  );
}

export default App;
