import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const LifeCycle = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    
      //useEffect(funcion, dependencias (que pueden o no ir))
      //useEffect(()=>{
        //No es muy recomendable usarlo de esta manera
      //  console.log("useEffect que se dispara cada vez que se rendereiza el componente")
      //});

    useEffect(()=>{
      //No es muy recomendable usarlo de esta manera
      console.log("useEffect que se dispara solo una vez")
    },[]);

    useEffect(()=>{
      console.log("se dispara cada que cambia count1 y el count2")
    },[count1, count2])


    //crear un contador doble con botones arriba, abajo y reset
    //implementar un useEffect que se dispare una sola vez
    //implementar un useEffect que se dispare cada que cambie cualquier contador
    //un useEffect que se dispare cada que cambie el contador 1
    //un useEffect que se dispare cada que cambie el contador 2
    //Un useEffect que se dispare cada que cualquier contador vaya arriba
    //un useEffect que se dispare cada que cualquier contador vaya abajo
    //Un useEffect que se dispare cada que cualquier contador se resetee
    //Un useEffect que se dispare unica y exclusivamente cuando se presione el reset de el 1 y el 2


  return (
    <div>
        <h1>LifeCycles</h1>
        <h2>Count 1: {count1}</h2>
        <h2>Count 2: {count2}</h2> 
        <button onClick={() => setCount1(count1 +1)}>Count 1</button>  
        <button onClick={() => setCount2(count2 +1)}>Count 2</button>    
    </div>
  )
}

export default LifeCycle