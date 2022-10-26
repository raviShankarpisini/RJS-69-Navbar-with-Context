// Write your code here
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="home-container">
          <NavBar />
          <div
            className={`card-container ${isDarkTheme && 'dark-card-container'}`}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="image"
            />
            <h1 className={`heading ${isDarkTheme && 'dark-heading'}`}>
              Lost Your Way?
            </h1>
            <p className={`description ${isDarkTheme && 'dark-description'}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
