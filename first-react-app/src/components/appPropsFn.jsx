import React  from "react";

class Child extends React.Component{
    render(){
        this.props.func(this)
        return <h1>i am child</h1>
    }
}




class AppPassFn extends React.Component{
    getContex(contex){
        console.log(contex);
    }

    render(){
        this.getContex(this);
        return (
            <div className="App">
                <h1>pass funcion as props</h1>
                <Child func={this.getContex} />
            </div>
        )
    }
}

export default AppPassFn;