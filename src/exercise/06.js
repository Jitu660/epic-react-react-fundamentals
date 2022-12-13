// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef } from 'react';

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).\
  const userNameInput = React.useRef();
  function handleSubmit(event) {
    onSubmitUsername(userNameInput.current.value); 
  }

  function handleChange(event) {
    const userNameInput = event.target.value;
    setlowercaseInput(userNameInput.toLowerCase());
  }

  const [lowercaseInput, setlowercaseInput] = React.useState('');

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userNameInput'>Username:</label>
        <input value={lowercaseInput} ref={userNameInput} onChange={handleChange} name='username' type="text" />
      </div>
      <button type="submit" >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
