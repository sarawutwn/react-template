export default (state = [], action) => {
    switch(action.type) {
        case "SET_PERMISSION":
            return action.payload
        default:
            return state
    }
}
