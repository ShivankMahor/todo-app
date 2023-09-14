import './App.css';
import Add from './components/Add'
import ItemsDB from './data/items'
import { useReducer,useState } from 'react';
import ItemCounter from './components/Itemcounter';
import ItemListing from './components/ItemListing';
function App() {

  const [completed, setCompleted] = useState(0); 
  const [total, setTotal] = useState(ItemsDB.length);
  function handleClick(){
    console.log(...Items);
  }
  const [Items,dispatch] = useReducer(ItemsReducer,ItemsDB);
  // console.log(Items,'Items')
  function updateCompleted(e){
    switch(e){  
      case '+': 
        setCompleted(completed+1);
        break;
      case '-':
        setCompleted(completed-1);
        break;
      default:
        setCompleted(completed);
    }
  }
  function updateTotal(e){
    setTotal(total - 1);
  }
  function ItemsReducer(Items,action){
    switch(action.type){
      case 'ADD': 
        setTotal(total+1);
        return [
          ...Items,{...action.payload, id:Items.length}
        ]
      case 'DELETE':
        return Items.filter(item => item.id !== action.payload);
      case 'up':  
        if(action.payload === 0){
          return Items;
        }
        var newItems = [...Items];
        var currelem = {...newItems[action.payload]};
        var prevelem = {...newItems[action.payload-1]};
        currelem.id -=1;
        prevelem.id +=1;
        newItems.splice(action.payload-1,2,currelem, prevelem)

        return newItems;
      case 'down': 
      console.log(Items.length,action.payload) 
        if(action.payload === Items.length-1 || (action.payload === 0 && Items.length === 1)){
          return Items;
        }
        var newItems = [...Items];
        var currelem = {...newItems[action.payload]};
        var prevelem = {...newItems[(action.payload)+1]};
        currelem.id +=1;
        prevelem.id -=1;
        newItems.splice((action.payload),2,prevelem, currelem);
        return newItems;

      case 'ToggleColor':
        const updated = Items.map(item =>{
          if(item.id === action.payload){
            return {...item,completed: !(item.completed)}
          }
          else{
            return item;
          }
        });
        return updated;
      case 'PIN_ITEM':
        let i=1;
        const newDB = Items.map(item => {
          if(item.id !== action.payload){
            console.log(item.id,'id before');
            item.id = i++;
            console.log(item.id,'id after');
            return {...item};
          }
          else{
            item.id = 0;
            item.pinned = !item.pinned
            return {...item};
          }
        });
        console.log(newDB,'This is new DBs');
        const sortedArray = newDB.sort((a, b) => a.id - b.id);
        console.log(sortedArray,'This is new sorted');
        return sortedArray;
      case 'UNPIN_ITEM':
        
      default :
        return Items;
    }
  }   
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <Add dispatch={dispatch}></Add>
      <ItemCounter completed={completed}  total={total}></ItemCounter>
      {Items.map(item=> <ItemListing dispatch={dispatch} pinned={item.pinned} completed={item.completed} updateCompleted={updateCompleted} updateTotal={updateTotal} ListedItem={item.value} key={item.id} id={item.id}></ItemListing>
      )}
      {/* <button onClick={handleClick}>Print Info</button> */}
    </div>
  );
}

export default App;
