import React, { Component } from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";




class ContactPage extends Component {
  constructor(props) {
    super(props)
    this.ContactForm = React.createRef()
    this.state = {}
  }
  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = this.ContactForm.current
    document.getElementById('thanks').style.display = 'block';
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(response => {
        console.log("====================================")
        console.log(`${JSON.stringify(response, null, 2)}`)
        console.log("====================================")
        navigate(form.getAttribute("action"))
      })
      .catch(error => {
        console.log("====================================")
        console.log(`error in submiting the form data:${error}`)
        console.log("====================================")
      })
  }
  render() {
    return (
      <Layout className = "bg-black">
        <SEO
        title="Contact"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        />
        <div className="flex flex-col w-full justify-center">

        <div className="text-4xl w-full text-center font-bold text-gray-700 hover:text-gray-800">
          <div className = "inline-block text-indigo-700 w-auto">Contact me!</div>
        </div>
        <form
          name="contact"
          method="post"
          action="/contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          ref={this.ContactForm}
          className="mx-auto md:w-1/2 justify-center flex flex-col align-middle justify-center pt-8 mb-0"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full" name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label className="block font-bold mb-2 text-md uppercase text-gray-800">
              Your name:
             </label>
              <input placeholder="Anything" className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full border-2 hover:border-indigo-400 focus:border-indigo-600" type="text" name="name" onChange={this.handleChange} />

          </p>
          <p>
            <label className="block font-bold mb-2 text-md uppercase text-gray-800" >
              Your email:
            </label>
              <input placeholder = "me@gmail.com" className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full border-2 hover:border-indigo-400 focus:border-indigo-600 " type="email" name="email" onChange={this.handleChange} />
            
          </p>
          <p>
            <label className="block font-bold mb-2 text-md uppercase text-gray-800">
              Message:
            </label>
              <textarea 
              className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full border-2 hover:border-indigo-400 focus:border-indigo-600"
              placeholder="Say something..."
              rows="8"
              name="message" 
              onChange={this.handleChange} />
            
          </p>
          <p>
            <button className="border-b-2 border-white hover:bg-indigo-700 text-white bg-indigo-600 font-bold px-4 py-2 rounded text-xl " type="submit">Send</button>
          </p>
          <p id='thanks' className="text-lg font-bold" style = {{
            display: 'none',
          }}>Thanks for reaching out! I'll get back to you as quick as I can.</p>
        </form>
        </div>
      </Layout>
    )
  }
}
export default ContactPage