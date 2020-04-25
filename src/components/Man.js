import React, { Component } from 'react'
import Colth from './Cloth'
export default class Man extends Component {
    state = {
        arr: [
            {
                id: 'NZ1000001',
                title: '精品男装上衣',
                price: 599
            },
            {
                id: 'NZ1000002',
                title: '精品男装裤装',
                price: 199
            },
            {
                id: 'NZ1000003',
                title: '精品男装套装',
                price: 1799
            }
        ]
    }

    del(i){
        // console.log(i);
        let data = this.state.arr
        data.splice(i,1)
        this.setState(data)
        // console.log(this);
        
    }
    setData(){
        console.log(111);
        
        console.log(this);
    }
    render() {
        return (
            <div className='list'>
                <h1>精品男装</h1>
                <Colth ref='mycolth' data={this.state.arr} del={(i)=>this.del(i)}></Colth>
                <button onClick={()=>this.setData()}>获取Ref</button>
            </div>
        )
    }
}