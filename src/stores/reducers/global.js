import { SWITCH_THEME } from '../actions/global'

import { lightTheme, darkTheme } from '../../config/theme'

const initialState = {
  theme: lightTheme
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: state.theme.key === 'light' ? darkTheme : lightTheme
      }
    default:
      return state
  }
}
