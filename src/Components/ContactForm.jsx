import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const form = useRef()
    const [status, setStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_xxxxx',      // Replace with your EmailJS service ID
                'template_yyyyy',     // Replace with your EmailJS template ID
                form.current,
                'public_zzzzz'        // Replace with your EmailJS public key
            )
            .then(
                () => {
                    setStatus('Email sent successfully!')
                    e.target.reset()
                },
                (error) => {
                    setStatus('Failed to send email. Please try again.')
                    console.error(error.text)
                }
            )
    }

    return (
        <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}></div>
            <h2>Contact Us</h2>
        
        <label>Message</label>
        <textarea name="message" required placeholder="Your Message" />
        
        <button type="submit" style={{ marginTop: 10 }}>Send</button>
      </form>

      {status && <p style={{ marginTop: 10 }}>{status}</p>}
    </div>
  )
}

export default ContactForm