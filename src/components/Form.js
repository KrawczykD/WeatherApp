import React from 'react';
import './Form.css';

const Form = (props)=>{
    return(
        <form>
            <input  autoComplete="off"
                name="city"
                type="text" 
                value={props.controlValueCity} 
                onChange={props.handleControlValue} 
                placeholder="e.g.London..." >
            </input>
            <input autoComplete="off"
                name="country"
                type="text" 
                value={props.controlValueCountry} 
                onChange={props.handleControlValue} 
                placeholder="e.g.UK..." >
            </input>
            <button onClick={props.handleSubmitCity}>Find!</button>
        </form>  
    )
}

export default Form;