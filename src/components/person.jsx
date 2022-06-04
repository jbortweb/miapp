import React from 'react';

//  Complemento funcional 

/* const Person = props => {
    return (<div>
      <span>Nombre: {props.name}, </span>
      <span> Apellido: {props.surname}, </span>
      <span>Edad: {props.age}.</span>
            </div>)
  } */

  // Complemento de clase

  class Person extends React.Component {
      constructor(props) {
          super(props);
      }
      render(){
        return (<div>
            <span>Nombre: {this.props.name}, </span>
            <span> Apellido: {this.props.surname}, </span>
            <span>Edad: {this.props.age}.</span>
            </div>)
      }
  }
  export default Person;