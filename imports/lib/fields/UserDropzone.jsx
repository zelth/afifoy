// react-dropzone
import { Slingshot } from 'meteor/edgee:slingshot'
import { Random } from 'meteor/random'
import { Tracker } from 'meteor/tracker'
import { _ } from 'meteor/underscore'

import React from 'react'
import { FieldType } from 'simple-react-form'
// import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'
import Dropzone from 'react-dropzone'

export default class DropzoneComponent extends React.Component {

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.upload = this.upload.bind(this)

    this.state = {
      progress: 0,
      fileName: ''
    }
  }

  onChange(files) {
    // console.log('test')
    const options = this.props.options || {}
    _.each(files, (file) => {
      // console.log(file)
      this.setState({ fileName: file.name })
      this.upload(file, options, (err, url) => {
        this.props.onChange(url)
      })
    })
  }

  upload(file, options = {}, done) {
    _.defaults(options, {
      id: Random.id(),
      directive: 'postPhoto',
      context: {}
    })

    const uploader = new Slingshot.Upload(options.directive, options.context)

    const computation = Tracker.autorun(() => {
      const percent = uploader.progress() || 0
      console.log('percent', percent)
      const progress = (percent > 0 && percent < 1) ? Math.round(percent * 100) : 0
      console.log('progress', progress)
      this.setState({ progress })
    })
    // computation.start()
    uploader.send(file, (err, url) => {
      console.log('err', err)
      if (err) {
        Bert.alert(err.message, 'danger', 'fixed-top', 'fa-frown-o')
      }
      computation.stop()
      return done(err, url, file)
    })
  }

  render() {
    const { progress, fileName } = this.state
    console.log('progress gi pasa', progress)
    const { value, onChange, showImage, showRemoveButton, label, errorMessage, style } = this.props

    return (
      <div>
        <label>{this.props.label}</label>
        <div style={{ position: 'relative', marginBottom: 10 }}>
          {showImage && value &&
            <div className="row">
              <div className="col s4">
                <img src={value} alt="profile pic" className="circle responsive-img" />
              </div>
            </div>
          }
          {showRemoveButton && value &&
            <a href="#" className="btn btn-default" style={{ verticalAlign: 'bottom', margin: '0 0 0 5px' }} onClick={(event) => onChange('')}>
              <i className="fa fa-remove" style={{ marginRight: 5 }} />
              Remove
            </a>
          }
        </div>
        {progress > 0 && progress < 100 ?
          (
            <div className="progress">
              <div className="determinate" style={{ width: `${progress}%` }} />
            </div>
          ) :
          (
            <Dropzone
              onDrop={this.onChange}
              style={style}
              {...this.passProps}
            >
              <div className="center orange-text">This dropzone accepts only image (jpg and png) files. <br /> Try dropping some here, or click to select files to upload.</div>
              {this.props.instructions && <div className="center red-text dropzone-instructions">{this.props.instructions}</div>}
            </Dropzone>
          )
        }
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    )
  }
}

DropzoneComponent.propTypes = {
  ...FieldType.propTypes,
  showImage: React.PropTypes.bool,
  showRemoveButton: React.PropTypes.bool,
  instructions: React.PropTypes.string
}

DropzoneComponent.defaultProps = {
  ...FieldType.defaultProps,
  showImage: true,
  showRemoveButton: true,
  instructions: '',
  style: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'dashed',
    borderRadius: 4,
    padding: 20,
    width: '100%',
    cursor: 'pointer',
    position: 'relative'
  }
}
