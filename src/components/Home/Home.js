import React, { Component } from 'react'
import RepoTable from './RepoTable'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repositories: []
    }
  }
  UNSAFE_componentWillMount() {
    axios
      .get('https://api.github.com/users/salim9999/repos')
      .then(res => this.setState({ repositories: res.data }))
      .catch(error => console.log(error))
  }
  render() {
    const { repositories } = this.state
    return (
      <div>
        <p>Home page</p>
        {repositories && <RepoTable repositories={repositories} />}
      </div>
    )
  }
}

export default Home
