import React, { Component } from 'react'
import { inject } from 'mobx-react'

@inject(stores => ({
  rootStore: stores.rootStore
})
)
class App extends Component {
  render() {
  const {rootStore} = this.props;
    return (
      <div>
        App
      </div>
    )
  }
}
export default  App;