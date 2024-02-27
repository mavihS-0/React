import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const myData = [
  {
    name: "mav",
    desc: "namaste",
    age: 10,
  },
  {
    name: "apopopipi",
    desc: ":p",
    age: 5,
  },
];

function App() {
  return (
    <div>
      <Header head="MAv" />
      {myData.map((current) => (
        <Main dataObject={current} />
      ))}
      <Footer />
    </div>
  );
}

function Header(props) {
  return <header className="header">{props.head}</header>;
}
const Main = ({ dataObject }) => {
  return (
    <div className="main">
      <h1>{dataObject.name}</h1>
      <h2>{dataObject.desc}</h2>
      <h2>{dataObject.age + 5}</h2>
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHours = 3;
  const closeHours = 21;
  const isEvening = hour >= openHours && hour <= closeHours;
  return (
    <footer className={`footer ${isEvening ? "evening" : "noteve"}`}>
      <MyFooter isEvening={isEvening} />
    </footer>
  );
};

const MyFooter = (props) => {
  return (
    <div>
      <h3 className="footer">
        {props.isEvening ? "Good Evening," : "Namaste,"} i am shivam
      </h3>
      <button>Click Me</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
