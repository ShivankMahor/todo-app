import './ItemListing.css'

function ItemListing({dispatch,updateTotal,ListedItem, updateCompleted,id,completed,pinned}){

  function handleDblClick(e){
    console.log(e);
    console.log(pinned);
    // if(pinned){
    //   dispatch({type: 'UNPIN_ITEM', payload:id})
    // }else{
    //   dispatch({type: 'PIN_ITEM', payload:id});
    // }
  }

  function handleBcg(e){
    e.preventDefault();
    switch(e.target.value){
      case 'changeColor':
        if(completed){
          updateCompleted('-');
        }
        else{
          updateCompleted('+');
        }
        dispatch({type:'ToggleColor', payload:id});
        break;
      case 'up':
        dispatch({type:'up', payload:id});
        return;
      case 'down':
        dispatch({type:'down', payload:id});
        return;
      case 'close':
        dispatch({type:'DELETE', payload:id});
        if(completed){
          updateCompleted('-');
        }
        updateTotal();
        return;
      default:
        return;
    }
  }
  return (
    <div className='Listed-Item'>
      <button className={`ListedItem ${completed ?'color':''} ${pinned ? 'pinned':''}`} onClick={handleBcg} onDoubleClick={handleDblClick} value={'changeColor'}>{ListedItem}</button>
      <button className="up functionality" onClick={handleBcg} value={'up'}>UP</button>
      <button className="down functionality" onClick={handleBcg} value={'down'}>Down</button>
      <button className="close functionality" onClick={handleBcg} value={'close'}>X</button>
    </div>
  )
}

export default ItemListing;