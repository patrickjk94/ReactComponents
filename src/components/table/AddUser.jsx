import React from "react"; 

// import "./NewUserForm.css";

export default class AddUser extends React.Component {

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

    updateFName(evt){ this.setState({ fname: evt.target.value }); }

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

    addUser(e) {
        var user = {
            fname: this.state.fname, 
            lname: this.state.lname, 
            age: this.state.age
        };
        this.props.addUser(user); 
    }

    render(){
        return (
            <div>
                <form className="add-user-form">
                    <div className="name-row"> 
                        <div className="first-name"> 
                            First Name: <input type="text" className="add-user-firstname" value={this.state.fname} onChange={evt => this.updateFName(evt)}/>
                        </div> 
                        <div className="last-name"> 
                            Last Name: <input type="text" className="add-user-lastname" value={this.state.lname} onChange={evt => this.updateLName(evt)}/> 
                        </div> 
                    </div> 
                    <br/> 
                    <button className="addUserButton" type="button" onClick={this.addUser}> Add User </button> 
                </form> 
            </div>
        ); 
    }
}

