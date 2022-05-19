import React, { Component } from 'react';
import Habit from '../components/habit'
import HabbitAddForm from './habitAddForm'

//🍎habits component : 
//🌳habit컴포넌트를 자식으로 가지고 있는 컴포넌트
//🌳state안에 habit컴포넌트가 출력할 모든 데이터가 저장되어 있기 때문에 이곳에서 event를 실행한다.
//⭐⭐리액트에서는 state를 직접적으로 수정하는 것은 좋지않다.!!!⭐⭐

class Habits extends Component {

    //이벤트함수
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