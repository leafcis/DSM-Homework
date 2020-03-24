const initState = {
  state: "none"
}

const modalState = (state=initState, action:any) => {
  switch(action.type) {
    case "MODAL":
      return {
        state : action.state
      }
    default:
      return state
  }
}

export default modalState;