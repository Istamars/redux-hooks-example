import React from 'react';

class Component extends React.Component {
  state = { name: '', email: '', phone_number: '', address: '' };

  componentDidMount = () => {
    if (this.props.initialValue) {
      this.setState({
        name: this.props.initialValue.name,
        email: this.props.initialValue.email,
        phone_number: this.props.initialValue.phone_number,
        address: this.props.initialValue.address,
      });
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone_number, address } = this.state;
    this.props.onSubmit({ name, email, phone_number, address });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-wrapper">
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-3 col-form-label">
            Name
          </label>
          <div class="col-sm-9">
            <input
              name="name"
              type="text"
              className="form-control form-control-sm"
              id="name"
              autoComplete="off"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Email
          </label>
          <div class="col-sm-9">
            <input
              name="email"
              type="text"
              className="form-control form-control-sm"
              id="email"
              autoComplete="off"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone_number" className="col-sm-3 col-form-label">
            Phone Number
          </label>
          <div class="col-sm-9">
            <input
              name="phone_number"
              type="text"
              className="form-control form-control-sm"
              id="phone_number"
              autoComplete="off"
              onChange={this.handleInputChange}
              value={this.state.phone_number}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address" className="col-sm-3 col-form-label">
            Address
          </label>
          <div class="col-sm-9">
            <input
              name="address"
              type="text"
              className="form-control form-control-sm"
              id="address"
              autoComplete="off"
              onChange={this.handleInputChange}
              value={this.state.address}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-info btn-sm">
          Submit
        </button>
      </form>
    );
  }
}

export default Component;
