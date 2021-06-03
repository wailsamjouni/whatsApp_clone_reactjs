import { Avatar } from '@material-ui/core'
import React from 'react'
import './SideChat.css'

function SideChat({addChat}) {

    const createNewChat = () => {
        const nameOfRoom = prompt("Please enter a name");
        if(nameOfRoom){
            //do something
        }
    };

    return !addChat ?(
        <div className="sideChat">
            <Avatar src="https://camo.githubusercontent.com/9012d2d1a79e5a55c11525b4a784efd949566dd4656ea1b592bf2d019b947636/68747470733a2f2f64696365626561722e636f6d2f6170692f6d616c652f312e7376673f6d6f6f643d6861707079" />
            <div className="chatInfo">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) :(
        <div onClick={createNewChat} className="sideChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SideChat
