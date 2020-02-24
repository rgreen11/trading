import React from "react";
import axios from "axios";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    id: null
  };

  handleChange = e => {
    let userText = e.target.value;
    let type = e.target.type;
    this.setState({ [type]: userText });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    if (event.type === "submit" && email !== "" && password !== "") {
      axios
        .get(
          `http://localhost:3004/user/login?email=${email}&password=${password}`
        )
        .then(data => {
          console.log(data.data.data.id);
          this.setState({ id: data.data.data.id });
        })
        .catch(e => {
          alert("email or password is incorrect");
        });
    }
  };
  render() {
    return (
      <div className="signup_login">
        <form className="form" onSubmit={this.handleSubmit}>
          <h3>Sign in</h3>
          <input type="email" onChange={this.handleChange} />
          <input type="password" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
