import React, {memo} from 'react';

//⭐⭐memo : funtuin컴포넌트에서 사용하는 것 ; class의 pure component와 동일한 기능을 함
//🌳state가 따로없다면 function형 컴포넌트를 사용할수있다.

const HabitAddForm = memo(props => {
    const formRef= React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //this.inputRef.current.value = '';
        formRef.current.reset();
    };

    console.log('habitAddForm')
    return (
        <>
            <form ref={formRef} className="add-form" onSubmit={onSubmit}>
                <input 
                    ref={inputRef}
                    className="add-input" 
                    type="text" 
                    placeholder='add your Habbit'
                />
                <button className="add-button">Add</button>
            </form>
        </>
    );
});

export default HabitAddForm;



