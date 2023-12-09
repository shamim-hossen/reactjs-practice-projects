import React from "react";

class State extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            lotOfProperties:{}
        } 
    }
    // count = 0;

    render(){
        return(
            <div>
                <h1>state property</h1>
                <p>count = {this.state.count} </p>

                <button onClick={()=> {
                    // this.count++;
                    this.setState((prev)=>{
                        return{
                            count: prev.count + 1
                        }
                    },()=>{
                        console.log('clicked',this.state.count);
                    } )
                    
                } }>add+1</button>
            </div>
        )
    }
}

export default State;