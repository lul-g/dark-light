import React, {useState} from 'react'

export default function Main(props) {
    const bg = {
        backgroundColor: props.mode ? '#282D35' : 'white',
        color: props.mode ? 'white' : '#2B283A'
    }
    const icon = {
        color: props.mode ? '#33373E' : '#e6e4e485'
    }
    return(
        <div style={bg} className="container main">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <i style={icon} className="fa-brands fa-react icon"></i>
        </div>
    )
}