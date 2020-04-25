import React, { Component } from 'react'
export default class Cloth extends Component {
    dels(index){
        this.props.del(index)
    }
    state={
        list:['asdasd','1231313']
    }
    render() {
        let els = this.props.data.map((item,index) => {
            return (
                <li key={item.id}>
                    <p>名称：{item.title}</p>
                    <p>价格：{item.price}</p>
                    <button onClick={()=>this.dels(index)}>删除</button>
                </li>
            )
        })
        return (
            <ul>
                {els}
            </ul>
        )
    }
}