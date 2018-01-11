import React from 'react'
import jQuery from 'jquery'
import moment from 'moment'
import ReactPlayer from 'react-player'

class ProfilePreview extends React.Component {

  componentDidMount() {
    jQuery('ul.tabs').tabs()
  }

  render() {
    const { curricula } = this.props
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s4">
                    { !curricula.contact.avatar &&
                      <img src="/avatars/male/17.svg" alt="profile pic" className="circle responsive-img" />
                    }
                    { curricula.contact.avatar &&
                      <img src={curricula.contact.avatar} alt="profile pic" className="circle responsive-img" />
                    }
                  </div>
                  <div className="col s8">
                    <span className="card-title">{curricula.contact.firstName} {curricula.contact.lastName}</span>
                    <p><i className="tiny material-icons cyan-text text-darken-2">perm_identity</i> {curricula.contact.position}</p>
                    <p><i className="tiny material-icons cyan-text text-darken-2">perm_phone_msg</i> {curricula.contact.phone}</p>
                    <p><i className="tiny material-icons cyan-text text-darken-2">email</i> {curricula.contact.email}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col s6">
                    <p><i className="tiny material-icons cyan-text text-darken-2">room</i> {curricula.contact.city} {curricula.contact.country} {curricula.contact.postal}</p>
                  </div>
                  <div className="col s6 right-align">
                    <p><i className="tiny material-icons cyan-text text-darken-2">person_pin</i> {curricula.contact.gender}</p>
                  </div>
                </div>
                <div className="row">
                  <div style={{ textAlign: 'center' }}>
                    <ReactPlayer url={curricula.contact.videoUrl} playing controls />
                  </div>
                </div>

                <div className="card-tabs">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab"><a className="active" href="#p-workhistory">Work History</a></li>
                    <li className="tab"><a href="#p-education">Education</a></li>
                    <li className="tab"><a href="#p-skills">Skills</a></li>
                  </ul>
                </div>
                <div className="card-content grey lighten-4">
                  <div id="p-workhistory">

                    {curricula.works && curricula.works.map((work, i )=> {
                      return (
                        <div className="row" key={`${work.position}-${i}`}>
                          <div className="col s3">
                            { work.from && work.to &&
                              <p>{moment(work.from).calendar()} - {moment(work.to).calendar()}</p>
                            }
                          </div>
                          <div className="col s9">
                            { work.position &&
                              <p><strong>{work.position} at {work.company}</strong></p>
                            }
                            <p>{work.description}</p>
                          </div>
                        </div>
                      )
                    })}


                  </div>
                  <div id="p-education">
                    {curricula.educations && curricula.educations.map((education, i)=> {
                      return (
                        <div className="row" key={i}>
                          <div className="col s3">
                            { education.from && education.to &&
                              <p>{moment(education.from).calendar()} - {moment(education.to).calendar()}</p>
                            }
                          </div>
                          <div className="col s9">
                            { education.school &&
                              <p><strong>{education.school}</strong></p>
                            }
                            { education.course &&
                              <p>{education.course}</p>
                            }
                            <p>{education.accomplishment}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div id="p-skills">
                    {curricula.skills && curricula.skills.map((skill, i)=> {
                      return (
                        <div className="row" key={`${skill.skillName}-${i}`}>
                          <div className="col s3">
                            { skill.skillName &&
                              <p><strong>{skill.skillName}</strong></p>
                            }
                          </div>
                          <div className="col s9">
                            <p>{skill.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProfilePreview.propTypes = {
  curricula: React.PropTypes.object.isRequired
}

export default ProfilePreview
