const initialState = {
  orientation: 'portrait', //portrait/landscape
  theme: 'dark', //dark/light
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
}