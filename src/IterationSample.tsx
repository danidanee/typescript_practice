import React, {useState} from 'react';

function IterationSample() {

    const [names, setNames] = useState([
        {id: 1, text: '눈사람'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(2);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const onClick = () => {
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = (id:number):void => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)
    return(
        <>
            <input value={inputText} onChange={onChange}></input>
            <ul>{nameList}</ul>
            <button onClick={onClick}>추가</button>
        </>
    );
}

export default IterationSample;