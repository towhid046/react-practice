import { useReducer } from 'react';

function App() {

  const reducer = (state, action) => {
      switch(action.type){
        case 'increment':
          return {...state, counter: state.counter + action.by}
        case 'decrement':
          return{...state, counter: state.counter - action.by}
        case 'reset':
          return {counter: 0};
        default:
          return state
      }
  }
  const initialValue = {
    counter: 10
  }

const [state, dispatch] = useReducer(reducer, initialValue)  

  return (
    <>
      <div>
        <h1>{state.counter}</h1>
        <button onClick={()=>dispatch({type: 'increment', by: 3})}>Increment</button> <br />
        <button onClick={()=>dispatch({type: 'decrement', by: 2})}>Decrement</button> <br />
        <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
      </div>
    </>
  )
}

export default App
