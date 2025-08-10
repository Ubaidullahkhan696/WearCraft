import React from 'react'
import './NewCollections.css'
import newCollections from '../assets/new_collections'
import Item from '../item/Item'


const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='new-collection-items'>
        {
            newCollections.map((item)=>{
                return(
                    <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    old_price={item.old_price}
                    new_price={item.new_price}
                  />
                )
            })
        }
        </div>
    </div>
  )
}

export default NewCollections