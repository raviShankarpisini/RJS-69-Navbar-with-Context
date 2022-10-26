// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      return (
        <div className={`nav-container ${isDarkTheme && 'dark-nav-container'}`}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="dark website logo"
              className="logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="light website logo"
              className="logo"
            />
          )}

          <ul>
            <li className={`link ${isDarkTheme && 'dark-link'}`}>
              <Link to="/" className={`link ${isDarkTheme && 'dark-link'}`}>
                Home
              </Link>
            </li>

            <li className={`link ${isDarkTheme && 'dark-link'}`}>
              <Link
                to="/about"
                className={`link ${isDarkTheme && 'dark-link'}`}
              >
                About
              </Link>
            </li>
          </ul>
          {isDarkTheme ? (
            <button
              type="button"
              //   testid="theme"
              className="button"
              onClick={onClickTheme}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="light theme"
                className="logo"
              />
            </button>
          ) : (
            <button
              type="button"
              //   testid="theme"
              className="button"
              onClick={onClickTheme}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="dark theme"
                className="logo"
              />
            </button>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
