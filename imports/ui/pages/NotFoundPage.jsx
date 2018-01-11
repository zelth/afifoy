import React from 'react'

const NotFoundPage = () => (
  <div>
    <div>
      <div className="section no-pad-bot">
        <div className="container">

          <h1 className="header center red-text text-lighten-2">Job Space</h1>
          <div className="row">
            <div className="col s5" />
            <div className="col s2 center">
              <img src="/img/404.svg" alt="404" />
            </div>
            <div className="col s5" />
          </div>
          <div className="row center">
            <h5 className="header col s12 light">Sorry, that page doesn't exist</h5>
          </div>
          <div className="row center">
            <a href="/" className="btn-large waves-effect waves-light teal lighten-1">Go to Home</a>
          </div>

        </div>
      </div>
    </div>
  </div>

)

export default NotFoundPage
