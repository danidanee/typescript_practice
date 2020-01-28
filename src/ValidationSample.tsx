import React, { useState, useRef } from 'react';
import './ValidationSample.css';

function ValidationSample() {

    const [state, setState] = useState({
        password: '',
        clicked: false,
        validated: false
    });

    const { password, clicked, validated } = state;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    }

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        setState({
            ...state,
            clicked: true,
            validated: password === '0000'
        });
        inputRef.current?.focus();  //포커스 이동
    };

    return (
        <div>
            <input ref={inputRef} type="password" name="password" value={password} onChange={handleChange}
            className={clicked?(validated?'success':'failure'):''}></input>
            <button onClick={handleClick}>검증하기</button>
        </div>
    );

}
export default ValidationSample;



