import React from 'react'

export default function DisplayListOfItems(props) {
    const listOfItems = props.TodoItem
    const newList = listOfItems.map(currItem => {
        return (
            <div className='flex' key={currItem.key}>
                <input type="text" className='input' id={currItem.key} value={currItem.Description}
                    onChange={(e)=>{
                        props.handleUpdate(e.target.value, currItem.key)
                    }} />
                <button className='button' id={currItem.key} onClick={()=>{props.handleDelete(currItem.key)}}>Delete Item</button>
            </div>
        )
    })
return(
    <div>
        {newList}
    </div>
)
}