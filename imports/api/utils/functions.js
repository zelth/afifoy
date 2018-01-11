const Functions = {
  generateAlert: (options) => {
    swal({
      title: options.title || 'Are you sure?',
      text: options.text || "You will not be able to recover this imaginary file!",
      type: options.type || "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    }, function() {
      swal("Deleted!", "File Deleted", "success");
    });
  },
  generateBertAlert: (options) => {
    Bert.alert({
      type: options.type || 'success',
      style: options.style || 'growl-top-right',
      title: options.title || 'Done',
      message: options.message || 'Action Done',
      icon: options.icon || 'fa-bell'
    });

  }
}

export default Functions
