import React from 'react'

const ContactUs = () => {

  let [contactForm, setContactForm] = React.useState({
    name: "",
    title: "",
    company: "",
    address: "",
    telephone: "",
    fax: "",
    email: "",
    comments: "",
    category: ""
  })
  const { name, title, company, address, telephone, fax, email, comments, category } = contactForm

  const handleInput = event => {
    setContactForm({
      ...contactForm, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log("you tried to contact us, it didn't work sorry :(")
  }

  return (
    <>
      <div>
        <h2>Contact Us</h2>
        <p>Ipsum Lorem R&D Office</p>
        <p><small>420 Park Avenue</small></p>
        <p><small>Miami, FL 331XX</small></p>
        <p><small>xxx-456-7890</small></p>
        <p>General Information: info@ipsum.xyz</p>
        <p>Sales: sales@ipsum.xyz</p>
        <p>Customer Support: support@ipsum.xyz</p>
        <p>Webmaster: admin@ipsum.xyz</p>
      </div>
      <h2>Send us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor='name'></label> */}
          <input
            type='name'
            name='name'
            value={name}
            onChange={handleInput}
            placeholder='Name'
          />
        </div>
        <div>
          {/* <label htmlFor='name'></label> */}
          <input
            type='title'
            name='title'
            value={title}
            onChange={handleInput}
            placeholder='Title'
          />
        </div>
        <div>
          {/* <label htmlFor='name'></label> */}
          <input
            type='company'
            name='company'
            value={company}
            onChange={handleInput}
            placeholder='Company'
          />
        </div>
        <div>
          {/* <label htmlFor='name'></label> */}
          <input
            type='Address'
            name='Address'
            value={address}
            onChange={handleInput}
            placeholder='Address'
          />
        </div>
        <div>
          {/* <label htmlFor='name'></label> */}
          <input
            type='telephone'
            name='telephone'
            value={telephone}
            onChange={handleInput}
            placeholder='Telephone'
          />
        </div>
        <div>
          {/* <label htmlFor='name'></label> */}
          <input
            type='fax'
            name='fax'
            value={fax}
            onChange={handleInput}
            placeholder='FAX'
          />
        </div>
        <div>
          {/* <label htmlFor='name'></label> */}
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleInput}
            placeholder='Email'
          />
        </div>
        <textarea
          types='comments'
          name='comments'
          value={comments}
          onChange={handleInput}
          placeholder=':)...'
          rows='4'
          cols='50'
        />
        <select
          type='category'
          name='category'
          value={category}
          onChange={handleInput}
        >
          <option value="Website">Website</option>
          <option value="Company">Company</option>
          <option value="Product">Products</option>
          <option value="Services">Services</option>
        </select>
        <button type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default ContactUs