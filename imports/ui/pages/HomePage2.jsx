import React from 'react'
import jQuery from 'jquery'
import { FlowRouter } from 'meteor/kadira:flow-router'

import JobPublicList from '/imports/ui/components/jobs/JobPublicList'

class HomePage extends React.Component {

  componentDidMount() {
    jQuery('.button-collapse').sideNav()
    jQuery('.parallax').parallax()
    jQuery('#fullpage').fullpage()
    jQuery('#wrapper').fullpage({
      verticalCentered: false
    })
  }

  render() {
    return (
      <div id="wrapper">
        <div className="section" id="section1">
          <nav className="transparent z-depth-0">
            <div className="nav-wrapper left">
              <a href="#" className="brand-logo">Jobspace</a>
              <ul id="nav-mobile" className="hide-on-med-and-down navlinks">
                <li><a href="#">Jobseeker</a></li>
                <li><a href="#">Employer</a></li>
              </ul>
            </div>
            <a className="waves-effect waves-light btn right sign-btn" href="#">Sign in | Sign up</a>
          </nav>
          <div className="middle-wrapper">
            <p className="toptext">Let's launch life</p>
            <p className="belowtext">OPPORTUNITIES</p>
            <hr />
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam alias </span>

            <div className="form-wrapper">
              <form className="input-field white" action="">
                <input className="jobs" type="search" name="" placeholder="Job title, position, company, skill, experience" />
                <input className="location" type="search" name="" placeholder="Location" />
                <button className="search-btn"><i className="material-icons left">search</i></button>
              </form>
            </div>
          </div>
          <div className="footer">
            <ul>
              <li><img src="images/8990-holdings-logo.png" /></li>
              <li><img src="images/fruit.png" /></li>
              <li><img src="images/megaworld-logo.png" /></li>
              <li><img src="images/sun.png" /></li>
              <li><img src="images/logo_total.png" /></li>
              <li><img src="images/uni.png" /></li>
            </ul>
          </div>
          <div className="sign-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo pariatur voluptatum eos autem nemo magnam culpa eius dolorum numquam</p>
            <button className="btn">SIGN UP</button>
          </div>
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {

}
export default HomePage
