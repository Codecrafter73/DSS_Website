import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Mail,
  Phone,
  User,
  Building,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";
import * as Yup from "yup";

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const services = [
    "Recce Work",
    "Design Work",
    "Installation Work",
    "Annual Maintenance Contract (AMC)",
    "Consultancy Services",
  ];

  const enquirySchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .matches(/^[A-Za-z\s]+$/, "Name should contain only letters"),

    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),

    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),

    company: Yup.string()
      .nullable()
      .matches(/^[A-Za-z\s]+$/, "Company name should contain only letters"),

    service: Yup.string()
      .required("Please select a service"),

    message: Yup.string().nullable(),
  });
  useEffect(() => {
    enquirySchema
      .isValid(formData)
      .then((valid) => setIsFormValid(valid));
  }, [formData]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateForm = async () => {
    try {
      await enquirySchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Input sanitization for name, company, and phone fields
    if (name === "name" || name === "company") {
      // Allow only letters and spaces
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
        if (errors[name]) {
          setErrors((prev) => ({
            ...prev,
            [name]: "",
          }));
        }
      }
    } else if (name === "phone") {
      // Allow only digits
      if (/^\d*$/.test(value)) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
        if (errors[name]) {
          setErrors((prev) => ({
            ...prev,
            [name]: "",
          }));
        }
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validateForm();
    if (!isValid) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setErrors({});
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setErrors({});
      setIsSuccess(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-black/50 backdrop-blur-[2px]"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-slate-900/90 text-white rounded-2xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-hidden animate-scale-in mt-10 border border-white/10 backdrop-blur-xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-slate-700" />
        </button>

        {/* Success State */}
        {isSuccess && (
          <div className="absolute inset-0 bg-slate-900 rounded-xl flex items-center justify-center z-40 animate-fade-in">
            <div className="text-center px-6 py-8">
              <div className="mb-4 inline-block">
                <CheckCircle className="w-16 h-16 text-emerald-500 animate-scale-in" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Thank You!
              </h3>
              <p className="text-white/70">We'll get back to you shortly.</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 px-5 py-5">
          <h2 className="text-2xl font-semibold text-white mb-1">
            Send Inquiry
          </h2>
          <p className="text-white/90 text-sm">We'll respond within 24 hours</p>
        </div>

        {/* Form */}
        <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            {/* Name Field */}
            <div>
              <label className="flex items-center text-sm font-medium text-white/90 mb-1.5">
                <User className="w-4 h-4 mr-1.5 text-slate-500" />
                Full Name <span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                  errors.name
                    ? "border-red-400 bg-red-50"
                    : "border-white/20 bg-white/10 text-white placeholder:text-white/50"
                }`}
                placeholder="John Doe"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-2 gap-3">
              {/* Email Field */}
              <div>
                <label className="flex items-center text-sm font-medium text-white/90 mb-1.5">
                  <Mail className="w-4 h-4 mr-1.5 text-slate-500" />
                  Email <span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                    errors.email
                      ? "border-red-400 bg-red-50"
                      : "border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  }`}
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="flex items-center text-sm font-medium text-white/90 mb-1.5">
                  <Phone className="w-4 h-4 mr-1.5 text-slate-500" />
                  Phone <span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                    errors.phone
                      ? "border-red-400 bg-red-50"
                      : "border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  }`}
                  placeholder="+91 98765 43210"
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Company Field */}
            <div>
              <label className="flex items-center text-sm font-medium text-white/90 mb-1.5">
                <Building className="w-4 h-4 mr-1.5 text-slate-500" />
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-white/20 bg-white/10 text-white placeholder:text-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="Acme Corporation (optional)"
                disabled={isSubmitting}
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="flex items-center text-sm font-medium text-white/90 mb-1.5">
                <MessageSquare className="w-4 h-4 mr-1.5 text-slate-500" />
                Service Interest <span className="text-red-500 ml-0.5">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                  errors.service
                    ? "border-red-400 bg-red-50"
                    : "border-white/20 bg-white/10 text-white placeholder:text-white/50"
                }`}
                disabled={isSubmitting}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">{errors.service}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="flex items-center text-sm font-medium text-white/90 mb-1.5">
                <MessageSquare className="w-4 h-4 mr-1.5 text-slate-500" />
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2 text-sm border border-white/20 bg-white/10 text-white placeholder:text-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..."
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className="w-full py-2.5 bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 text-white font-medium text-sm rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group shadow-sm hover:shadow-md"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Inquiry
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>,
    document.body
  );
};

export default EnquiryModal;
