import React from 'react'


class ProfilePreview extends React.Component {
  render() {
    const { user } = this.props
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              {user.profile.companyLogo &&
                <img alt="logo" src={user.profile.companyLogo} />
              }
              {!user.profile.companyLogo &&
                <img alt="logo" src="/img/sample.jpg" />
              }
            </div>
            <div className="card-content">
              <span className="card-title">{user.profile.companyName}</span>
              <div className="row">
                <div className="col s6">
                  <p><i className="tiny material-icons cyan-text text-darken-2">perm_identity</i> {user.profile.firstName} {user.profile.lastName}</p>
                  <p><i className="tiny material-icons cyan-text text-darken-2">language</i> {user.profile.companyUrl}</p>
                  <p><i className="tiny material-icons cyan-text text-darken-2">perm_phone_msg</i> {user.profile.phone} {user.profile.mobile}</p>
                </div>
                <div className="col s6">
                  <p><i className="tiny material-icons cyan-text text-darken-2">star</i> {user.profile.facebookUrl}</p>
                  <p><i className="tiny material-icons cyan-text text-darken-2">star</i> {user.profile.twitterUrl}</p>
                  <p><i className="tiny material-icons cyan-text text-darken-2">star</i> {user.profile.linkedInUrl}</p>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: user.profile.bio }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProfilePreview.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default ProfilePreview

