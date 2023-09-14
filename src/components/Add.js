import './Add.css'
import { useState } from 'react';

const initialState = {
    value: '',
    done: false,
}

function Add({dispatch}){
    const [itemData, setItemdata] = useState(initialState)
    function handleSubmit(e){
        e.preventDefault();
        
        dispatch({type:'ADD', payload:itemData});
        setItemdata(initialState);

    }
    function handleChange(e){
        setItemdata({...itemData, [e.target.name]:e.target.value});
    }
    return (
        <form>
            <input type="text" name='value' placeholder='Add Task' value={itemData.value} onChange={handleChange} ></input>
            <input type="submit" value={'Add Item'} onClick={handleSubmit}></input>
        </form>
    )
}

export default Add;