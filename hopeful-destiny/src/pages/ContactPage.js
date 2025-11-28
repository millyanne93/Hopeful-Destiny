import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, User } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [infoRef, infoInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Updated contact information with better address handling
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Mailing Address',
      details: ['P.O. Box 145-30200', 'Kitale, Trans Nzoia County', 'Kenya'],
      color: 'blue',
      note: 'For postal correspondence'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Physical Office',
      details: ['Kitale Town', 'Trans Nzoia County', 'Kenya'],
      color: 'indigo',
      note: 'Visits by appointment only'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+254 710 330 788', 'Mon - Fri, 8AM - 5PM'],
      color: 'green'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['hopefuldestinyorganisation@gmail.com', 'We reply within 24 hours'],
      color: 'yellow'
    }
  ];

  const reasons = [
    { icon: <MessageSquare className="w-5 h-5" />, text: 'General Inquiries' },
    { icon: <User className="w-5 h-5" />, text: 'Partnership Opportunities' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Volunteer Information' },
    { icon: <Send className="w-5 h-5" />, text: 'Donation Questions' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    // Send email using EmailJS
    emailjs.send(
      'YOUR_SERVICE_ID',      // Get from emailjs.com dashboard
      'YOUR_TEMPLATE_ID',     // Get from emailjs.com dashboard
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'hopefuldestinyorganisation@gmail.com'
      },
      'YOUR_PUBLIC_KEY'       // Get from emailjs.com account page
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      setSubmitError(true);
    });
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-300 rounded-full blur-2xl opacity-10 animate-float"
              style={{
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6 border border-yellow-200">
            <Mail className="w-5 h-5 text-yellow-700" />
            <span className="text-yellow-700 font-semibold">Get In Touch</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-yellow-600">Hopeful Destiny</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section
        ref={infoRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
            infoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-${info.color}-50 to-white rounded-2xl p-6 border-2 border-${info.color}-200 hover:border-${info.color}-400 transition-all transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 bg-${info.color}-100 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${info.color}-600`}>{info.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
                {/* Added note display */}
                {info.note && (
                  <p className="text-xs text-gray-500 italic mt-2">{info.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={formRef}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
            formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side - Why Contact Us */}
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-200 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Contact Us?
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Whether you want to partner with us, volunteer, donate, or simply learn more about our work, we're here to help.
                </p>

                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-center gap-3 group cursor-pointer">
                      <div className="p-2 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
                        <div className="text-yellow-600">{reason.icon}</div>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-yellow-700 transition-colors">
                        {reason.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border border-yellow-200">
                  <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
                  <p className="text-sm text-gray-600">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-fade-in">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-900">Message Sent!</h4>
                      <p className="text-sm text-green-700">Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-fade-in">
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-900">Sending Failed</h4>
                      <p className="text-sm text-red-700">Failed to send message. Please try again or email us directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Rest of your form fields remain the same */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="donation">Donation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Map Section with Google Maps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Find Us in Kitale
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: '450px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.237183714185!2d34.99754147409901!3d1.0176602989246704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780fc5b54b5f7c5%3A0x1d5d4d8a7c8b1b8e!2sKitale!5e0!3m2!1sen!2ske!4v1691234567890!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hopeful Destiny Location in Kitale"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://maps.google.com/?q=Kitale,Trans+Nzoia,Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white rounded-full font-semibold hover:bg-yellow-700 transition-all transform hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactPage;
