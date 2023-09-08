import { useState } from "react";
import "./Contact.scss";
import AutoComplete from "./AutoComplete";
import { autoCompleteData } from "./Data";

function Contact() {
  const [formData, setFormData] = useState({
    inquryType: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send formData to the server for email processing
      const response = await fetch("/mail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Show success message to the user
        alert("Message sent successfully!");
      } else {
        // Handle error
        alert("Message sending failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="app__contact" id="contact">
      <div className="container-sm">
        <h1 className="contact-heading">Need more info?</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6 form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                placeholder="First Name"
              />
            </div>

            <div className="col-12 col-md-6 form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                placeholder="Last Name"
              />
            </div>

            <div className="col-12 col-md-6 form-group">
              <label htmlFor="inquiryType">Inquiry Type</label>
              <AutoComplete data={autoCompleteData} />
            </div>

            <div className="col-12 col-md-6 form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="@example.com"
                className="form-input"
              />
            </div>

            <div className="col-12 form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                placeholder="Hi, I need..."
                rows="5"
                cols="50"
              ></textarea>
            </div>

            <div className="col-12 form-group d-flex justify-content-center align-items-center">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
