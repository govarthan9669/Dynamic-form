import axios from 'axios'
import React, { Component } from 'react'


export class Del extends Component {
    state={
        id:"",
        errormsg:""
    }
    eventChange=(event)=>{
        this.setState({id:event.target.value})
    }
    axiosSubmit=(even)=>
    {
        even.preventDefault();
        const user=this.state.id;
        axios.delete(`https://jsonplaceholder.typicode.com/users/ ${this.state.id}`)
        .then(res=>
            {
            console.log(res.data)
            })
            .catch(error=>{console.log(error)
            this.setState({errormsg:"i am error"})})

    }
  render() {
    return (
      <div><form onSubmit={this.axiosSubmit}>
        <input type="text" onChange={this.eventChange}></input>
        <button type="submit">submit</button></form>
        {this.state.errormsg ?
        <div>{this.state.errormsg} </div> :""}
        </div>
    )
  }
}

export default Del