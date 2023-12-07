import React, {Component} from "react";
import Profile from "./profile";
import Skills from "./profile/skills";
import MyProps from "./props";
import Bio from "./profile/bio";

class App extends Component {
    render(){
        return (
            <div className="App">
                <Profile />
                <Bio name='Test usr' title='test title' />


                <div style={{marginTop:'30px',marginBottom:'30px'}}>
                    <h3 style={{marginBottom:'20px'}}>List of Programmers</h3>
                    <p>Mr. X</p>
                    <Skills skillA='React' skillB='Angular' skillC='vue' />
                    <p>Mr. Y</p>
                    <Skills skillA='node' skillB='express' skillC='mongodb'/>

                    <MyProps name='shamim' />
                    <MyProps name='mim' />
                </div>
            </div>
        )
    }

}

export default App;
