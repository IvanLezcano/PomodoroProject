import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function saludar(texto:string){
  alert(texto)

}

function App() {
  const [seconds, setSeconds] = useState(7);
  const [minutes, setMinutes] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  
  useEffect(() => {
  let interval:any
  let minuteinterval:any
  
  if(isRunning){

     interval = setInterval(()=>setSeconds(prevSeconds=>{
      if(prevSeconds===0){
        setMinutes(minute=>minute-1)
        debugger
        return 59 }   
      return prevSeconds-1})
        ,1000
      );}
     
      return ()=>clearInterval(interval)
  }, [seconds,isRunning]);


 

  const handleclick = (event:any) => {
    if(event.currentTarget.innerText ==="INICIO"){
     
      setIsRunning(true)
       }
  else if(event.currentTarget.innerText ==="FIN"){
    setIsRunning(false)
    setSeconds(59)
  saludar("Chao")}
  }

  return (
    <>
   <p>{`${minutes}:${seconds}`}</p>
   
    <button onClick={handleclick} type='button'>INICIO</button>

    <button onClick={handleclick} type='button'>FIN</button>
    </>
  );
}

export default App;
