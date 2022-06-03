import React, { useState, useRef, memo, useCallback } from "react";

const Button = memo(({ onSubmit }) => {
  return <button onClick={onSubmit}>Submit</button>;
});

const TestDemo = () => {
  const ref = useRef(null);
  const [text, setText] = useState("");

  const onSubmit = useCallback(() => {
    console.log(ref.current.value);
  }, []);

  return (
    <div style={{ marginTop: 50 }}>
      <h2>Test re-rendering</h2>
      <div>
        <input ref={ref} type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <Button onSubmit={onSubmit} />
    </div>
  );
};

export default TestDemo;
