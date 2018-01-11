/* eslint max-len: 0 */
import React from 'react'

const BlankLayout = ({ content }) => (
  <div>
    { content }
  </div>
)

BlankLayout.propTypes = {
  content: React.PropTypes.element
}

export default BlankLayout
