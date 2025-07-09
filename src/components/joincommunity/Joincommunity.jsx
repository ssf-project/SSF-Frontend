import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Joincommunity.css";

function Joincommunity() {
  const navigate = useNavigate();

  // Membership form state
  const [role, setRole] = useState("student");
  const [membershipForm, setMembershipForm] = useState({
    name: "",
    phone: "",
    address: "",
    qualification: "",
    amount: "",
    agree: false,
  });
  const [membershipErrors, setMembershipError] = useState({});

  const handleMembershipChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedValue = type === "checkbox" ? checked : value;

    if (name === "name") {
      updatedValue = updatedValue
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    }

    setMembershipForm((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };
  const handleMembershipPhoneChange = (e) => {
    let input = e.target.value.replace("+91", "").trim();

    // Remove all non-digit characters
    let digits = input.replace(/\D/g, "");

    // If digits start with 91 and more than 10 digits, remove the leading 91
    if (digits.startsWith("91") && digits.length > 10) {
      digits = digits.slice(2);
    }

    // Always keep max 10 digits
    digits = digits.slice(0, 10);

    setMembershipForm((prev) => ({
      ...prev,
      phone: digits,
    }));
  };

  const validateMembershipForm = () => {
    const errors = {};

    if (!membershipForm.name.trim()) {
      errors.name = "Name is required";
    }

    if (!/^\d{10}$/.test(membershipForm.phone)) {
      errors.phone = "Enter a valid 10-digit phone number";
    }

    if (!membershipForm.address.trim()) {
      errors.address = "Address is required";
    }

    if (role === "student" && !membershipForm.qualification.trim()) {
      errors.qualification = "Qualification is required";
    }

    if (role === "donor" && !membershipForm.amount) {
      errors.amount = "Donation amount is required";
    }

    if (!membershipForm.agree) {
      errors.agree = "You must agree to receive communications";
    }

    return errors;
  };

  const handleMembershipSubmit = async (e) => {
    e.preventDefault();
    const errors = validateMembershipForm();
    setMembershipError(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const endpoint =
          role === "student"
            ? "https://ssf-backend-r7od.onrender.com/api/register-student"
            : "https://ssf-backend-r7od.onrender.com/api/donate-success";

        const body = {
  name: membershipForm.name,
  phone: "+91" + membershipForm.phone,
  address: membershipForm.address,
  role,
  ...(role === "student" && { qualification: membershipForm.qualification }),
  ...(role === "donor" && { amount:Number( membershipForm.amount) }),
};

        console.log("Sending body to backend:",body);
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const data = await response.json();
        if (data.success) {
          toast.success("Form submitted successfully!");
          setMembershipForm({name:"",phone:"",address:"",qualification:"",amount:"",agree:false,});
          setTimeout(() => {
            navigate(role === "student" ? "/thankyou" : "/payments",{state:{formSubmit:true},});
          }, 3000);
        } else {
          toast.error("Submission failed. Try again");
        }
      } catch (err) {
        console.error("Error submitting membership form:", err);
        toast.error("Something went wrong");
      }
    }
  };


// Contact form state
const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  message: "",
  agree: false,
});
const [errors, setErrors] = useState({});

const handlePhoneChange = (e) => {
  // Remove +91 if user tries to type it manually
  let input = e.target.value.replace("+91", "").trim();

  // Remove non-digit characters
  let digits = input.replace(/\D/g, "");

  // If it still starts with '91' and is longer than 10 digits, remove that
  if (digits.startsWith("91") && digits.length > 10) {
    digits = digits.slice(2);
  }

  // Always keep max 10 digits
  digits = digits.slice(0, 10);

  setFormData((prev) => ({
    ...prev,
    phone: digits,
  }));
};

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  let updatedValue = type === "checkbox" ? checked : value;

  if (name === "fullName") {
    updatedValue = updatedValue
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  setFormData((prev) => ({
    ...prev,
    [name]: updatedValue,
  }));
};

const validate = () => {
  const newErrors = {};
  if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
  if (!formData.email.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/))
    newErrors.email = "Enter a valid email";
  if (!formData.phone.match(/^\d{10}$/))
    newErrors.phone = "Enter a valid 10-digit phone number";
  if (!formData.message.trim()) newErrors.message = "Message is required";
  if (!formData.agree)
    newErrors.agree = "You must agree to receive communications";
  return newErrors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const foundErrors = validate();
  setErrors(foundErrors);

  if (Object.keys(foundErrors).length === 0) {
    fetch("https://ssf-backend-r7od.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, phone: "+91" + formData.phone }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Message sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            message: "",
            agree: false,
          });
        } else {
          toast.error("Failed to send message.");
        }
      })
      .catch(() => toast.error("Error sending form. Try again."));
  }};

return (
  <div id="join" className="join-section">
    <div className="container">
      <span className="section-title">Join Our Community</span>
      <div className="join-box">
        {/* Membership Form */}
        <div className="half-width">
          <div className="card">
            <span className="card-Member-title">Membership Form</span>
            <div className="role-selection">
              <label className="role">Role:</label>
              <label>
                <input
                  type="radio"
                  value="student"
                  checked={role === "student"}
                  onChange={() => setRole("student")}
                  className="radio"
                />{" "}
                Student
              </label>
              <label>
                <input
                  type="radio"
                  value="donor"
                  checked={role === "donor"}
                  onChange={() => setRole("donor")}
                  className="radio"
                />{" "}
                Donor
              </label>
            </div>
            <form onSubmit={handleMembershipSubmit} className="membership-form">
              <label>
                {role === "student" ? "Student Name:" : "Donor Name:"}
              </label>
              <input
                type="text"
                name="name"
                value={membershipForm.name}
                onChange={handleMembershipChange}
                placeholder="Your name"
              />
              {membershipErrors.name && (
                <span className="error-message">{membershipErrors.name}</span>
              )}

              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={
                  membershipForm.phone ? `+91 ${membershipForm.phone}` : "+91 "
                }
                onChange={handleMembershipPhoneChange}
              />
              {membershipErrors.phone && (
                <span className="error-message">{membershipErrors.phone}</span>
              )}

              {role === "student" && (
                <>
                  <label>Qualification:</label>
                  <input
                    type="text"
                    name="qualification"
                    value={membershipForm.qualification}
                    onChange={handleMembershipChange}
                  />
                  {membershipErrors.qualification && (
                    <span className="error-message">
                      {membershipErrors.qualification}
                    </span>
                  )}
                </>
              )}

              <label>Permanent Address:</label>
              <textarea
                name="address"
                value={membershipForm.address}
                onChange={handleMembershipChange}
                rows="3"
              ></textarea>
              {membershipErrors.address && (
                <span className="error-message">
                  {membershipErrors.address}
                </span>
              )}

              {role === "donor" && (
                <>
                  <label>Donation Amount:</label>
                  <input
                    type="number"
                    name="amount"
                    value={membershipForm.amount}
                    onChange={handleMembershipChange}
                  />
                  {membershipErrors.amount && (
                    <span className="error-message">
                      {membershipErrors.amount}
                    </span>
                  )}
                </>
              )}

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agree"
                  checked={membershipForm.agree}
                  onChange={handleMembershipChange}
                  className="custom-checkbox"
                />
                <span>
                  I agree to receive communications from ssf
                </span>
              </label>

              {membershipErrors.agree && (
                <span className="error-message">{membershipErrors.agree}</span>
              )}

              <button type="submit">
                {role === "student" ? "Register" : "Donate Now"}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Form */}
        <div className="half-width">
          <div className="card">
            <span className="card-title">Contact Us</span>
            <form onSubmit={handleSubmit} noValidate>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.fullName && (
                <span className="error">{errors.fullName}</span>
              )}

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone ? `+91 ${formData.phone}` : "+91 "}
                onChange={handlePhoneChange}
                placeholder="+91 9876543210"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="How can we help you?"
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="custom-checkbox"
                />
                <span>
                  I agree to receive communications from ssf
                </span>
              </label>
              {errors.agree && <span className="error">{errors.agree}</span>}

              <button type="submit" className="send-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer position="bottom-right" autoClose={5000} />
  </div>
);
}


export default Joincommunity;
