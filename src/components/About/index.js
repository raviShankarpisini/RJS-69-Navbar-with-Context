// Write your code here
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div className="home-container">
          <NavBar />
          <div
            className={`card-container ${isDarkTheme && 'dark-card-container'}`}
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about dark"
                className="image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about light"
                className="image"
              />
            )}
            <h1 className={`heading ${isDarkTheme && 'dark-heading'}`}>
              About
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
