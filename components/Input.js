import React from 'react';

function Input(props) {
    const phoneIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
    const lockedIcon = <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
    let inputClasses = props.variant ? `input input--${props.variant}` : 'input'
    let labelClasses = props.variant ? `label $label--${props.variant}` : 'label'
    if (props.err) {
		inputClasses = `${inputClasses} input--error`;
    }

    if (props.helperText) {
		inputClasses = `${inputClasses} input--${props.helperText}`;
    }
    
    return (
        <fieldset>
            <input 
                className={inputClasses} 
                type='text' 
                placeholder={`
                    Placeholder
                `}
                disabled={props.disabled}
            />
            <label className={labelClasses}>
                Label 
            </label>
        </fieldset>
    )    
}

export default Input