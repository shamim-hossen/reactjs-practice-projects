import React from "react";


class Child extends React.Component{
    render(){
        this.props.func(this)
        return <h1>I am child</h1>
    }
}

const ChildComponent = (props)=>(
    <div>
        <h3>I am child Component</h3>
        <p>I don't know what to do</p>
        {props.children}
    </div>
)




class AppPropsChildren extends React.Component{
    getContex(contex){
        console.log(contex);
    }

    render(){
        return(
            <div className="App">
                <h1>Pass fuction as props</h1>

                <ChildComponent>
                    <h2>I am from parent</h2>
                    <h4>I am child of child</h4>
                </ChildComponent>
            </div>
        )
    }
}
export default AppPropsChildren;