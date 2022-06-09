
import './App.css';
import React, { useState } from 'react';
// import Person from './components/person.jsx'; //Importamos componentes
// import Counter from './components/counter.jsx';
//import UseForms from './components/useForm/useForm';
import UnreadMessages from './components/UnreadMessages/UnreadMessages';

                                //  Complemento funcional con props

/*  const Saluda = props => {
  console.log(props)
  return <h3>espero {props.espero}</h3>
}
function App() {
  const hola = <h2>Bienvenido al curso de React</h2>
  const saludo = persona => <h2>Hola {persona}</h2> //Funcion flecha
return (
  <div className="App">
    <header className="App-header">
      {saludo('Jordi')}
      {hola}
      <Saluda espero='que te guste' />
      <Person name="David" surname="Pinilla" age={27} />
      <Person name="Juan" surname="Pérez" age={17} />
      <Person name="David" surname="Ochando" age={57} />
    </header>
  </div>
);
} */

                                        //  Complemento de clase

/* class Saluda extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props);
    return <h3>espero {this.props.espero}</h3>
  }
}
function App() {
    const hola = <h2>Bienvenido al curso de React</h2>
    const saludo = persona => <h2>Hola {persona}</h2> //Funcion flecha
  return (
    <div className="App">
      <header className="App-header">
        {saludo('Jordi')}
        {hola}
        <Saluda espero='que te guste' />
      </header>
    </div>
  );
}

 */

                            //  Complemento funcional con objeto, se hacen tambien con archivo separado en components

/* const Person = props => {
  return (<div>
    <span>Nombre: {props.name}, </span>
    <span> Apellido: {props.surname}, </span>
    <span>Edad: {props.age}.</span>
        </div>)
}
 function App() {
    const hola = <h2>Bienvenido al curso de React</h2>
    const saludo = persona => <h2>Hola {persona}</h2> //Funcion flecha
  return (
    <div className="App">
      <header className="App-header">
        <Person name="David" surname="Pinilla" age={27} />
        <Person name="Juan" surname="Pérez" age={17} />
        <Person name="David" surname="Ochando" age={57} />
      </header>
    </div>
  );
}
*/

//  Funcion principal

/*
function App() {
              Bienvenida y contador  
  const hola = <h2>Bienvenido al curso de React</h2>
    const saludo = persona => <h2>Hola {persona}</h2> //Funcion flecha
    const [showCounters, setShowCounters] = useState(true);
    const quitarCounter = () => setShowCounters(false);
    const ponerCounter = () => setShowCounters(true);
  return (
    <div className="App">
      <header className="App-header">
        {showCounters && <div>
        <Counter initialValue = {0} step = {2}/>
        <Counter initialValue = {0} step = {5}/>
        </div>
        }
        <button onClick={quitarCounter}>Quitar counters</button>
        <button onClick={ponerCounter}>Poner counters</button>
        
      </header>
    </div>
  );*/

                      //Formulario 
/* function App() {    

return (
<div className="App">
<header className="App-header">
  <UseForms/>

</header>
</div>
);
}

export default App; */

                  //Condicionales

function App() {    //Atrapamos los parametros de unreadMessages y los pasamos por props

  return ( 
    <div className="App">
      <header className="App-header">
      <UnreadMessages unreadMessages = {['Este es el primer mensaje','Este es el segundo mensaje']}/> 
      </header>
    </div>
  );
}
                    
export default App;
