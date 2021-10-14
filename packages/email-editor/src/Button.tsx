import React from "react";
const Button: React.FC = ({ children }) => {
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      label: {children} {count}
    </button>
  );
};

export { Button };
