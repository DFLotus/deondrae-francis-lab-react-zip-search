import { React, useState } from "react";
import "./App.css";

const City = (props) => {
  return (
    <div>
      <h2>No results found</h2>
    </div>
  );
}

const ZipSearchField = (props) => {
  const [zipcode, setZipCode] = useState("")

  const userZip = (zip) => {
    setZipCode(zip.target.value);
  }

  console.log(props.enteredzipcode)
  return (
    <div>
      <div className="field-text">
        <p>Zip Code:</p>
      </div>
      <div className="search-field">
        <form>
          <input value={zipcode} onChange={userZip} maxLength={5}></input>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Zip Code Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        <ZipSearchField />
        <div>
          <City />
        </div>
      </div>
    </div>
  );
}

export default App;
