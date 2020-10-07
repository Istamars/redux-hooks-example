import React from 'react';

class Component extends React.Component {
  componentDidMount = () => {
    if (this.props.initialValue) {
      this.setState({
        title: this.props.initialValue.title,
        description: this.props.initialValue.description,
      });
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    this.props.onSubmit({ title, description });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            autoComplete="off"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="description"
            autoComplete="off"
            onChange={this.handleInputChange}
            value={this.state.description}
          />
        </div>
        <button type="submit" className="btn btn-info btn-sm">
          Submit
        </button>
      </form>
    );
  }
}

export default Component;
