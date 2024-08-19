const Contact = require("../models/contactModel");
const contactServices = require("../services/contactServices");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    await contactServices.sendEmail(name, email, subject, message);
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error submitting contact form", error: error.message });
  }
};
