import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  lazy,
  Suspense
} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

let customers1 = new Array(1000).fill({
  cost: Math.ceil(Math.random() * 200),
});

let ref={
    current:{
        name:""
    }
}

// const Child1=lazy(()=>import("./Child1"));

const Hooks = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("G'anisher");
  const counterRef = useRef({name:"alisher"});
  const timeOutId = useRef(null);
  const isMounted = useRef(false);
  const containerRef=useRef(null);

  

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





//   useLayoutEffect(() => {
//     console.log(containerRef.current?.clientWidth)
//   }, [containerRef.current]);


  

  return (
    <div ref={containerRef}>
      <p>
        counter : {counterRef.current.name}{" "}
        <button onClick={onIncrement}>click</button>{" "}
      </p>
      {name}
      <p>
        Total: <b>{totalCost}</b> so'm{" "}
      </p>
      <button onClick={onAddCustomer}>Add Customer</button>
      <Child1 name={name} onUpdateName={onUpdateName} />
      <Child2 lastName={lastName} onUpdateLastName={onUpdateLastName} />
    </div>
  );
};

export default Hooks;
