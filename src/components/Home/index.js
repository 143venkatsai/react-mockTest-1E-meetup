import {Link} from 'react-router-dom'

import RegisterContext from '../../context/RegisterContext'

import {
  HomeContainer,
  HomeHeading,
  HomeDescription,
  HomeButton,
  HomeImage,
  Name,
  Topic,
} from './styledComponents'

import Header from '../Header'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {name, topic, isRegistered} = value

      return (
        <>
          <Header />
          {isRegistered ? (
            <HomeContainer>
              <Name>Hello {name}</Name>
              <Topic> Welcome to {topic}</Topic>
              <HomeImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          ) : (
            <HomeContainer>
              <HomeHeading>Welcome to Meetup</HomeHeading>
              <HomeDescription>Please Register for the topic</HomeDescription>
              <Link to="/register">
                <HomeButton type="button">Register</HomeButton>
              </Link>

              <HomeImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          )}
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
