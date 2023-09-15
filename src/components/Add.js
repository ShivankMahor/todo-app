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

            <input className='addInput' type="text" name='value' placeholder='Add Task' value={itemData.value} onChange={handleChange} ></input>
            <input className='addButton' type="submit" value={'Add Item'} onClick={handleSubmit}></input>
            {/* <button class="button-66" role="button">Add Item</button> */}
        </form>
    )
}

export default Add;