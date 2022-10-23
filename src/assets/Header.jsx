import React, { useState } from 'react'

export default function Header(props, {setMode}) {
    const header = {
        backgroundColor: props.mode ? '#21222A' : 'white',
        color: props.mode ? '#c4bfbf' : 'black',
        boxShadow: props.mode ? '0 2px 5px 0px #050505' : '0 2px 5px 0px #cccccc'
    }
    const txtClr = {
        color: props.mode ? 'white' : '#c4bfbf'
    }
    return(
        <div style={header} className="container flex header">
            <div  className="left flex">
                <i className="fa-brands fa-react"></i>
                <h1>ReactFacts</h1>
            </div>
            <div className="right">
                <ul className='flex'>
                    <li>Light</li>
                     <div className="btn">
                        <input 
                            type="checkbox" 
                            id="switch" 
                            name='check' 
                            onClick={props.setMode}
                        />
                        <label htmlFor="switch"></label>
                     </div>
                    <li style={txtClr} className='l'>Dark</li>
                </ul>
            </div>
        </div>
    )
}