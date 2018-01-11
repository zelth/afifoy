import React from 'react'
import jQuery from 'jquery'
import { FlowRouter } from 'meteor/kadira:flow-router'

import JobPublicList from '/imports/ui/components/jobs/JobPublicList'

class HomePage extends React.Component {

  componentDidMount() {
    // jQuery('.button-collapse').sideNav()
    // jQuery('.parallax').parallax()
    // jQuery('#fullpage').fullpage()
    // jQuery('#wrapper').fullpage({
    //   verticalCentered: false
    // })
    jQuery('#fullpage').fullpage({
      anchors: ['page1', 'page2', 'page3', 'page4'],
      sectionsColor: ['', 'orange', '#C0C0C0', '#ADD8E6'],
    });
  }


  render() {
    return (
      <div id="fullpage">
        <div className="section first-section fd-c">
          <div className="menu-wrapper">
            <div className="container--p5pc">
              <div className="flex-grid">
                <div className="col logo-wrapper">
                  <a href="#">Jobspace</a>
                </div>
                <div className="col--4 as-c nav-wrapper">
                  <a href="#">Jobseeker</a>
                  <a href="#">Employer</a>
                </div>
                <div className="col as-c sign-wrapper">
                  <a href="">Sign in | Sign up</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mcontent-wrapper">
            <div className="container--p8pc">
              <div className="flex-grid">
                <div className="col">
                  <div className="ctnt-wrapper">
                    <p>Let's launch life</p>
                    <p>OPPORTUNITIES</p>
                  </div>
                  <div className="line"></div>
                  <div className="des-field">
                    <p>Proin ullamcorper dui tristique purus sagittis, ac consequat felis rhoncus.</p>
                  </div>
                  <div className="sform-wrapper">
                    <form className="search-panel">
                      <input type="search" name="jobtitle" placeholder="Job title, position, company, skill, experience" />
                      <input type="search" name="location" placeholder="Location" />
                      <button type="search"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-wrapper">
            <div className="flex-grid">
              <div className="col--2 as-fe">
                <div className="img-cell">
                  <div className="container--p5pc">
                    <img src="images/8990-holdings-logo.png" />
                    <img src="images/fruit.png" />
                    <img src="images/megaworld-logo.png" />
                    <img src="images/sun.png" />
                    <img src="images/logo_total.png" />
                    <img src="images/uni.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grid signup-wrapper container--p5pc">
            <div className="col--2"></div>
            <div className="col">
              <div className="sctnt-wrapper">
                <div className="des-field-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                  </p>
                </div>
                <div className="sbtn-wrapper">
                  <a href="#">sign up</a>
                </div>
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
