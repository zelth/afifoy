import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Subs } from '/imports/api/common'

import Container from '/imports/ui/containers/Container'
import Jobs from '/imports/api/jobs/jobs'

class ChatContainer extends Container {

  renderChatNotFound() {
    return (
      <div>
        There are no jobs yet
      </div>
    )
  }

  renderComponent() {
    const { component } = this.props
    return (
      <div>
        {React.createElement(component, this.componentProps())}
      </div>
    )
  }

  render() {
    const { subsReady, job } = this.props
    return (
      subsReady ?
        this.renderComponent() :
        this.renderLoading()
    )
  }
}

export default createContainer(({ component, slug }) => {
  Subs.subscribe('singleJob', slug)
  const job = Jobs.find().fetch()
  return {
    component,
    subsReady: Subs.ready(),
    job
  }
}, ChatContainer)
