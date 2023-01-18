import React from 'react'
import PropTypes from 'prop-types'

import { reducer, initialState } from './reducer'

export const LoginContext = React.createContext(null)

export function LoginContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  )
}

LoginContextProvider.propTypes = { children: PropTypes.node.isRequired }