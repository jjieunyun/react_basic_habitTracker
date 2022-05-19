import React, { PureComponent } from 'react';

//🍎Habit컴포넌트 
//🌳habits 컴포넌트의 데이터를 props로 전달받아서 화면에 출력하기만 하는 컴포넌트이다.

//🍎State안의 데이터 사용
//⭐state 오브젝트안에 있는 count를 증가한 뒤 state를 업데이트 해야함.
/*⭐this.state.count++; 를 하면 안되는 이유? 
    🌳리액트는 setState 함수를 사용하지 않으면 데이터 업데이트 유무를 알 수없기 때문이다!
    🌳부분적인 데이터를 업데이트 할 수없고 state전체를 업데이트 해주어야한다.-> 변경됐네? ->render함수호출*/
//🌳삼항연산자를 이용해서 count가 0일때 (true) 0이 되는것을 제어할 수있다.
class Habit extends PureComponent {
    //🍎 componentDidMount: 컴포넌트가 ui상에 등록 되었을때 호출(ex.로딩스피너)
    componentDidMount() {
        console.log(`habit : ${this.props.habit.name} mounted`)
    }
    //🍎 componentWillUnmount: 지우기 전에 호출됨 ()
    componentWillUnmount() {
        console.log(`habit : ${this.props.habit.name} will unmount`)
    }

    

    handleInlreament = ()=> {
        this.props.onIncrement(this.props.habit);
    }

    handleDereament = ()=> {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = ()=> {
        this.props.onDelete(this.props.habit);
    }

    render() {
        console.log('habit')
        //⭐props를 통해서 외부데이터를 받아온다. 여러개일경우 {...} 안에 변수로 넣어서 사용한다.
        //⭐this.props.habit로 데이터를 받아와서 직접 업데이트하면 같은 오브젝트라고 간주 -> 렌더링X
        const { name, count } = this.props.habit;

        return (
        <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleInlreament}>
                <i className="fa-solid fa-square-plus"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDereament}>
                <i className="fa-solid fa-square-minus"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </li>
        );
    }
}

export default Habit;