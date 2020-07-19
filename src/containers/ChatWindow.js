import React from "react";
import _ from "lodash";
import {store} from "../store";
import Header from "../components/Header";
import Chat from '../components/Chat'
import './ChatWindow.css';
import MessageInput from "./MessageInput";

const ChatWindow = ({ activeUserId }) => {
 const state = store.getState();
 const { typing } = state;
 const activeUser = state.contacts[activeUserId];
 const activeMsgs=state.messages[activeUserId]
 return (
 <div className="ChatWindow">
 <Header user={activeUser} />
 <Chat messages={_.values(activeMsgs)}/>
 <MessageInput value={typing}/>
 </div>
 );
};
export default ChatWindow;