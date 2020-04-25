import React, { Component } from 'react'
export default class myEvent extends Component {
    render() {
        return (
            <div>
                <button onClick={this.handler1}>ES5语法</button>
                <input type="text" onChange={this.handler2.bind(this)}/>
            </div>
        )
    }
    handler1(){
        console.log(1111);
        
    }
    handler2(e){
        console.log(e.target.value);
        
    }
}