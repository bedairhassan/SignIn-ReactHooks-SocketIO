import React, { useEffect, useState } from 'react'
import Input from '../Input'
import ServerButtonHooks from '../Button/ServerButtonHooks'

function SignIn({ socket,confirmation }) {

  const [username, setUsername] = useState(``)


  return (

    <React.Fragment>
      <h1>Sign In</h1>

      <Input
        placeholder={`Enter your name`}
        onChange={username => setUsername(username)} />

      <ServerButtonHooks

        socket={socket}

        name={`Sign In`}
        event={`SignIn`}

        data={{username}}
        serverRespond={(data) => { console.log(`confirmation: ${data}`); confirmation(data) }} />

    </React.Fragment>

  )
}

export default SignIn
