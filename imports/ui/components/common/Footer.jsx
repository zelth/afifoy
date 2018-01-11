import React from 'react'

const Footer = (props, context) => (
  <footer className="page-footer teal">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Job Space Bio</h5>
          <p className="grey-text text-lighten-4">We are a team of friends working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
        </div>
        <div className="col l2 s12">
          <h5 className="white-text">Faq</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
          </ul>
        </div>
        <div className="col l2 s12">
          <h5 className="white-text">Follow Us</h5>
          <ul>
            <li><a className="white-text" href="#!">Facebook</a></li>
            <li><a className="white-text" href="#!">Twitter</a></li>
          </ul>
        </div>
        <div className="col l2 s12">
          <h5 className="white-text">Contact Us</h5>
          <ul>
            <li><a className="white-text" href="#!">Email</a></li>
            <li><a className="white-text" href="#!">Phone</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Crafted with &hearts; <a className="brown-text text-lighten-3" href="#">JobSpace.ph</a>
      </div>
    </div>
  </footer>
)

export default Footer
