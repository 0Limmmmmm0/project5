import React from 'react';

const Title = () => {
    let txtStyle = {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2.6rem',
        marginTop: '5%'
    }
    let subStyle = {
        fontSize: '1.5rem',
        textAlign: 'center'
    }
    return (
        <>
            <h1 style={txtStyle}>NEW ITEM</h1>
            <p style={subStyle}>반복되는 일상이 지루할 때 분위기 전환!</p>
        </>
    )
}

export default Title