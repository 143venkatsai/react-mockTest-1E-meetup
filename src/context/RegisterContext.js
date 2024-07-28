import React from 'react'

const ReactContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  isRegistered: 'false',
  errorMessage: 'false',
  changeName: () => {},
  changeTopic: () => {},
  changeRegisterName: () => {},
  showErrorMsg: () => {},
})

export default ReactContext
