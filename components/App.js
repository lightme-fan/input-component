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

            <div className='helper-text'>
                <div>
                    <h4>{'<Input helperText="Some interesting text" />'}</h4>
                    <Input helperText='Some interesting text' />
                </div>

                <div>
                    <h4>{'<Input helperText="Some interesting text" error/>'}</h4>
                    <Input helperText='Some interesting text' error />
                </div>
            </div>

            <div className='icons'>
                <div>
                    <h4>{'<Input startIcon />'}</h4>
                    <Input startIcon />
                </div>

                <div>
                    <h4>{'<Input EndIcon />'}</h4>
                    <Input endIcon />
                </div>
            </div>

            <div>
                <h4>{'<Input value="Text" />'}</h4>
                <Input value='Text' />
            </div>

            <div>
                <div>
                    <h4>{'<Input size="sm" />'}</h4>
                    <Input size='sm' />
                </div>
                <div>
                    <h4>{'<Input size="md" />'}</h4>
                    <Input size='md' />
                </div>
            </div>

            <div>
                <h4>{'<Input fullWidth />'}</h4>
                <Input fullWidth />
            </div>

            <div>
                <h4>{'<Input multiple />'}</h4>
                <Input multiple row='4'/>
            </div>

        </form>
    )
}

export default App