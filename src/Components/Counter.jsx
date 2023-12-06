import { useReducer } from 'react';
import {reducer} from './useRducer/reducer.js'
export default function Counter() {
    const initialValue = {
        counter: 0
      }
    
      const action_1 = (type, payload) => {
        type==='increment' && dispatch({type, payload})
        type==='decrement' && dispatch({type, payload})
        type==='reset' && dispatch({type, payload})
      }
      
    const [state, dispatch] = useReducer(reducer, initialValue)
    
      return (
        <>
          <div>
            <h1>{state.counter}</h1>
            <button onClick={()=>action_1('increment', 1)}>Increment</button> <br />
            <button onClick={()=>action_1('decrement', 5)}>Decrement</button> <br />
            <button onClick={()=>action_1('reset', 0)}>Reset</button> <br />
          </div>
        </>
      )
}
