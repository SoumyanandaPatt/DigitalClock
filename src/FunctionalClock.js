import React,{Component} from 'react';
//to return the JSX inside a class component we use render() function.
class FunctionalClock extends Component{

    constructor(props){
            super(props);

            this.state = {
                Time: this.getTimeString(new Date())
            };
            setInterval(()=>{
                    this.setState({
                        Time:this.getTimeString(new Date())
                    })
            },1000);
    }
    getTimeString(Time){
        return `
        ${Time.getHours()}:
        ${Time.getMinutes()}:
        ${Time.getSeconds()}`;
    }
//Template String : in JS where we need to mix JS with 'string' 
    render(){
        return(
            <div>{this.state.Time}</div>
        )

    }
        

}
export default FunctionalClock;