export   const reducer = (state, action) => {
  const {type, payload} = action;

    switch(type){
      case 'increment':
        return {...state, counter: state.counter + payload}
      case 'decrement':
        return{...state, counter: state.counter - payload}
      case 'reset':
        return {counter: 0};
      default:
        return state
    }
}