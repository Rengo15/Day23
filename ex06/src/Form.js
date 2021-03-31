import React, {Component} from 'react';

class Form extends Component{
    initalState={
        firstName:"",
        lastName:"",
    };
    state = this.initalState;
    hadleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initalState);
    }
    render() {
        const {firstName, lastName} =this.state;
        return (
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" value={firstName} onChange={this.hadleChange} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" value={lastName} onChange={this.hadleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;