/* global Bert: true */
// import { Meteor } from 'meteor/meteor'
// import moment from 'moment'
// import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
// import Jobs from '/imports/api/jobs/jobs'

export default class JobCounter extends React.Component {

  render() {
    const { counter } = this.props

    return (
      <div>
        {counter.total}
      </div>
    )
  }
}

JobCounter.propTypes = {
  counter: React.PropTypes.object
}
