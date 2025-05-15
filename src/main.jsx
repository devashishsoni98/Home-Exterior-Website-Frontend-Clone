import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import InstantQuoteButton from "./components/Home/InstantQuoteButton"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <InstantQuoteButton />
  </React.StrictMode>,
)
