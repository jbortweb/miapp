
import './App.css';
import React from 'react';
import Person from './components/person.jsx'; //Importamos componentes
import Counter from './components/counter.jsx';

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

function App() {
    const hola = <h2>Bienvenido al curso de React</h2>
    const saludo = persona => <h2>Hola {persona}</h2> //Funcion flecha
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialValue = {0} step = {2}/>
      
      </header>
    </div>
  );
}

export default App;
