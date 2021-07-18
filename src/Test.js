import React,{useState } from 'react'
import reactDom from 'react-dom'
import {SetStateAction} from 'react'

export default function Name()
{
  const[name, setName]=useState('123');
    return (
        <div>
      <p></p>
      <button onClick={() => setName('345')}>
        Click me
      </button>
    </div>
    )
}

