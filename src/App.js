import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './action-creators/simpleAction';
import logo from './logo.svg';
import './App.scss';

const mapStateToProps = (state) => {
 return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
 return {
   submitNewMessage: (message) => {
     dispatch(addMessage(message))
   }
 }
};

class App extends React.Component {

 constructor(props) {
   super(props);

   this.state = {
     input: 'hey'
   }

   this.handleChange = this.handleChange.bind(this);
   this.submitMessage = this.submitMessage.bind(this);
 }

 handleChange(event) {
   this.setState({
     input: event.target.value
   });
 }

 submitMessage() {
   this.props.submitNewMessage(this.state.input);

   this.setState({
     input: ''
   });
 }

 render() {
   return (
     <div>
       <h2>Type in a new Message:</h2>
       <input
         value={this.state.input}
         onChange={this.handleChange}/><br/>
       <button onClick={this.submitMessage}>Submit</button>
       <ul>{
         	this.props.messages.messageReducer.map( (message, idx) => {
            return (
            	<li key={idx}>{message}</li>
            )
           })
         }
       </ul>
     </div>
   );
 }
};

// Change code above this line



export default connect(mapStateToProps, mapDispatchToProps)(App);


