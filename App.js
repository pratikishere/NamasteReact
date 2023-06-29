import React from "react";
import ReactDOM from "react-dom/client";

// React element
const heading = <h1 key="heading">Heading using JSX</h1>;

const HeadingComponent = () => {
  return (
    <div>
      {heading}
      <h1>Namste React functional component</h1>
      <HeadingComponentShort />
      {HeadingComponentShort()}
    </div>
  );
};

const HeadingComponentShort = () => (
  <div>
    <h1>Short functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
