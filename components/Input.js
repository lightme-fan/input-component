import React from 'react';

function Input(props) {
    let inputClasses = props.variant ? `input input-${props.variant}` : 'input'
    let labelClasses = props.variant ? `label $label-${props.variant}` : 'label'
    
    let elError 
    if (props.error) {
        inputClasses = `${inputClasses} input-error`
        labelClasses = `${labelClasses} label-error`
    }

    if (props.helperText) {
        inputClasses = `${inputClasses} input-helperText`
        labelClasses = `${labelClasses} label-helperText`
        elError = <small className='small-err'>{props.helperText}</small>
    }

    
    if (props.startIcon) { 
        inputClasses = `${inputClasses} input-icon start-icon`
    }

    if (props.endIcon) {
        inputClasses = `${inputClasses} end-icon input-icon`
    }

    if (props.value) {
        inputClasses = `${inputClasses} input-${props.value}`
        labelClasses = `${labelClasses} label-${props.value}`
    }

    if (props.size) {
        inputClasses = `${inputClasses} input-${props.size}`
    }

    if (props.fullWidth) {
        inputClasses = `${inputClasses} input-fullWidth`
    }

    let element = 
        <input 
            className={inputClasses} 
            type='text' 
            placeholder='Placeholder'
            disabled={props.disabled} 
            value={props.value}
        />

    if (props.multiple) {
        element = 
            <textarea rows={props.row}>
                {props.chidren === 'Placeholder' ? '' : 'Placeholder'}
            </textarea>
    }

    return (
        <fieldset>
            {element}
            {elError}
            <label className={labelClasses}>
                Label 
            </label>
        </fieldset>
    )    
}

export default Input