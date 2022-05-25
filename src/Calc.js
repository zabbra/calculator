import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import './Calc.css'

{/*export const Calc = () =>{
    const [result,setResult] = useState("");
   const handleClick = (e) =>{
        setResult(result.concat(e.target.name))
       
    }
   const clear= () =>{
        setResult("")
        
    }
    const backspace = () =>{
        setResult(result.slice(0,result.length -1))
    

    }
    const calculate= () =>{

        try{
           setResult(eval(result).toString())
          

        }catch(err){
            setResult("Error")
          

        }
       
    }
    return(
        <>
        <div className='container'>
            <form>
                <input type='text' value={result}/>
            </form>
            <div className='keypad'>
                <button className='highlight'  onClick ={clear} id='clear'>Clear</button>
                <button   className='highlight'onClick ={backspace} id='backspace'>C</button>
                <button name ='/' className='highlight' onClick={handleClick}>&divide;</button>
                <button name ='7' onClick={handleClick}>7</button>
                <button name ='8' onClick={handleClick}>8</button>
                <button name ='9' onClick={handleClick}>9</button>
                <button name ='*' className='highlight'  onClick={handleClick}>&times;</button>
                <button name ='4' onClick={handleClick}>4</button>
                <button name ='5' onClick={handleClick}>5</button>
                <button name ='6' onClick={handleClick}>6</button>
                <button name ='-'  className='highlight' onClick={handleClick}>&ndash;</button>
                <button name ='1' onClick={handleClick}>1</button>
                <button name ='2' onClick={handleClick}>2</button>
                <button name ='3' onClick={handleClick}>3</button>
                <button name ='+' className='highlight' onClick={handleClick}>+</button>
                <button name ='0' onClick={handleClick}>0</button>
                <button name ='.' onClick={handleClick}>.</button>
                <button  className='highlight' onClick={calculate} id='result'>=</button>
            </div>
        </div>
     </>


    )
}

*/}
export class Calc extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            result:'0'
           
        };
        
        
        this.handleClick = this.handleClick.bind(this);
        this.clear = this.clear.bind(this);
        this.backspace = this.backspace.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    handleClick = (e) =>{
        this.setState((state,props)=>({
            result: this.state.result == '0' ? e.target.name : this.state.result.concat(e.target.name)
        }))

    }
    clear(){
        this.setState((state)=>({
            result:'0'
        }))
    }
    backspace(){
        
        this.setState(state =>({
            result:this.state.result.slice(0,state.result.length -1) 
        }))
   

    }
    calculate(){
        try{
            const data = eval(this.state.result).toString()
            this.setState(({result : data}))
        }catch(err){
            this.setState(({result: 'Error'}))
        }
    }
    render(){
        return(
            
            <>
           <div className='container'>
               <form>
                   <input type='text' id="display" value={this.state.result}/>
               </form>
               <div className='keypad'>
                   <button className='highlight'  onClick ={this.clear} id='clear'>Clear</button>
                   <button   className='highlight'onClick ={this.backspace} id='backspace'>C</button>
                   <button name ='/' id="divide" className='highlight' onClick={this.handleClick}>&divide;</button>
                   <button name ='7' id="seven" onClick={this.handleClick}>7</button>
                   <button name ='8'  id="eight" onClick={this.handleClick}>8</button>
                   <button name ='9' id="nine" onClick={this.handleClick}>9</button>
                   <button name ='*' id="multiply" className='highlight'  onClick={this.handleClick}>&times;</button>
                   <button name ='4' id="four" onClick={this.handleClick}>4</button>
                   <button name ='5' id="five" onClick={this.handleClick}>5</button>
                   <button name ='6' id="six" onClick={this.handleClick}>6</button>
                   <button name ='-'  id="subtract" className='highlight' onClick={this.handleClick}>&ndash;</button>
                   <button name ='1' id="one" onClick={this.handleClick}>1</button>
                   <button name ='2'  id="two" onClick={this.handleClick}>2</button>
                   <button name ='3' id="three" onClick={this.handleClick}>3</button>
                   <button name ='+'  id="add" className='highlight' onClick={this.handleClick}>+</button>
                   <button name ='0'  id="zero" onClick={this.handleClick}>0</button>
                   <button name ='.' id="decimal"  onClick={this.handleClick}>.</button>
                   <button  id='result equals'  className='highlight' onClick={this.calculate} >=</button>
               </div>
           </div>
        </>

        );
    }
}


Calc.defaultProps={
    result:0
}


