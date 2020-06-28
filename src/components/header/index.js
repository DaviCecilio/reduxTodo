import React from 'react'
import HeaderStyles from './styles'
import PersonIcon from '../../assets/images/icons/personIcon.svg'
import GithubIcon from '../../assets/images/icons/githubIcon.svg'
import LinkedinIcon from '../../assets/images/icons/linkedinIcon.svg'
import MailIcon from '../../assets/images/icons/mailIcon.svg'

const Header = () => {
  return (
    <HeaderStyles>
      <div className="contactHeader">
        <div className="containerContact">
          <div className="wrapperAuthor">
            <img src={PersonIcon} alt="Author" className="iconContact" />
            <p className="font-white">Davi M. Cecílio</p>
          </div>

          <div className="wrapperContact">
            <ul className="listMedia">
              <li>
                <a href="https://github.com/DaviCecilio" target="_blank" rel="noopener noreferrer">
                  <img src={GithubIcon} alt="Author" className="iconContact" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/davicecilio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinIcon} alt="Author" className="iconContact" />
                </a>
              </li>

              <li>
                <a
                  href="mailto:davim.cecilio@gmail.com?subject=Contato - Davi Cecílio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={MailIcon} alt="Author" className="iconContact" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderStyles>
  )
}

export default Header
