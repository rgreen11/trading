import React from "react";
import axios from "axios";

class Signup extends React.Component {
  state = {
    text: "",
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
    const { text, email, password } = this.state;
    if (
      event.type === "submit" &&
      text !== "" &&
      email !== "" &&
      password !== ""
    ) {
      axios
        .get("http://localhost:3004/user/verify")
        .then(_ => {
          alert("Email exist");
        })
        .catch(_ => {
          axios
            .post("http://localhost:3004/user/newuser", {
              name: text,
              email: email,
              password: password
            })
            .then(data => {
              this.setState({ id: data.data.id });
            })
            .catch(_ => {
              alert("Email exist");
            });
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
