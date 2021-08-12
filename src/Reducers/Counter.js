
//reducer will tell us what is supposed to happen whwn we perform an action
const counterReducer= (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
      default:
        return state
  }
}

export default counterReducer