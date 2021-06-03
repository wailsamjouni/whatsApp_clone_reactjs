import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';

import SideChat from './SideChat'
import React from 'react'
import './Sidebar.css'
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarHeader">
            <Avatar />
            <div className="sidebarRightheader">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            </div>
            </div>
            <div className="sidebarSearch">
                <div className="searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebarChats">
                <SideChat addChat />
                <SideChat />
                <SideChat />
                <SideChat />
                <SideChat />
                <SideChat />
                <SideChat />
                <SideChat />
                <SideChat />
            </div>
        </div>
    )
}

export default Sidebar
