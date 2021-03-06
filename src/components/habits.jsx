import React, { Component } from 'react';
import Habit from '../components/habit'
import HabbitAddForm from './habitAddForm'

//๐habits component : 
//๐ณhabit์ปดํฌ๋ํธ๋ฅผ ์์์ผ๋ก ๊ฐ์ง๊ณ  ์๋ ์ปดํฌ๋ํธ
//๐ณstate์์ habit์ปดํฌ๋ํธ๊ฐ ์ถ๋ ฅํ  ๋ชจ๋  ๋ฐ์ดํฐ๊ฐ ์ ์ฅ๋์ด ์๊ธฐ ๋๋ฌธ์ ์ด๊ณณ์์ event๋ฅผ ์คํํ๋ค.
//โญโญ๋ฆฌ์กํธ์์๋ state๋ฅผ ์ง์ ์ ์ผ๋ก ์์ ํ๋ ๊ฒ์ ์ข์ง์๋ค.!!!โญโญ

class Habits extends Component {

    //์ด๋ฒคํธํจ์
    handleInlreament = (habit)=> {
        this.props.onIncrement(habit);
    };

    handleDereament = (habit)=> {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit)=> {
        this.props.onDelete(habit);
    };

    handleAdd = name => {
        this.props.onAdd(name);
    }
    
    render() {
        console.log('habits');
        return <>
        <HabbitAddForm onAdd={this.handleAdd}/>
        <ul>
            {this.props.habits.map(habit => (
                    <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.handleInlreament}
                        onDecrement={this.handleDereament}
                        onDelete={this.handleDelete}
                    ></Habit>
            ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
        </>
    }
}

export default Habits;