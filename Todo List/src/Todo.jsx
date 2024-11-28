import React,{useState} from 'react';

function Todo(){
    const [task,setTask]=useState([]);
    const [ntask,setNtask]=useState("");

    function input(e){
        setNtask(e.target.value);
    }
    function addTask(){
        if(ntask.trim()!==""){
            setTask(t=>([...t,ntask]))  
            setNtask("")
        }

    }
    function removeTask(ind){
        const updatedTask=(task.filter((_,i)=> i!==ind));
        setTask(updatedTask);
    }
    function moveUp(ind){
        if(ind>0){
            const updatedTask=[...task];
            [updatedTask[ind],updatedTask[ind-1]]=
            [updatedTask[ind-1],updatedTask[ind]] //swapping to elements
            setTask(updatedTask);

        }
    }
    function moveDown(ind){
        if(ind<task.length-1){
            const updatedTask=[...task];
            [updatedTask[ind],updatedTask[ind+1]]=
            [updatedTask[ind+1],updatedTask[ind]] //swapping to elements
            setTask(updatedTask);

        }
    }

    return(
        <div className="w-screen h-screen bg-black">
            <div className="text-5xl font-extrabold flex align-middle justify-center text-white">TODO LIST</div>
            <div className=" flex align-middle justify-center m-10">
                <input type="text" onChange={input} value={ntask} placeholder="Enter a task..." className='w-4/12 p-2 rounded-lg h-8 flex items-center'/>
                <button onClick={addTask} className="bg-green-400 rounded-lg h-8 p-2 items-center flex">Add Task</button>
            </div>
            <div className=' w-8/12 h-4/6 bg-blue-100 mx-auto '>
                <ol className='mx-auto'>
                    {task.map((t,ind)=>
                    <li className='m-3 flex items-center justify-between' key={ind} >
                        {t} 
                        <div className='flex'>
                        <button className='text-white bg-red-600 rounded-lg p-1 m-1 ' onClick={()=>removeTask(ind)}>Delete</button>
                        <button className='bg-blue-400 rounded-lg p-1 m-1 ' onClick={()=>moveUp(ind)}>UP</button>
                        <button className='bg-purple-400 rounded-lg p-1 m-1 ' onClick={()=>moveDown(ind)}>DOWN</button>
                        </div>
                    </li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default Todo;