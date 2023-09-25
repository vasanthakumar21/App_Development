import React, {useState} from 'react';
import EditTask from '../models/EditTask'
import './Todo.css';
const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
// "background-color": colors[index%5].secondaryColor
    return (
        <div class = "card-wrapper mr-3"style={{"margin-left":"140px"}}>
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
            <p class = "card-header" style={{ "border-radius": "10px","background-color": colors[index%5].secondaryColor}}>{taskObj.projectname}</p>
               <div className='task-des'>
               <p class = "card-assign" style={{ "border-radius": "10px","background-color": colors[index%5].primaryColor}}>To: {taskObj.assignedto}</p>
               <p className = "mt-3">{taskObj.description}</p>
               </div><br></br><br></br>
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>{' '}
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;






























// import React, {useState} from 'react';
// import EditTask from '../models/EditTask'
// import './Todo.css';
// const Card = ({taskObj, index, deleteTask, updateListArray}) => {
//     const [modal, setModal] = useState(false);

//     const colors = [
//         {
//             primaryColor : "#5D93E1",
//             secondaryColor : "#ECF3FC"
//         },
//         {
//             primaryColor : "#F9D288",
//             secondaryColor : "#FEFAF1"
//         },
//         {
//             primaryColor : "#5DC250",
//             secondaryColor : "#F2FAF1"
//         },
//         {
//             primaryColor : "#F48687",
//             secondaryColor : "#FDF1F1"
//         },
//         {
//             primaryColor : "#B964F7",
//             secondaryColor : "#F3F0FD"
//         }
//     ]

//     const toggle = () => {
//         setModal(!modal);
//     }

//     const updateTask = (obj) => {
//         updateListArray(obj, index)
//     }

//     const handleDelete = () => {
//         deleteTask(index)
//     }
// // 
//     return (
//         <div class = "card-wrapper mr-3" style={{"margin-left":"140px"}}>
//             <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
//             <div class = "task-holder">
//                 <p class = "card-header" style={{ "border-radius": "10px","background-color": colors[index%5].secondaryColor}}>{taskObj.Name}</p>
//                 <div className='task-des'>
//                 <p class = "card-assign" style={{ "border-radius": "10px","background-color": colors[index%5].primaryColor}}>To: {taskObj.Assign}</p>
//                 <p className = "mt-3">{taskObj.Description}</p>
//                 </div><br></br><br></br>
//                 <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
//                     <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>{' '}
//                     <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
//                 </div>
//         </div>
//         <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
//         </div>
//     );
// };

// export default Card;