import { useState } from "react"


const FormInput = (props) => {
  const [focused,setFocused] =useState(false)

    const {label,onChange ,errorMessage,...inputProps} =props
    const handleFocus=()=>{
        setFocused(true)
    }
  return (
    <div className="form-input">
      <label htmlFor={inputProps}>{label}</label>
      <input
             {...inputProps} 
             onChange={onChange}
             onBlur={handleFocus}
             onFocus={()=> setFocused(true)}
             className={focused ? "focused" : ""}
            />
            
            {<span>{errorMessage}</span>}
    </div>
  )
}

export default FormInput