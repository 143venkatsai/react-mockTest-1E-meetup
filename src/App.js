import {Switch, Redirect, Route} from 'react-router-dom'
import {Component} from 'react'

import RegisterContext from './context/RegisterContext'

import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
// const topicsList = [
//   {
//     id: 'ARTS_AND_CULTURE',
//     displayText: 'Arts and Culture',
//   },
//   {
//     id: 'CAREER_AND_BUSINESS',
//     displayText: 'Career and Business',
//   },
//   {
//     id: 'EDUCATION_AND_LEARNING',
//     displayText: 'Education and Learning',
//   },
//   {
//     id: 'FASHION_AND_BEAUTY',
//     displayText: 'Fashion and Learning',
//   },
//   {
//     id: 'GAMES',
//     displayText: 'Games',
//   },
// ]

class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegistered: false,
    errorMessage: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  changeRegisterName = () => {
    this.setState({isRegistered: true})
  }

  showErrorMsg = () => {
    this.setState({errorMessage: true})
  }

  render() {
    const {name, topic, isRegistered, errorMessage} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          errorMessage,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          showErrorMsg: this.showErrorMsg,
          changeRegisterName: this.changeRegisterName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
