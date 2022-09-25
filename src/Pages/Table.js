import { async } from '@firebase/util';
import { doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import itemDataService from "../services/Orders"
import cross from "../Images/times-solid.svg"

const Table = () => {

    const [item, setItem]=useState("");
    const [message, setMessage]=useState("");

    const handleSubmit = async (e)=>{
      e.preventDefault(); 

      const newItem= {
        item
      }
      console.log(item);

      try{
        await itemDataService.addItems(newItem);
        setMessage({error: false, msg: "Item added successfully"});
      }
      catch(err){
        setMessage({error: true, msg: err.message});
      }
      setItem("");
    }

    const [items, setItems]=useState([]);

    useEffect(()=>{
      getItems();
    },[])

    const getItems=async()=>{
      const data= await itemDataService.getAllItems();
      console.log(data.docs);
      setItems(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
      getItems();
    }

    const handleDelete=async(id)=>{
      await itemDataService.deleteItem(id);
      getItems();
    }


    return (
        <div className="flex justify-center mt-14">
  <table className="table  w-1/2">
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
    {items.map((doc,index)=>{
        return(
      <tr key={doc.id}>
        <th className=' bg-slate-400'>{doc.item}</th>
        <td> <button onClick={(e)=>handleDelete(doc.id)} type=""><img src={cross} alt="" className=' w-3'/></button> </td>
      </tr>
        )
      })}
      <tr>
        <td><input 
        className='input input-bordered input-ghost w-full max-w-xs'
        type="text" 
        placeholder='Item name'
        name="item" 
        value={item}
        onChange={(e)=>setItem(e.target.value)}
        />
        <button onClick={handleSubmit} className='btn btn-sm m-4 '>Add Item</button></td>
        <tr>
      </tr>
      </tr>
      
    </tbody>
  </table>
</div>
    );
};

export default Table;