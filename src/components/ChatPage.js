import React from 'react'
import Sidebar from './Sidebar'
import Chatcontainer from './Chatcontainer'
import './ChatPages.css';
function ChatPage({currentUser,signOut}) {
  return (
    <div className='chatpage'>
        <div className='chatpage-container'>
        <Sidebar currentUser={currentUser} signOut={signOut}/>
        <Chatcontainer currentUser={currentUser}/>
        </div>
      
    </div>
  )
}

export default ChatPage
