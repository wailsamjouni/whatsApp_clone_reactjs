import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import React from 'react'
import './Chat.css'
import { useState } from "react";

function Chat() {

    const sendNachricht = (event) => {
        event.preventDefault();
        console.log("Du hast geschrieben : ",input);
    }
    const [input,setInput] = useState("");

    return (
        <div className="chatBar">
            <div className="chatHeader">
                <Avatar src="https://camo.githubusercontent.com/9012d2d1a79e5a55c11525b4a784efd949566dd4656ea1b592bf2d019b947636/68747470733a2f2f64696365626561722e636f6d2f6170692f6d616c652f312e7376673f6d6f6f643d6861707079" />
                <div className="chatInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="ChatInfoRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton> 
                <IconButton>
                    <AttachFile />
                </IconButton> 
                <IconButton>
                    <MoreVert />
                </IconButton> 
                </div>
            </div>
            <div className="chatBody">
                <p className="chatMessage chatReciever"><span className="chatName">Wail Samjouni</span>Chat message <span className="chatTime">12:34pm</span></p> 
            </div>
            <div className="chatFooter">
                <InsertEmoticonIcon />
                <form>
                    <input onChange={(event) => setInput(event.target.value)} value={input} type="text" placeholder="Schreib eine Nachricht"/>
                    <button type="submit" onClick={sendNachricht}>Send a message...</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
