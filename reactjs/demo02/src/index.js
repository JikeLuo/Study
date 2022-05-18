import React from "react";
import ReactDOM from "react-dom"

const n1 = 'who am i?';
const n2 = <p>i am legendary</p>


const title = (
    <h1>hello react JSX
        <p>{1 + 1}</p>
        <p>{6 > 5 ? '沒錯' : '錯誤!!!'}</p>
        <p>{n1}</p>
        <p>{n2}</p>
        <span />
    </h1>
)

ReactDOM.render(title, document.getElementById('root'))