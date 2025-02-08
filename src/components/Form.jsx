import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // validateField(name, value);
  };

  // const validateField = (name, value) => {
  //   let error = "";
  //   if (!value) {
  //     error = "This field is required";
  //   } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
  //     error = "Invalid email address";
  //   }
  //   setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  // };

  const validateForm = () => {
    const formErrors = {};

    // Check if the name is empty
    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    // Check if the email is empty or invalid
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    // Check if the message is empty
    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    return formErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);
    console.log("Form errors:", formErrors);

    // If no errors, continue
    if (!Object.values(errors).some((error) => error)) {
      console.log("Form submitted successfully", formData);
      //clear
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="container text-left">
      <h1>Contact Me</h1>
      <form className="form-group mb-3" onSubmit={handleFormSubmit}>
        <input
          className="form-control mb-3"
          value={formData.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}{" "}
        {/* Display error for name */}
        <input
          className="form-control mb-3"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email Address"
        />
        {errors.email && <p className="error">{errors.email}</p>}{" "}
        {/* Display error for email */}
        <textarea
          className="form-control mb-3"
          value={formData.message}
          name="message"
          onChange={handleInputChange}
          placeholder="Your Message"
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}{" "}
        {/* Display error for message */}
        <button className="btn btn-primary btn-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
