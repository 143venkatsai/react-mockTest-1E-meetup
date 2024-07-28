import {withRouter} from 'react-router-dom'

import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'

import {
  RegisterContainer,
  RegisterImage,
  RegisterPage,
  RegisterHeading,
  RegisterLabel,
  RegisterInput,
  RegisterSelect,
  RegisterOption,
  RegisterButton,
  RegisterError,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        errorMessage,
        showErrorMsg,
        changeRegisterName,
      } = value

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          changeRegisterName()
        } else {
          showErrorMsg()
        }
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <RegisterPage onSubmit={onSubmitForm}>
              <RegisterHeading>Let us join</RegisterHeading>
              <>
                <RegisterLabel htmlFor="name">NAME</RegisterLabel>
                <RegisterInput
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Your name"
                  onChange={onChangeName}
                />
              </>
              <>
                <RegisterLabel htmlFor="topics">TOPICS</RegisterLabel>
                <RegisterSelect
                  id="topics"
                  value={topic}
                  onChange={onChangeTopic}
                >
                  {topicsList.map(eachTopic => (
                    <RegisterOption value={eachTopic.id} key={eachTopic.id}>
                      {eachTopic.displayText}
                    </RegisterOption>
                  ))}
                </RegisterSelect>
              </>
              <RegisterButton type="submit">Register Now</RegisterButton>
              {errorMessage && (
                <RegisterError>Please enter your name</RegisterError>
              )}
            </RegisterPage>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default withRouter(Register)
