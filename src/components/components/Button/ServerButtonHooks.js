import React, { useState, useEffect } from 'react'
import Button from './Button'

{/* <ServerButton name={`Server Button`} socket={socket}/> */ }
// props
export default function ServerButton({ socket, event,data,serverRespond,name }) {

    const [serverString, setServerString] = useState(``)
    const [click, setClick] = useState(false)

    useEffect(() => {

        socket.on(`${event}`, response => {

            console.log(`socket.on( ${event} ) : ${response}`)
            
            // setServerString(response)
            serverRespond(response)
        })
        setClick(false)

    }, click)

    const clicked = ()=>{
        socket.emit(event, data)
        // func()

        setClick(true)
    }

    return (

        <React.Fragment>
            <Button onClick={()=>clicked()} name={name} />
            {/* {serverString} */}
        </React.Fragment>
    )
}

