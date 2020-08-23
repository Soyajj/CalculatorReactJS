import React, { Component } from 'react';
import '../App.css'

export class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : '',
            nextNum : '',
            number : '',
        }
    }
     
    number0 = () =>{
        this.setState({
            number : this.state.number + '0',
        })
    }

    number1 = () =>{
        this.setState({
            number : this.state.number + '1',
        })
    }

    number2 = () =>{
        this.setState({
            number : this.state.number + '2',
        })
    }


    number3 = () =>{
        this.setState({
            number : this.state.number + '3',
        })
    }


    number4 = () =>{
        this.setState({
            number : this.state.number + '4',
        })
    }


    number5 = () =>{
        this.setState({
            number : this.state.number + '5',
        })
    }


    number6 = () =>{
        this.setState({
            number : this.state.number + '6',
        })
    }


    number7 = () =>{
        this.setState({
            number : this.state.number + '7',
        })
    }


    number8 = () =>{
        this.setState({
            number : this.state.number + '8',
        })
    }


    number9 = () =>{
        this.setState({
            number : this.state.number + '9',
        })

    }

    add = () =>{
        this.setState({
            nextNum : this.state.number,
            number : '',
            value : 1,
        }) 
    }
    mul = () =>{
        this.setState({
            nextNum : this.state.number,
            number : '',
            value : 2,
        }) 
    }
    sub = () =>{
        this.setState({
            nextNum : this.state.number,
            number : '',
            value : 3,
        }) 
    }
    divide = () =>{
        this.setState({
            nextNum : this.state.number,
            number : '',
            value : 4,
        }) 
    }

    result = () => {
        if(this.state.value === 1){
        this.setState({
            number : parseInt(this.state.nextNum) + parseInt(this.state.number),
            nextNum : ''
        })}
        else if(this.state.value === 2){
            this.setState({
                number : parseInt(this.state.nextNum) * parseInt(this.state.number),
                nextNum : ''
            })}
        else if(this.state.value === 3){
            this.setState({
                number : parseInt(this.state.nextNum) - parseInt(this.state.number),
                nextNum : ''
            })}
        else if(this.state.value === 4){
                this.setState({
                    number : parseInt(this.state.nextNum) / parseInt(this.state.number),
                    nextNum : ''
            })}
     }


     clear = () =>{
         this.setState({
             number:'',
             nextNum : '',
             value : ''
         })
     }
    render() {
        return (
            <div className = "calculator">
                <div>
                    <input type ="number" value={this.state.number} disabled = "true"/>
                </div>
                <div>
                    <button  className = "btn btn-primary" onClick = {this.number1}>1</button>
                    <button  className = "btn btn-primary" onClick = {this.number2}>2</button>
                    <button  className = "btn btn-primary" onClick = {this.number3}>3</button>
                    <button  className = "btn btn-dark" onClick ={this.mul}>*</button>
                </div>
                <div>
                    <button  className = "btn btn-primary" onClick = {this.number4}>4</button>
                    <button  className = "btn btn-primary" onClick = {this.number5}>5</button>
                    <button  className = "btn btn-primary" onClick = {this.number6}>6</button>
                    <button className = "btn btn-dark"  onClick ={this.divide}>/</button>
                </div>
                <div>
                    <button  className = "btn btn-primary" onClick = {this.number7}>7</button>
                    <button  className = "btn btn-primary" onClick = {this.number8}>8</button>
                    <button  className = "btn btn-primary" onClick = {this.number9}>9</button>
                    <button className = "btn btn-danger" onClick = {this.clear}>C</button>
                </div>
                <div>
                    <button className = "btn btn-dark"  onClick = {this.add}>+</button>
                    <button  className = "btn btn-primary" onClick = {this.number0}>0</button>
                    <button className = "btn btn-dark"  onClick ={this.sub}>-</button>
                    <button  className = "btn btn-secondary" onClick = {this.result}>=</button>
                </div>
            </div>
        )
    }
}

export default MainPage
