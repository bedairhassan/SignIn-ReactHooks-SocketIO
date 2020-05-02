import React,{useState} from 'react'

export default function Input({onChange,placeholder}) {
    
    return (
        <React.Fragment>

            <input 
            onChange={(e)=>onChange(e.target.value)}
            placeholder={placeholder||`Enter value`}
            />

        </React.Fragment>   
    )
}
