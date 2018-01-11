/* global Bert */
import React from 'react'
// import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'
import jQuery from 'jquery'

const froalaOptions = {
  height: '200',
  toolbarButtons: ['undo', 'redo', 'bold', 'italic'],
  toolbarButtonsMD: ['undo', 'redo', 'bold', 'italic'],
  toolbarButtonsSM: ['undo', 'redo', 'bold', 'italic'],
  toolbarButtonsXS: ['undo', 'redo', 'bold', 'italic'],
  quickInsertButtons: ['underline', 'bold', 'table']
}

class FroalaEditorPublic extends React.Component {

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    this.state = {
      value: props.value
    }
  }

  componentDidMount() {
    this.froalaEditor = jQuery(this.refs.editor)
      .froalaEditor(froalaOptions)
      .on('froalaEditor.blur', (e, editor) => {
        this.props.onChange(editor.html.get())
      })
      .on('froalaEditor.video.linkError', (e, editor, link) => {
        // Bert.alert(err.message, 'danger', 'fixed-top', 'fa-frown-o')
        console.log(e, editor, link)
      })
      .on('froalaEditor.file.error', (e, editor, err) => {
        if (err.code === 5) {
          Bert.alert('Please reduce the size of your file to 100mb', 'danger', 'fixed-top', 'fa-frown-o')
        } else {
          Bert.alert(err.message, 'danger', 'fixed-top', 'fa-frown-o')
        }
      })
    this.froalaEditor.froalaEditor('html.set', this.props.value)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
    this.froalaEditor.froalaEditor('html.set', nextProps.value)
  }

  componentWillUnmount() {
    if (this.froalaEditor.data('froala.editor')) {
      this.froalaEditor.froalaEditor('destroy')
    }
  }

  onChange(value) {
    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    return (
        <div>
          <label>{this.props.label}</label>
          <div ref="editor" />
        </div>
    )
  }
}

export default FroalaEditorPublic
