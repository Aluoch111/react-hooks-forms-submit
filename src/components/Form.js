import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("firstName");
  const [lastName, setLastName] = useState("lastName");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData = {firstName : firstName , lastName : lastName };
    const dataArray = [ ...submittedData ,formData];
    setFirstName("");
    setLastName("");
    setSubmittedData(dataArray);
  }
  const listOfSubmissions = submittedData.map((data, index) =>{
    return (
      <div key={index}>
       {data.firstName}{""}{data.lastName}
      </div>
    );
  });


return (
  <>
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleFirstNameChange} value={firstName} />
    <input type="text" onChange={handleLastNameChange} value={lastName} />
    <button type="submit">Submit</button>
  </form>
  <h3>Submissions</h3>
  {listOfSubmissions}
  </>
);

}


export default Form;
