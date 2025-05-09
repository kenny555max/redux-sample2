import { useState } from "react";
import Todo from "./todo";
import { useSelector } from "react-redux";

function DisplayTodo(){
    const [data, setData] = useState([]);
    const todos = useSelector(function(store){
        console.log(store);
    });

    return(
        <div>
            <h1 style={{ color: 'yellow', marginTop: '50px', textAlign: 'center' }}>Display Todo</h1>
            <Todo data={data} />
            map
        </div>
    );
}

export default DisplayTodo;