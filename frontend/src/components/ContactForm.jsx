import { useState } from "react"

const ContactForm = () => {
  const [email,setEmail]=useState("")
  const [name,setName] =useState("")
  const [message,setMessage] = useState('')
  const [nameError,setNameError]=useState('')
  const [emailError,setEmailError]=useState('')
  const [messageError,setMessageError]=useState('')
  
  const handleForm=(event)=>{
    event.preventDefault()
    if(!nameError && !emailError && !messageError){
      console.log({email,name,message});
    }
    setEmail("")
    setName("")
    setMessage("")
    
  }

  const handleNameBlur=()=>{
         if(!name.trim()) setNameError('Name is Required!')
          else if(name.trim().length < 5) setNameError('At least 5 characters')
        else  setNameError('')
  }

 const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


  const handleEmailBlur=()=>{
    if(email && !emailRegex.test(email)){
      setEmailError('Enter a valid email')
    }
    else setEmailError('')
      
  }

  const handleMessageBlur=()=>{
      if (message.length < 50) {
        setMessageError("Enter at least 50 characters")
        
      }
      else setEmailError('')
  }
  return (
    <div className="contact-forms">
      <form >
        <input type="text"
              required={true}
              onBlur={handleNameBlur}
              errorM
              placeholder="Name"
             value={name}
             onChange={(event)=>{setName(event.target.value); setNameError('')}}/>
             {nameError && <span className="error">{nameError}</span>}
        <input type="email"
                placeholder="Email"
                required={true}
                value={email}
                onBlur={handleEmailBlur}
                onChange={(event)=>setEmail(event.target.value) }/>
                {emailError && <span className="error">{emailError}</span>}
        <textarea placeholder="message"
                  value={message}
                  onBlur={handleMessageBlur}
                  onChange={(event)=>setMessage(event.target.value) }></textarea>
                  {messageError && <span className="error">{messageError}</span>}
        <br />
        <button type="submit" onClick={handleForm}>submit</button>
      </form>
    </div>
  )
}

export default ContactForm