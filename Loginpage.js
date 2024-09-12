import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      errors: {}
    };
  }

  // Basic email validation regex
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation function
  validate = () => {
    const { name, email } = this.state;
    let tempErrors = {};
    let isValid = true;

    // Validate name
    if (name.trim().length === 0) {
      tempErrors["name"] = "Name is required";
      isValid = false;
    }

    // Validate email
    if (email.trim().length === 0) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!this.emailRegex.test(email)) {
      tempErrors["email"] = "Invalid email format";
      isValid = false;
    }

    this.setState({ errors: tempErrors });
    return isValid;
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validate()) {
      alert(`Login Successful!\nName: ${this.state.name}\nEmail: ${this.state.email}`);
      this.props.onLoginSuccess(); // Call the parent callback to indicate login success
    }
  };

  // Handle input changes
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, errors } = this.state;

    return (
      <div className="custom-login-container">
        <h2 className="custom-heading">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="custom-input-field">
            <label htmlFor="name" className="custom-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              className="custom-input"
            />
            {errors.name && <p className="custom-error">{errors.name}</p>}
          </div>

          <div className="custom-input-field">
            <label htmlFor="email" className="custom-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              className="custom-input"
            />
            {errors.email && <p className="custom-error">{errors.email}</p>}
          </div>

          <button type="submit" className="custom-button">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
