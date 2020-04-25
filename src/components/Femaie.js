import React, { Component } from 'react'
import Cloth from './Cloth'
export default class Femaie extends Component {
    state = {
        arr:[
            {
                id:'NVZ1000001',
                title:'精品女装上衣',
                price:899
            },
            {
                id:'NVZ1000002',
                title:'精品女装裤装',
                price:399
            },
            {
                id:'NVZ1000003',
                title:'精品女装套装',
                price:1899
            }
        ]
    }
    del(i){
        console.log(i);
        let data = this.state.arr
        data.splice(i,1)
        this.setState(data)
    }
    render() {
        return (
            <div className='list'>
                <h1>精品女装</h1>
                <Cloth data={this.state.arr} del={(i)=>this.del(i)}></Cloth>
            </div>
        )
    }
}