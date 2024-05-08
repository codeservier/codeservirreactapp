import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { useState } from "react";

export default function Practice()
{
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [areacode, setareacode] = useState("");
    const [city, setcity] = useState("");
  
    const handleSubmit = (event) => {
      const errorfname = document.getElementById("errorf");
      const errorColorfname = document.getElementById("fname");
  
      const errorlname = document.getElementById("errorl");
      const errorColorlname = document.getElementById("lname");
  
      const errorarea = document.getElementById("errorarea");
      const errorColorarea = document.getElementById("areacode");
  
      const errorcity = document.getElementById("errorcity");
      const errorColorcity = document.getElementById("city");
  
       if(fname === "")
       {
        errorfname.innerHTML = "Please Enter Something"
        errorColorfname.classList.add("errorColor");
       }
       else{
        errorfname.innerHTML = ""
        errorColorfname.classList.remove("errorColor");
       }
  
  
  
       if(lname === "")
       {
        errorlname.innerHTML = "Please Enter Something"
        errorColorlname.classList.add("errorColor");
       }
       else{
        errorlname.innerHTML = ""
        errorColorlname.classList.remove("errorColor");
       }
       
       if(areacode === "")
       {
        errorarea.innerHTML = "Please Enter Something"
        errorColorarea.classList.add("errorColor");
       }
       else{
        errorarea.innerHTML = ""
        errorColorarea.classList.remove("errorColor");
       }
  
  
       if(city === "")
       {
        errorcity.innerHTML = "Please Enter Something"
        errorColorcity.classList.add("errorColor");
       }
       else{
        errorcity.innerHTML = ""
        errorColorcity.classList.remove("errorColor");
       }
  
      event.preventDefault();
    } 
  
    return(
        <>
        <div className="container">
      <form onSubmit={handleSubmit} >
      <div className="subcontainer">
        <div className="childcontainer">
          <h1 className="heading">Hello React</h1>
        </div>
        <div>
          <CustomInput
            label={"Enter Your First Name: "}
            id={"fname"}
            type={"text"}
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            placeholder={fname.trim && fname.trim()!== "" ? "":'Enter your name'}
          />
          <span id="errorf"></span>
          <CustomInput
            label={"Enter Your Last Name: "}
            placeholder={"Last Name:"}
            id={"lname"}
            type={"text"}
            value={lname}
            onChange={(e) => setlname(e.target.value)}

          />
                    <span id="errorl"></span>

          <CustomInput
            label={"Enter Your Area Code:"}
            placeholder={"Pin Code"}
            id={"areacode"}
            type={"number"}
            value={areacode}
            onChange={(e) => setareacode(e.target.value)}

          />
                    <span id="errorarea"></span>

          <CustomInput
            label={"Enter Your City Name: "}
            placeholder={"City Name:"}
            id={"city"}
            type={"text"}
            value={city}
            onChange={(e) => setcity(e.target.value)}

          />
                    <span id="errorcity"></span>

          
        </div>
        <div className="childcontainer">
          <CustomButton />
        </div>
      </div>

      </form>
    
    </div>
        </>
    )
}