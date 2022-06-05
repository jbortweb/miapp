import React, {Component, useState} from 'react';

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
    increment() 
        this.setState({ //Cambia el estado y actualiza
            count: this.state.count + this.props.step
        });
    
    decrement() 
        if(this.state.count >0){
        this.setState({
            count: this.state.count - this.props.step
        })
    }
    
     render() {
        return (<div className='counter'>
            <button onClick={() =>this.decrement()}>Menos</button>
            <span>{this.state.count}</span>
            <button onClick={() =>this.increment()}>Más</button>
            </div>)
    }
} */

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
    
    return (<div className='counter'>
    <button onClick={decrement}>Menos</button>
    <span>{count}</span>
    <button onClick={increment}>Más</button>
    </div>)
}

export default Counter;