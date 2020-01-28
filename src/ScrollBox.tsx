import React, {useRef} from 'react';

function ScrollBox (){

    const boxRef = useRef(null) ;

    const style = {
        border: '1px solid black',
        height: '300px',
        width:'200px',
        overflow:'auto'
       // position:'relative',
    };

    const innerStyle = {
        width: '100%',
        height: '650px',
        background: 'linear-gradient(white, black)'
    };


    return(
        <div style={style} ref={boxRef}>
            <div style = {innerStyle}></div>
        </div>
    );
}

export default ScrollBox;