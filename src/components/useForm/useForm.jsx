import React from 'react';
import './useForm.scss'
class UseForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email:'',genero:''}
        this.emailInput = React.createRef();
    }

        componentDidMount() {
            console.log(this.emailInput.current);
            this.emailInput.current.focus();
        }

        handleChange = (event) => {
            this.setState({[event.target.name]:event.target.value})   //Funcion onchange del input
        }
        handleSelectChange = (event) => {
            this.setState({[event.target.name]:event.target.selectedOptions[0].value})  //Funcion onchange del select
        }
        handleSubmit = (event) => {  //Previene el reinicio de la página
            event.preventDefault();
            console.log('Enviado');
        }

    render(){
        return (
            <form className="useForm" onSubmit={this.handleSubmit}>
                <input type="email" name="email" ref={this.emailInput} onChange={this.handleChange} value={this.state.email} placeholder='Introduce tu email'/>
                <select name="genero" value={this.state.genero} onChange = {this.handleSelectChange}>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}



export default UseForms