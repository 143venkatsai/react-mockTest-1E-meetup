import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundMessage,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not found</NotFoundHeading>
    <NotFoundMessage>
      We are sorry, the page you requested could not be found.
    </NotFoundMessage>
  </NotFoundContainer>
)

export default NotFound
