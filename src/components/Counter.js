import { connect, useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {

  //state.counter è il reducer come indicato nel configureStore
  //state.counter.counter è la proprietà di interesse dello slice indicato nel reducer
  const counter = useSelector(state => state.counter.counter);
  const toogle = useSelector(state => state.counter.toogleCounter);

  const dispatch = useDispatch();

  function incrementHandler(){
    //metodo per redux toolkit
    dispatch(counterActions.increment());
    //metodo solo redux
    //dispatch({type: 'increment'});
  }

  function decrementHandler() {
    //metodo per redux toolkit
    dispatch(counterActions.decrement());
    //metodo solo redux
    //dispatch({type: 'decrement'});
  }

  function increaseHandler() {
        //metodo per redux toolkit
        // crea una action tipo {type: UNIQUE_ID, payload: 10 }
        //payload è il nome della proprietà impostata da toolkit
        //quindi per leggerlo dobbiamo cercare questa proprietà
        dispatch(counterActions.increase(5)); 
        //metodo solo redux
        //dispatch({type: 'increase', amount: 5});
  }

  function toggleCounterHandler()
  {
        //metodo per redux toolkit
        dispatch(counterActions.toogleCounter());
        //metodo solo redux
        //dispatch({type: 'toogleCounter'});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toogle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

