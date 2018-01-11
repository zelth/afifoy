/* eslint max-len: 0 */
import React from 'react'
import HeaderContainer from '../components/common/HeaderContainer'
import Footer from '../components/common/Footer'

const PageLayout = ({ content }) => (
  <div className="main-wrapper">
    <HeaderContainer />
    { content }
    <Footer />
  </div>
)

PageLayout.propTypes = {
  content: React.PropTypes.element
}

export default PageLayout
