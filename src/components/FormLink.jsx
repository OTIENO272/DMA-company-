import { useState } from "react"
import FormInput from "./FormInput"
import { useLocation } from "react-router"


const FormLink = () => {

    const[submitted,setSubmitted]=useState(false)
    const [applicantInfo,setApplicantInfo]=useState({})


    const {state}=useLocation()


  const [values,setValues]=useState({
    fName:'',
    sName:'',
    email:'',
    number:'',
    position:state.position ||'',
    experience:'',
    resume:'',

  })
  const[focused,setFocused] =useState(false)
    const inputs =[{
        id:1,
        name:'fName',
        type:'text',
        placeholder:"Cyn",
        label:'FirstName',
        errorMessage:'First Name Required',
        required:true
    },{
        id:2,
        name:'sName',
        type:'text',
        placeholder:"coder",
        label:'secondName',
        errorMessage:'Second Name Required',
        required:true
    },{
        id:3,
        name:'email',
        type:'email',
        placeholder:"abc@gmail.com",
        label:'EmailAddress',
        errorMessage:'Enter a valid email',
        required:true
    },{
        id:4,
        name:'number',
        type:'tel',
        placeholder:"000 0000",
        label:'Phone Number',
        errorMessage:'Enter a valid number',
        pattern: '^[0-9]{10,15}$',
        required:true
    },{
        id:5,
        name:'position',
        type:'text',
        placeholder:"Cyber Security",
        label:'Position Applying For',
        errorMessage:'Choose Job ',
        style: { background: '#f0f0f0', cursor: 'not-allowed' },
        readOnly:true
    },{
        id:6,
        name:'experience',
        type:'number',
        placeholder:"e.g 2",
        label:'Years of Experience',
        errorMessage:'Fill area',
        required:true
    },{
        id:7,
        name:'resume',
        type:'file',
        placeholder:"Drag and Drop files",
        label:'Your Resume',
        errorMessage:'No file chosen',
        required:true,
        accept:".pdf,.doc ,.docx"
    }
]
const [message,setMessage]=useState('')

    const onChange=(e)=>{
        setValues({
            ...values,[e.target.name]:e.target.value
        })
        
    }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setApplicantInfo({
            fName: values.fName,
            email: values.email,
            position: state?.position,
        });
    console.log(values,message);
    
   
    console.log(applicantInfo);
    
    setValues({
            fName:'',
            sName:'',
            number:'',
            position:'',
            experience:'',
            resume:'',
            email:''

    })
    setMessage('')
   
    setFocused({})
    setSubmitted(true)
   
    
  }
  const handleText=(e)=>{
    setMessage(e.target.value)
  }

   if (submitted) {
        return(
            <div className="success-container">
                <div className="success-card">
                    <div className="success-icon">✓</div>
                    <h2>Application Submitted!</h2>
                    <p>Thank you <strong>{values.fName}</strong>,your <strong>{state.position}</strong> application has been received </p>
                     <p className="success-sub">We will review your application and get back to you at <strong>{values.email}</strong> within 3-5 business days.</p>
                      <button onClick={() => setSubmitted(false)} className="back-btn">Submit Another Application</button>
                </div>
            </div>
            
        )
        
    }
  
  
  return (
    <div className="form-container">
        <form   onSubmit={handleSubmit}>
            <h1>Tech Application form</h1>
            {inputs.map((input)=>(
                <FormInput 
                          key={input.id}
                          {...input}
                          value={values[input.name]}
                          onChange={onChange}
                />
                          
            )
              )}


            <label >Describe Your Technical Skills</label>
            <textarea      name="skills"
                            // key={message}
                            onChange={handleText}
                            value={message}
                            onFocus={()=>setFocused(true)}
                            className={focused ? "focused" : ""}
                            placeholder="skill description"></textarea>

            <button id="submit" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormLink