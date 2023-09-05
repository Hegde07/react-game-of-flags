import nations from './nations'
import "/node_modules/flag-icons/css/flag-icons.css";
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [country,setCountry]=useState([]);
  const [flagCountry,setFlagCountry]=useState({})
  const generateRandomNations =()=>{
      let ct = []
      for(let i=0;i<4;i++){
     const r = Math.floor( Math.random()*nations.length)//generating random index
     ct.push(nations[r]);//This is the index of nation
      }
      
      setCountry(ct)
      const index = Math.floor(Math.random()*4)
      setFlagCountry(ct[index])
      console.log(ct,ct[index])
  }

  useEffect(()=>{
   generateRandomNations();
  },[])
  const checkAnswer=(country)=>{
    if(country.name === flagCountry.name){
     alert('correct')
    }else{
      alert('incorrect')
    }
 }
  return (
    <div className="App">
      <span className="fi fi-gr fis"></span>
      <div className='buttons'>
         {country.map(c=>(
           <button onClick={e=>checkAnswer(c)}>{c.name}</button>
         ))}
      </div>
    </div>
  );
}

export default App;
