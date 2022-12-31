const heading1 = React.createElement(
  "h1",
  {
    key: "heading1",
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h1",
  {
    key: "heading2",
  },
  "Heading 2"
);
const container = React.createElement("div", {}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
