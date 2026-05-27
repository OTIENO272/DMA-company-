
const ContactForm = () => {
  return (
    <div className="contact-forms">
      <form >
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="message"></textarea>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default ContactForm