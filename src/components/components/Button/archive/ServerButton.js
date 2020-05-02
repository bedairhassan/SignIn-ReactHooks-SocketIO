import React from 'react'
import Button from '../Button'

{/* <ServerButton name={`Server Button`} socket={socket}/> */}
class ServerButton extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            serverString:`#`,
            socket:props.socket
        }
    }

    componentDidMount(){

        this.state.socket.on(`hello world`,response=>{

            console.log(`socket.on( hello world ) : ${response}`)
            this.setState({serverString:response})
        })
    }

    render() {

        return (

            <React.Fragment>
                <Button onClick={() => this.state.socket.emit(`hello world`, {id:this.state.socket.id})} name={`Server Button`} />
                {this.state.serverString}
            </React.Fragment>
        )
    }
}

export default ServerButton
