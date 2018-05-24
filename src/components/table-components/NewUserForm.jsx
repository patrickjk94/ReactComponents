import React from "react"; 
// import "./NewUserForm.css";

class NewUserForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fname: '', 
            lname: '', 
            age: ''
        };

        this.updateFName = this.updateFName.bind(this); 
        this.updateLName = this.updateLName.bind(this); 
        this.updateAge   = this.updateAge.bind(this); 
        this.addUser = this.addUser.bind(this); 
    }

    updateFName(evt){
        this.setState({
            fname: evt.target.value
        }); 
    }

    updateLName(evt){
        this.setState({
            lname: evt.target.value
        }); 
    }

    updateAge(evt){
        this.setState({
            age: evt.target.value
        }); 
    }

    addUser(e){
        this.props.submitform(e, this.state.fname, this.state.lname, this.state.age); 
        this.setState({
            fname: '', 
            lname: '', 
            age: ''
        })
    }

    render(){
        return (
            <div>
                <form className="add-user-form">
                    First Name: <input type="text" className="add-user-firstname" value={this.state.fname} onChange={evt => this.updateFName(evt)}/>
                    <br/> 
                    Last Name: <input type="text" className="add-user-lastname" value={this.state.lname} onChange={evt => this.updateLName(evt)}/> 
                    <br/> 
                    Age: <input type="text" className="add-user-age" value={this.state.age} onChange={evt => this.updateAge(evt)}/> 
                    <br/> 
                    <br/> 
                    <button className="addUserButton" type="button" onClick={this.addUser}> Add User </button>  
                </form> 
            </div>
        ); 
    }
}

export default NewUserForm; 