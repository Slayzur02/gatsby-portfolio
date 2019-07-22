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
      <Layout>
        <SEO
        title="Contact"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        />

        <form
          name="contact"
          method="post"
          action="/submission/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          ref={this.ContactForm}
          className="mx-auto md:w-1/2"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full" name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label className="block font-bold mb-2 text-xs uppercase">
              Your name:
             </label>
              <input placeholder="Andrew Young" className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full" type="text" name="name" onChange={this.handleChange} />

          </p>
          <p>
            <label className="block font-bold mb-2 text-xs uppercase" >
              Your email:
            </label>
              <input placeholder = "me@gmail.com" className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full" type="email" name="email" onChange={this.handleChange} />
            
          </p>
          <p>
            <label className="block font-bold mb-2 text-xs uppercase">
              Message:
            </label>
              <textarea 
              className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
              placeholder="Say something..."
              rows="8"
              name="message" 
              onChange={this.handleChange} />
            
          </p>
          <p>
            <button className="border-b-4 border-gray-800 hover:border-gray-700 bg-gray-700 hover:bg-gray-600 font-bold px-4 py-2 rounded text-sm text-white" type="submit">Send</button>
          </p>
        </form>
      </Layout>
    )
  }
}
export default ContactPage