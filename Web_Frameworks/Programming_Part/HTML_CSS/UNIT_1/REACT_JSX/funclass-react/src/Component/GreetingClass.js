import React, {Component} from 'react';
class Greetings extends Component{
    render(){
        const{name}=this.props;
        return(
            <div>
                <h1> Hello ,{name} </h1>
                <p>Welcome To react with class components</p>
            </div>
        );
    }
}

export default Greetings;