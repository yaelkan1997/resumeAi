import { useState } from 'react';
import './JobForm.css';


function JobForm({addJob}){
    const [FormData, SetFormData] = useState({
        roll: "",
        compony: "",
        date: "",
        status: "send",
        CV: ""
    })

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        SetFormData({
            ...FormData,
            [name] : value,
        });
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if(FormData.roll && FormData.compony){
            const today = new Date();
            const formattedDate = `${today.getDate()}.${today.getMonth() + 1}`; 

            const updatedFormData = {
                ...FormData,
                date: formattedDate, 
            };
            
            addJob(updatedFormData);
            SetFormData({
                roll: "",
                compony: "",
                date: "",
                status: "send",
                CV: ""
            });

            alert("Form submitted successfully!");
           
        }
        else{
            alert("Please fill in all fields.");
        }
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <label>
                Company Name:
                <input
                    type="text"
                    name="compony"
                    value={FormData.compony}
                    onChange={handleInputChange}
                    required/>  
            </label>
            <label>
                Job Title::
                <input
                    type="text"
                    name="roll"
                    value={FormData.roll}
                    onChange={handleInputChange}
                    required/>  
            </label>
            <button type="submit">Add Job</button>
        </form>
    )
}
export default JobForm;
