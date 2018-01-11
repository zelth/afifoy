import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Form, Field } from 'simple-react-form'

import Jobs from '/imports/api/jobs/jobs'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Text from 'simple-react-form-material-ui/lib/text'
import Toggle from 'simple-react-form-material-ui/lib/toggle'
import Select from 'simple-react-form-material-ui/lib/select'
import MultipleCheckbox from 'simple-react-form-material-ui/lib/multiple-checkbox'
import FroalaEditor from '/imports/lib/fields/FroalaEditor'

import JobPreview from './JobPreview'

class JobEdit extends React.Component {
  constructor(props) {
    super(props)
    this.onSuccess = this.onSuccess.bind(this)
    this.onChange = this.onChange.bind(this)
    this.categoryOptions = this.categoryOptions.bind(this)
    this.state = {
      job: props.job
    }
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  onChange(job) {
    this.setState({ job })
  }

  onSuccess() {
    const { job } = this.state
    Bert.alert('Job updated', 'success', 'fixed-top', 'fa-check')
    FlowRouter.go('jobPublish', { jobId: job._id })
  }

  categoryOptions() {
    const { categories } = this.props
    const newCategory = categories.map((category) => {
      return { label: category.name, value: category._id }
    })
    return newCategory || []
  }

  render() {
    const { job } = this.state
    if (!job) {
      return (<div>loading...</div>)
    }

    return (
      <div className="section">
        <div className="row">
          <div className="col s5" >
            <div className="row">
              <Form doc={job} collection={Jobs} type="update" onSuccess={this.onSuccess} onChange={this.onChange}>
                <Field fieldName="title" name="title" type={Text} autoComplete="off" label="Job Title" />
                <Field fieldName="jobTypes" name="jobTypes" type={MultipleCheckbox} label="Job Types" />

                <Field fieldName="company" name="company" autoComplete="off" type={Text} label="Company" />
                <Field fieldName="location" name="location" autoComplete="off" type={Text} label="Location" />
                <Field fieldName="categoryId" name="categoryId" options={this.categoryOptions()} type={Select} label="Category" />
                <br />
                <div className="row">
                  <div className="col s4">
                    <Field fieldName="remoteBased" name="remoteBased" type={Toggle} label="Remote Work" />
                  </div>
                  <div className="col s4" />
                  <div className="col s4">
                    <Field fieldName="officeBased" name="officeBased" type={Toggle} label="Office Base" />
                  </div>
                </div>
                <Field fieldName="description" type={FroalaEditor} label="Description" />
                <Field fieldName="url" name="url" autoComplete="off" type={Text} label="External URL" />
                <Field fieldName="contact" name="contact" autoComplete="off" type={Text} label="Contact Info" />
                <br />
                <br />
                <br />
                <br />
                <button className="btn btn-primary" type="submit"> Update </button>
              </Form>
            </div>
          </div>
          <div className="col s7" >
            <JobPreview job={job} preview />
          </div>
        </div>
      </div>
    )
  }
}

JobEdit.propTypes = {
  job: React.PropTypes.object,
  categories: React.PropTypes.array
}

JobEdit.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default JobEdit
