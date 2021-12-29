import { useState } from "react";
import "./App.css";
const Gender = ["Male", "Female", "Others"];
function RegisterForm() {
  const [values, setValues] = useState({
    name: "",
    Email: "",
    Gender: "",
    age: "",
    Phone: "",
    City: "",
    State: "",
    Country: "",
    Adhar: "",
    Adress: "",
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    let y = document.getElementById("adh").value;
    let x = document.getElementById("num").value;
    if (x.length !== 10) {
      alert("please enter valid  mobile number");
    }
    if (y.length !== 12) {
      alert("please enter valid  adhar number");
    }

    if (x.length == 10 && y.length == 12) {
      alert("Your registration was successfully submitted!");
      setValues({
        name: "",
        Email: "",
        Gender: "",
        age: "",
        Phone: "",
        City: "",
        State: "",
        Country: "",
        Adhar: "",
        Adress: " ",
      });
    }
  };

  return (
    <div id="main-registration-container">
      <div id="register">
        <h2>REGISTER THE FORM</h2>
        <hr></hr>
        <form onSubmit={onSubmit}>
          <label>Name*:</label>
          <input
            placeholder="Enter your name"
            required
            value={values.name}
            onChange={set("name")}
          />
          <label>Email*:</label>
          <input
            placeholder="Enter your Email"
            required
            type="email"
            value={values.Email}
            onChange={set("Email")}
          />
          <br></br>
          <label>Gender*:</label>
          <select
            required
            id="gen"
            value={values.color}
            onChange={set("Gender")}
          >
            <option value="">Select Gender</option>
            {Gender.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <br></br>
          <br></br>
          <br></br>
          <label>Age*:</label>
          <input
            required
            type="date"
            value={values.age}
            onChange={set("age")}
          />
          <label>Mobile no*:</label>
          <input
            placeholder="Enter your 10 digit mobile no"
            id="num"
            type="number"
            required
            value={values.Phone}
            onChange={set("Phone")}
          />

          <label>City*:</label>
          <input
            placeholder="Enter your City"
            required
            value={values.City}
            onChange={set("City")}
          />

          <label>State*:</label>
          <input
            placeholder="Enter your state"
            required
            value={values.State}
            onChange={set("State")}
          />

          <label>Country*:</label>
          <input
            placeholder="Enter your Country"
            required
            value={values.Country}
            onChange={set("Country")}
          />

          <label>Adhar no*:</label>
          <input
            placeholder="Enter your 12 digit Adhar number"
            type="number"
            id="adh"
            required
            value={values.Adhar}
            onChange={set("Adhar")}
          />

          <label>Adress:</label>
          <textarea
            placeholder="Enter adress"
            required
            id="ad"
            rows={3}
            value={values.habits}
            onChange={set("Adress")}
          />
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default RegisterForm;
