import React from 'react'
import Input from './Input'
import './../style.css';

function App() {
    return (
        <form>
            <h1>Input component</h1>
            <div>
                <h4>{'<Input />'}</h4>
                <Input /> 
            </div>

            <div>
                <h4>{'<Input error />'}</h4>
                <Input error/> 
            </div>

            <div>
                <h4>{'<Input disabled />'}</h4>
                <Input disabled /> 
            </div>

            <div>
                <h4>{'<Input helperText="Some interesting text" />'}</h4>
                <Input helperText='Some interesting text' />
            </div>

            <div>
                <h4>{'<Input helperText="Some interesting text" />'}</h4>
                <Input helperText='Some interesting text' />
            </div>
            
        </form>
    )
}

export default App