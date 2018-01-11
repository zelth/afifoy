import React from 'react'
import jQuery from 'jquery'
import { FlowRouter } from 'meteor/kadira:flow-router'

class HomePage extends React.Component {

  componentDidMount() {
    jQuery('.button-collapse').sideNav()
    jQuery('.parallax').parallax()
  }

  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br /><br />
              <h1 className="header center orange-text ">Job Space</h1>
              <div className="row center">
              </div>
              <div className="row center">
                <h4 className="orange-text">Beyond jobs, we launch opportunities</h4>
                <a href="#" className="btn-large waves-effect waves-light orange">Coming soon</a>
              </div>
              <br /><br />

            </div>
          </div>
          <div className="parallax"><img src="/img/cityscape.jpg" alt="Unsplashed background img 1" /></div>
        </div>
        <div className="container">
          <div className="section">
            <div className="row center">
              <div className="col s12">
                <h5 className="header col s12 light">The premier job board and community space specifically for Jobseekers</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

HomePage.propTypes = {

}
export default HomePage
