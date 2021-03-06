
import React, { PureComponent } from 'react';
import './app.css';
import Habits from './components/habits'
import Navbar from './components/navbar';


//๐jsx๋ ์๋ฐ์คํฌ๋ฆฝํธ์ ๋ก์ง์ ๊ตฌํํ๋ค
//๐ณ{...}์ ์ด์ฉํด์ ๋น์ฆ๋์ค ๋ก์ง์ ํ๋ฉด์ ์ถ๋ ฅํด์ค ์์๋ค.

class App extends PureComponent {
  state = {
    habits : [
        { id : 1, name : 'Reading', count : 0},
        { id : 2, name : 'Running', count : 0},
        { id : 3, name : 'coding', count : 0},
        { id : 4, name : 'working', count : 0},
    ],
};
    //์ด๋ฒคํธํจ์
    handleInlreament = (habit)=> {

      const habits = this.state.habits.map(item => {
        //๐ณid๊ฐ ๊ฐ๋ค๋ฉด ๋ณ๊ฒฝ๋ count๋ฅผ ๊ฐ์ง๋ ์๋ก์ด object๋ฅผ ๋ง๋ ๋ค
        if(item.id === habit.id) {
          return {...habit, count: habit.count +1};
        }  
        return item;
      })
      //โญkey๋ habits์ด๊ณ  value๋ ๋ก์ปฌ๋ณ์์ habits์! -> ๋์ผํ๋ค๋ฉด ํ๋๋ก ์๋ต๊ฐ๋ฅํจ
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
      //๐ณ์๋ฆฌ์ค ๋ต์
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
