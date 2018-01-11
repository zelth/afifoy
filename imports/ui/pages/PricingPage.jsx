import React from 'react'
import jQuery from 'jquery'
import { FlowRouter } from 'meteor/kadira:flow-router'

import JobPublicList from '/imports/ui/components/jobs/JobPublicList'

class HomePage extends React.Component {

  componentDidMount() {
    // jQuery('.button-collapse').sideNav()
    // jQuery('.parallax').parallax()
  }

  render() {
    return (
      <div className="container">
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br /><br />
            <h1 className="header center orange-text">Perfect fit to land a job.</h1>
            <div className="row center">
              <h5 className="header col s12 light">A massive database for all kinds of jobseekers</h5>
            </div>

          </div>
        </div>

        <div className="section">
          <div className="row">
            <div className="col s12 m3">
              <br />
              <br />
              <br />
              <p>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td className="right-align">JOB POSTS</td>
                  </tr>
                  <tr>
                    <td className="right-align">JOB POST APPROVAL TIME</td>
                  </tr>
                  <tr>
                    <td className="right-align">VIEW JOB APPLICATIONS</td>
                  </tr>
                  <tr>
                    <td className="right-align">HIRE WORKERS</td>
                  </tr>
                  <tr>
                    <td className="right-align"><strong>PRICING</strong></td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div className="col s12 m3">
              <div className="card-panel white lighten-3 scale-transition">
                <div className="icon-block">
                  <h5 className="center">FREE</h5>
                  <table className="striped">
                    <tbody>
                      <tr>
                        <td className="center">3 Post Max</td>
                      </tr>
                      <tr>
                        <td className="center">2 days</td>
                      </tr>
                      <tr>
                        <td className="center"><i className="material-icons">error</i></td>
                      </tr>
                      <tr>
                        <td className="center"><i className="material-icons">error</i></td>
                      </tr>
                      <tr>
                        <td className="center"><strong>FREE FOR LIFE</strong></td>
                      </tr>
                      <tr>
                        <td className="center">
                          <a href="test" className="btn-large waves-effect waves-light orange">Register Now!</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col s12 m3">
              <div className="card-panel white lighten-3 scale-transition">
                <div className="icon-block">
                  <h5 className="center">PRO</h5>
                  <table className="striped">
                    <tbody>
                      <tr>
                        <td className="center">5 Post Max</td>
                      </tr>
                      <tr>
                        <td className="center">Instant</td>
                      </tr>
                      <tr>
                        <td className="center"><i className="material-icons">error</i></td>
                      </tr>
                      <tr>
                        <td className="center"><i className="material-icons">done</i></td>
                      </tr>
                      <tr>
                        <td className="center"><strong>$39</strong> per Month</td>
                      </tr>
                      <tr>
                        <td className="center">
                          <a href="test" className="btn-large waves-effect waves-light blue">Get Stated</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col s12 m3">
              <div className="card-panel white lighten-3 scale-transition">
                <div className="icon-block">
                  <h5 className="center">PREMIUM</h5>
                  <table className="striped">
                    <tbody>
                      <tr>
                        <td className="center">15 Post Max</td>
                      </tr>
                      <tr>
                        <td className="center">Instant</td>
                      </tr>
                      <tr>
                        <td className="center"><i className="material-icons">done</i></td>
                      </tr>
                      <tr>
                        <td className="center"><i className="material-icons">done</i></td>
                      </tr>
                      <tr>
                        <td className="center"><strong>$100</strong> per Month</td>
                      </tr>
                      <tr>
                        <td className="center">
                          <a href="test" className="btn-large waves-effect waves-light blue">Be Awesome</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
