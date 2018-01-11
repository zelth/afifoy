import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Subs } from '/imports/api/common/subs'
import Container from '/imports/ui/containers/Container'

export default createContainer(({ component }) => {
  Subs.subscribe('public.employers')
  const employers = Meteor.users.find().fetch()
  return {
    component,
    subsReady: Subs.ready(),
    employers
  }
}, Container)
