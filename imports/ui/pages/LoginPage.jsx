import React from 'react'
import Blaze from 'meteor/gadicc:blaze-react-component'

const LoginPage = () => (
  <div className="container">
    <div className="section job-post">
      <div className="row center">
        <div className="col s6 offset-s3">
          <Blaze template="atForm" />
        </div>
      </div>
    </div>
  </div>
)

export default LoginPage
