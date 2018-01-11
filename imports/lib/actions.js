/* global swal */
import _ from 'underscore'

const confirm = (options = {}, success, faild) => {
  _.defaults(options, {
    type: 'warning',
    title: 'Are you sure?',
    text: 'You will not be able to recover them!',
    confirmButtonText: 'Yes, Confirm!',
    showCancelButton: true,
    closeOnConfirm: true,
    closeOnCancel: true
  })
  swal(options, (ok) => {
    if (ok) {
      return success()
    }
    if (!ok && faild) {
      return faild()
    }
    return false
  })
}

const error = (message = '', title = '') => swal(title, message, 'error')

const success = (message = '', title = '') => swal(title, message, 'success')

const info = (message = '', title = '') => swal(title, message, 'info')

const warning = (message = '', title = '') => swal(title, message, 'warning')

export {
  confirm,
  error,
  success,
  info,
  warning
}
