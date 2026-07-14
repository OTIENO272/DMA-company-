import { useState } from "react"
import FormInput from "./FormInput"
import { useLocation } from "react-router"
import { submitApplication } from "../api/api.js"

const FormLink = () => {
  const [submitted, setSubmitted] = useState(false)
  const [applicantInfo, setApplicantInfo] = useState({})

  const { state } = useLocation()

  const [values, setValues] = useState({
    fName: '',
    sName: '',
    email: '',
    number: '',
    position: state.position || '',
    experience: '',
    resume: '',
  })
  const [focused, setFocused] = useState(false)
  const [message, setMessage] = useState('')
  const [submitError, setSubmitError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const inputs = [{
    id: 1,
    name: 'fName',
    type: 'text',
    placeholder: "Cyn",
    label: 'FirstName',
    errorMessage: 'First Name Required',
    required: true
  }, {
    id: 2,
    name: 'sName',
    type: 'text',
    placeholder: "coder",
    label: 'secondName',
    errorMessage: 'Second Name Required',
    required: true
  }, {
    id: 3,
    name: 'email',
    type: 'email',
    placeholder: "abc@gmail.com",
    label: 'EmailAddress',
    errorMessage: 'Enter a valid email',
    required: true
  }, {
    id: 4,
    name: 'number',
    type: 'tel',
    placeholder: "000 0000",
    label: 'Phone Number',
    errorMessage: 'Enter a valid number',
    pattern: '^[0-9]{10,15}$',
    required: true
  }, {
    id: 5,
    name: 'position',
    type: 'text',
    placeholder: "Cyber Security",
    label: 'Position Applying For',
    errorMessage: 'Choose Job ',
    style: { background: '#f0f0f0', cursor: 'not-allowed' },
    readOnly: true
  }, {
    id: 6,
    name: 'experience',
    type: 'number',
    placeholder: "e.g 2",
    label: 'Years of Experience',
    errorMessage: 'Fill area',
    required: true
  }, {
    id: 7,
    name: 'resume',
    type: 'file',
    placeholder: "Drag and Drop files",
    label: 'Your Resume',
    errorMessage: 'No file chosen',
    required: true,
    accept: ".pdf,.doc,.docx"
  }]

  const onChange = (e) => {
    setValues({
      ...values, [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    setValues({
      ...values, resume: e.target.files[0]
    })
  }

  const handleText = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(null)
    setIsSubmitting(true)

    try {
      await submitApplication({ ...values, skills: message })

      setApplicantInfo({
        fName: values.fName,
        email: values.email,
        position: state?.position,
      })

      setValues({
        fName: '',
        sName: '',
        number: '',
        position: '',
        experience: '',
        resume: '',
        email: ''
      })
      setMessage('')
      setFocused(false)
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Application Submitted!</h2>
          <p>Thank you <strong>{applicantInfo.fName}</strong>, your <strong>{applicantInfo.position}</strong> application has been received</p>
          <p className="success-sub">We will review your application and get back to you at <strong>{applicantInfo.email}</strong> within 3-5 business days.</p>
          <button onClick={() => setSubmitted(false)} className="back-btn">Submit Another Application</button>
        </div>
      </div>
    )
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Tech Application form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={input.type === 'file' ? undefined : values[input.name]}
            onChange={input.type === 'file' ? handleFileChange : onChange}
          />
        ))}

        <label>List Your Technical Skills</label>
        <textarea
          name="skills"
          onChange={handleText}
          value={message}
          onFocus={() => setFocused(true)}
          className={focused ? "focused" : ""}
          placeholder="skill description"
        ></textarea>

        <button id="submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        {submitError && <p className="error">{submitError}</p>}
      </form>
    </div>
  )
}

export default FormLink