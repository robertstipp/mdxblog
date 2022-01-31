import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I write to my freinds every few weeks</h4>
          <form
            className="contact-form"
            name="testing-contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="testing-contact" />
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your name"
            />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your email"
            />
            <button type="submit" className="btn form-control">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
