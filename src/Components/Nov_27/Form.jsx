/* eslint-disable no-constant-condition */
import { useState } from "react";

export default function Form() {
  const [users, setUsers] = useState([]);
  const formSubmitHandelar = (event) => {
    event.preventDefault();
    const inputValue = {}
    const elements = [...event.target.elements]
    elements.forEach(element =>{
    (element.name === '') || (inputValue[element.name] = element.value)
    setUsers([...users, inputValue])
  })
  }
  console.log(users)

  return (
    <>
      <div>
        <form onSubmit={formSubmitHandelar} action="">
          <label htmlFor="">
            Type your name:
            <input type="text" name="name" />
          </label>
          <br />

          <label htmlFor="">
            Your Phone:
            <input type="number" name="phone" />
          </label>
          <br />

          <label htmlFor="">
            Email:
            <input type="email" name="email" /> <br />
          </label>
          <br />

          <label htmlFor="">
            Password:
            <input type="password" name="password" />
          </label>
          <br />

          <label htmlFor="">
            Date:
            <input type="date" name="date" /> <br />
          </label>

          <label>Gender:</label> <br />
          <input type="radio"/>
          <label>Male</label> <br />

          <input type="radio"/>
          <label>Female</label> <br />
          <button>Submit</button>
        </form>

        <div>
          {users.map((user) => (
            <>
              <h3>Name: {user.name}</h3>
              <p>Phone: {user.phone}</p>
              <p>Email: {user.email}</p>
              <p>Password: {user.password}</p>
              <p>Data: {user.date}</p>
              {/* <p>Gender: {user.male}</p> */}
            </>
          ))}
        </div>
      </div>
    </>
  );
}





// const formSubmitHandelar = (e) => {
//   e.preventDefault();
//   const inputValue = {};
//   const elements = [...e.target.elements];
//   elements.forEach((element) => {
//     element.name !== "" && (inputValue[element.name] = element.value);
//     setUsers([...users, inputValue]);
//   });
// }; 

/* 
<h2>Contact Information</h2>

  <form action="/submit" method="post">

    <!-- Text Input -->
    <label for="full-name">Full Name:</label>
    <input type="text" id="full-name" name="full-name" required>

    <br>

    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <br>

    <!-- Password Input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <br>

    <!-- Radio Buttons -->
    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>

    <br>

    <!-- Checkbox -->
    <input type="checkbox" id="subscribe" name="subscribe" value="subscribe">
    <label for="subscribe">Subscribe to newsletter</label>

    <br>

    <!-- Dropdown/Select -->
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="usa">USA</option>
      <option value="canada">Canada</option>
      <option value="uk">UK</option>
    </select>

    <br>

    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>

    <br>

    <!-- Submit Button -->
    <input type="submit" value="Submit">

  </form>
*/
