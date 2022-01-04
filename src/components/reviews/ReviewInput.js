import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({...this.state, [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.props.restaurantId, this.state.text)
    this.setState({...this.state, text: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        name= "text" 
        type="text" 
        value={this.state.text}
        onChange={this.handleChange}/>
        <input type="submit"  />
      </form>
    );
  }
};

export default ReviewInput;
