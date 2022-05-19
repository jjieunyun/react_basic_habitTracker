
import React, { PureComponent } from 'react';
import './app.css';
import Habits from './components/habits'
import Navbar from './components/navbar';


//🍎jsx는 자바스크립트의 로직을 구현한다
//🌳{...}을 이용해서 비즈니스 로직을 화면에 출력해줄 수있다.

class App extends PureComponent {
  state = {
    habits : [
        { id : 1, name : 'Reading', count : 0},
        { id : 2, name : 'Running', count : 0},
        { id : 3, name : 'coding', count : 0},
        { id : 4, name : 'working', count : 0},
    ],
};
    //이벤트함수
    handleInlreament = (habit)=> {

      const habits = this.state.habits.map(item => {
        //🌳id가 같다면 변경된 count를 가지는 새로운 object를 만든다
        if(item.id === habit.id) {
          return {...habit, count: habit.count +1};
        }  
        return item;
      })
      //⭐key는 habits이고 value는 로컬변수의 habits임! -> 동일하다면 하나로 생략가능함
      this.setState({habits : habits})
  }

  handleDereament = (habit)=> {
      const habits = this.state.habits.map( item => {
        if(item.id === habit.id) {
          const count = habit.count -1;
          return {...habit, count : count < 0? 0 : count}
        }
        return item;
      })
      this.setState({ habits })
  }

  handleDelete = (habit)=> {
      //console.log(`${habit.id}`)
      const paramId = habit.id;
      //🌳엘리쌤 답안
      const habits = this.state.habits.filter(item => item.id !== paramId)
      this.setState({habits})
      //const index = this.state.habits.findIndex(habit => habit.id === paramId);
      //this.state.habits.splice(index,1);
      //this.setState({
         // habits : this.state.habits
      //})
  }

  handleAdd = (name)=> {
    const habits = [...this.state.habits, {id : Date.now(), name, count : 0}];
    this.setState({habits});
  }
  
  handleReset = ()=> {
    const habits = this.state.habits.map(habit => {
      if(habit.count !==0) {
        return {...habit, count : 0};
      }
      return habit;
    });
    this.setState({ habits });
  }

  render() {
    console.log('app')
    return (
      <>
        <Navbar 
          totalCount={this.state.habits.filter(item=> item.count >0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleInlreament}
          onDecrement={this.handleDereament}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
