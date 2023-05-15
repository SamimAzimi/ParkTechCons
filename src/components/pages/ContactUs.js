import React from 'react'
import '../../assets/styles/pagesStyle/contact.css'
function ContactUs() {
  return (
    <main>
    <section>
      <h1>Contact Us</h1>
      <p>Fill out the form below to get in touch with us. We'll get back to you as soon as possible.</p>
    </section>

    <section class="contact-form">
      <h2>Send us a message</h2>
      <form action="#" method="post">
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" required/>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit" aria-label="Submit Contact Form">Send Message</button>
      </form>
    </section>
  </main>
  )
}

export default ContactUs