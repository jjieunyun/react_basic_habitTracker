import React, { useEffect, useRef, useState } from 'react';
/*🍎React Hook
    🌳함수형 컴포넌트에서 state와 라이프사이클을 이용할 수있게 하는 것이다.
    🌳최신 버전에서 추가되었다.
    🌳클래스는 리액트가 만들어질 때 딱! 한번만 생성된다(멤버변수)
        => props가 업데이트 되거나 state가 바뀔때 render함수만 반복해서 호출된다
    🌳함수형은 props나 state가 변경이되면 함수 내용 전체가 호출되어 무한정 반복된다
        (새롭게만들고 새롭게 비즈니스로직이 수행)
    ⭐리액트 훅에서 state를 쓸려면 ! useState라는 API를 이용하면 된다.
    ❓데이터가 계속 초기화 되어야하는 것이아닌가요? 
    ⭐useState는 리액트Hook에서 제공하는 api중의 하나로 UseState를 사용하면 리액트가 자동으로 기억해서 메모리에 저장
        (호출할때마다 동일한 값을 받아옴)
*/


const SimpleHabit = (props) => {
    //⭐useState()
    //state사용 : [가져올데이터, set가져올데이터이름] = useState(초기값)
    //🌳[...]안 내용 => 실제로 가져올 'data'와 '데이터를 사용할 수있는 함수'!
    const [count, setCount] = useState(0);
    //⭐useRef() 
    //const spanRef = React.createRef();  => 호출될때마다 매번 새로운 것이 만들어져서 비효율적! ⭐useRef()사용
    const spanRef = useRef() //⭐한번만 만들고 메모리에 만들어놓고 저장해놓는다!

    //⭐useCallback() : 리액트가 자동으로 캐시되어서 동일한 콜백함수를 호출한다.
    //두번째 인자를 설정하지 않으면, state나 props가 변경될때마다 호출
    const handleIncrement = () => {
        setCount(count +1)
    };

    //⭐useEffect() : mount & update될 때마다 호출.(두번째인자로 count가 변경될때에만 호출되도록 설정)
    useEffect(()=>{
        console.log(`mounted & update : ${count}`)
    },[count])

    return (
        <li className='habit'>
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fa-solid fa-square-plus"></i>
            </button>
        </li>
    );
    };

export default SimpleHabit;