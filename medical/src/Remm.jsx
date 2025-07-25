import './Remm.css';
import { useState } from "react";
function Remm()
{
    const [name,setName]=useState("");
    const create=(e)=>{
        setName(e.target.value);
    }
    const [number,setNumber]=useState("");
    const func=(e)=>{
        setNumber(e.target.value);
    }
    const [age,setAge]=useState("");
    const callage=(e)=>{
        setAge(e.target.value);
    }
    const [medicine,setMedicine]=useState("");
    const [medicinelist,setMedicinelist]=useState([]);
    
    const call=(e)=>{
        setMedicine(e.target.value);
    }
    const add=()=>
    {
        const newMed = {
            name: medicine,
            frequency: freq,
            times: times,
            when: ina
          };
        setMedicinelist(s=>[...medicinelist,newMed]);
        setMedicine("");
        setFreq("Daily");
        setTimes({});
        setInaday([]);
    }
    const deletemed=(index)=>
    {
        const update=medicinelist.filter((element,i)=>(i!==index));
        setMedicinelist(update);
    }
    const [freq,setFreq]=useState("Daily");
    const callfreq=(e)=>{
        setFreq(e.target.value);
    }
    const [times,setTimes]=useState({});
    const calltime=(e)=>{
        setTimes(e.target.value);
    }
    const [ina,setInaday]=useState([]);
    const handleWhenChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setInaday(selectedOptions);
        setTimes(prev =>
            selectedOptions.reduce((acc, moment) => {
              acc[moment] = prev[moment] || "";
              return acc;
            }, {})
          );
    };
    const handleTimeChange = (moment) => (e) => {
        const time = e.target.value;
        setTimes(prev => ({
          ...prev,
          [moment]: time,
        }));
      };
      

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <>
        <div className="full"> 
        <form className="form-full"onSubmit={handleSubmit}>
        <h1 className="title">MEDICALL</h1>
        <input value={name} onChange={create}placeholder="Enter your name"></input>
        <p>{name}</p>
        <input value={age} onChange={callage}placeholder="Enter your age"></input>
        <p>{age}</p>
        <input value={number} onChange={func} type="number" placeholder="Enter number of medicines"></input>
        <p>{number}</p>
        <input value={medicine} onChange={call}placeholder="Enter your medicine"></input>
        <select value={freq} onChange={(e)=>callfreq(e)}placeholder="Enter frequency">
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        </select>
        <div>
          <div  className="checkbox-wrap">
  <label>When to take:</label>
  {[
    "Before Breakfast",
    "After Breakfast",
    "Before Lunch",
    "After Lunch",
    "Before Dinner",
    "After Dinner",
  ].map((moment) => (
    <div key={moment}>
      <input
        type="checkbox"
        value={moment}
        checked={ina.includes(moment)}
        onChange={(e) => {
          const isChecked = e.target.checked;
          setInaday((prev) =>
            isChecked ? [...prev, moment] : prev.filter((m) => m !== moment)
          );
          if (isChecked) {
            setTimes((prev) => ({ ...prev, [moment]: "" }));
          } else {
            setTimes((prev) => {
              const { [moment]: _, ...rest } = prev;
              return rest;
            });
          }
        }}
      />
      <label>{moment}</label>
      </div>
   
  ))}
   </div>
</div>

        {ina.map((moment, idx) => (
  <div key={idx}>
    <label>{moment} time:</label>
    <input
      type="time"
      value={times[moment] || ""}
      onChange={handleTimeChange(moment)}
    />
  </div>
))}

        <button className="add-button" type="button" onClick={add}>Add medicine</button>
        </form>
        <ul>

        {medicinelist.map((med, index) => (
          <li key={index}>
            <strong>{med.name}</strong> – Frequency: <em>{med.frequency}</em><br />
            {med.when.map((w, i) => (
              <div key={i}>
                {w} at {med.times[w] || "Not Set"}
              </div>
            ))}
            <button className="delete-button" onClick={() => deletemed(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
      <button className="submit-button">Submit</button>
      
       
        
        </>
    )
}
export default Remm;