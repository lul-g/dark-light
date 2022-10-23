import React from 'react'

export default function setRootColor({color}) {
    document.documentElement.style.setProperty('--root-bg', color)
}