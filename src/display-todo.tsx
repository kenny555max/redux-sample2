import { useState } from "react";
import Todo from "./todo";

function DisplayTodo(){
    const [data, setData] = useState([]);

    return(
        <div>
            <h1 style={{ color: 'yellow', marginTop: '50px', textAlign: 'center' }}>Display Todo</h1>
            <Todo data={data} />
            map
        </div>
    );
}

export default DisplayTodo;