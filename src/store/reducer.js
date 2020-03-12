const initialState = {
  orientation: 'portrait', //portrait/landscape
  theme: 'light', //dark/light
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: (state.theme === 'dark') ? 'light' : 'dark'
      }
    default:
      return {
        ...state
      }
  }
}