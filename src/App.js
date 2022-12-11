
import React,  { Component } from 'react';
import './App.css';

/*Definir funciones de la lista de tareas a rerealizar

1.Una lista con cada una de las tareas a realizar ***********
 
Cada lista de tareas puede tener:

1.Contendrá un botón para marcar las tareas completadas ********
2. mi lista de tareas tendrá un botón para eliminar las tareas. *******

Fomliario:

1.Una caja de texto para ponerle un titlio a la tarea
2.Un boton para la tarea a la lista 

*/ 


 //Al componente que se muestra a continuación se llama componente de tipo clase o class componet 
 //Para que nuestro componente funcione debe ir dentro del render(){ aca}

 
 /*esto es un componente se pueden guardar y crear
 se pude ejecutar como React.Component con la C en mayusclias o poner {Componet} en nuestro encabezado de import a la parte de React
y colocar solo Component como se muestra en en este ejemplo practico.
Asi nuestro codigo que cada vez mas limpio y ordenado nos ahorramos poner React. al poner o crear un componente

 */ 

class App extends Component{ 
  render(){
      return ( 
    <div className= "app">
      <div className='Lista-tareas-container'> 
      <h1 className='title'>Lista De Tareas</h1>
   <ul>
    <li>
      
      <span className='titulo-tarea'>Aprende JavaScript</span>
      <span role="img" aria-label="emogi" className='icono-tarea' > 
        🆗
      </span>
      
      <span role="img" aria-label="emogi" className='icono-tarea' >
       
        ✖️
      </span>
    </li>

    <li>
       <span className="titulo-tarea">Aprende React</span>
      <span role="img" aria-label="emogi" className='icono-tarea' >
       🆗
      </span>
      <span role="img" aria-label="emogi" className='icono-tarea' >
       ✖️
      </span>
      
    </li>

    <li>
       <pan className="titulo-tarea">Aprende Next.js</pan>
      <span role="img" aria-label="emogi" className='icono-tarea' >
     🆗
      </span>
      <span role="img" aria-label="emogi" className='icono-tarea' >
       ✖️
      </span>
    </li>
    </ul> 
     
     <form>
      <input type ="text" placeholder='Agrega aca tu tarea'></input>
        <button>
          <span role="img" aria-label="emogi" className='icono-tarea' >
           ➕
          </span>
          </button>
      
     </form>
  </div>
   
    </div>
     );
   }

  }

export default App;
