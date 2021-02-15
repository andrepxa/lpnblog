import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="social">
        <a title="facebook" href="https://facebook.com" target="_blank">
          <img
            src={facebook}
            alt="Facebook"
            style={{ width: '1em', height: '1em' }}
          />
        </a>
        <a title="twitter" href="https://twitter.com" target="_blank">
          <img
            className="fas fa-lg"
            src={twitter}
            alt="Twitter"
            style={{ width: '1em', height: '1em' }}
          />
        </a>
        <a title="instagram" href="https://instagram.com" target="_blank">
          <img
            src={instagram}
            alt="Instagram"
            style={{ width: '1em', height: '1em' }}
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
