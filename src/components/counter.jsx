import React, {Component, useState, useEffect} from 'react';

                //Componente de clase

 /* class Counter extends Component {
    constructor(props) {
        super(props);

        /*this.state = {
            count: 0
        }; 
        //le indicas el inicio o lo haces por props

        this.state = {
            count: this.props.initialValue
        };
    }

                            //Metodos de ciclo de vida
    componentDidMount(){
        console.log('El componente se ha montado');   //Cuando arranca
    }
    componentDidUpdate(prevProps, prevState){       //Cuando hay cambios se actualiza, prevState te enseña el estado anterior
        console.log('El counter vale: ' + this.state.count, prevState.count)
    }
    componentWillUnmount(){             //Detener y eliminar el complemento de la vista
        console.log('El counter se ha detenido');
    }
                        //Hasta aqui


    increment = () => {
        this.setState({ //Cambia el estado y actualiza
            count: this.state.count + this.props.step
        });
    }
    
    decrement = () => {
        if(this.state.count >0){
        this.setState({
            count: this.state.count - this.props.step
        })
    }}
    
     render() {
        return (<div className='counter'>
            <button onClick={() =>this.decrement()}>Menos</button>
            <span>{this.state.count}</span>
            <button onClick={() =>this.increment()}>Más</button>
            </div>)
    }
}  */


                //Componente funcional

 const Counter = props => {

    const [count, setCounter] = useState(props.initialValue);

    const decrement = () => {
        if (count > 0){
            setCounter(count - props.step)
        }
    }

    const increment = () => {
        setCounter(count + props.step)
    }

    useEffect(() => {
        console.log('El componente se ha montado');
        return ()=> { // Alternativa a componentWillUnmount
            console.log('El counter se ha detenido');
        }
    },[]);  // ALternativa a componentDidMount para funcionales, se añade array al final

    useEffect(() => {
        console.log('El componente se ha actualizado: ' + count)
    });   // Alternativa a componentDidUpdate
    
    return (<div className='counter'>
    <button onClick={decrement}>Menos</button>
    <span>{count}</span>
    <button onClick={increment}>Más</button>
    </div>)
}

export default Counter;