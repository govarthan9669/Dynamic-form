
import axios from 'axios'
import React, { Component } from 'react'

export class Get extends Component {
    state={person:[]}
    componentDidCatch()
    {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        
            .then(res=>
            {
                const person=res.data;
                this.setState({person})
            })
        
    }

  render() {
    return ( <ul>
        {this.state.person.map(res=> <li key={res.id}>
          {res.username} &ensp; {res.email}</li>)}
    </ul>
      
    )
  }
}

export default Get