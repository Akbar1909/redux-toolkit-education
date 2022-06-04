import Counter from "Pages/Counter";
import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  lazy,
  Suspense,
  useReducer,
  createContext,
} from "react";
// import Child1 from "./Child1";
import Child2 from "./Child2";

let customers1 = new Array(1000).fill({
  cost: Math.ceil(Math.random() * 200),
});

const Child1 = lazy(() => import("./Child1"));

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "REMOVE":
      return;
    case "ADD":
    case "EDIT":

    default:
      return state;
  }
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state++;
    case "DECREMENT":
      return --state;
  }
};

export const CounterContext = createContext({
  counter: 0,
});

const Hooks = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [lastName, setLastName] = useState("G'anisher");
  const counterRef = useRef({ name: "alisher" });
  const timeOutId = useRef(null);
  const isMounted = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!timeOutId.current) {
      timeOutId.current = setTimeout(() => {}, 100);
    }

    return () => clearTimeout(timeOutId);
  }, [name]);

  const [customers, setCustomers] = useState(customers1);

  const totalCost = useMemo(() => {
    return customers.reduce((acc, cur) => {
      return (acc += cur.cost);
    }, 0);
  }, [customers]);

  const onAddCustomer = () => {
    setCustomers((prevV) => [...prevV, { cost: 12000 }]);
  };

  const onUpdateName = () => {
    setName(Math.random());
  };
  const onUpdateLastName = useCallback(() => {
    setLastName(name);
  }, []);

  useEffect(() => {
    return () => {};
  }, []);

  const data = useMemo(() => {}, []);

  useLayoutEffect(() => {}, []);

  const onIncrement = () => {
    counterRef.current++;
  };

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  //   useLayoutEffect(() => {
  //     console.log(containerRef.current?.clientWidth)
  //   }, [containerRef.current]);

  return (
    <div ref={containerRef}>
      <pre>{JSON.stringify(todos)}</pre>

      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}

      <hr />

      <p>
        counter : {counterRef.current.name}{" "}
        <button onClick={onIncrement}>click</button>{" "}
      </p>
      {name}
      <p>
        Total: <b>{totalCost}</b> so'm{" "}
      </p>
      <button onClick={onAddCustomer}>Add Customer</button>
      <button onClick={() => setVisible(!visible)}>Show Child1</button>

      <CounterContext.Provider value={{
        dispatch:counterDispatch,
        value:counter,
        lastName
      }}>
        <Child2  onUpdateLastName={onUpdateLastName} />
      </CounterContext.Provider>

      {visible && (
        <Suspense fallback={<div>loading...</div>}>
          {" "}
          <Child1 name={name} onUpdateName={onUpdateName} />{" "}
        </Suspense>
      )}
    </div>
  );
};

export default Hooks;
