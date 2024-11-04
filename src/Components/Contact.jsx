import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validasi
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Jika berhasil, reset form dan tampilkan pesan sukses
    setSuccessMessage('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="py-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Contact</h1>
      <p className="text-gray-600 mb-5">
        Feel free to reach out if you'd like to connect
      </p>

      {successMessage && (
        <p className="text-green-500 mb-5">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={`w-full p-3 border border-gray-300 rounded ${errors.name ? 'border-red-500' : ''}`}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`w-full p-3 border border-gray-300 rounded ${errors.email ? 'border-red-500' : ''}`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Message"
          className={`w-full p-3 border border-gray-300 rounded h-32 ${errors.message ? 'border-red-500' : ''}`}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <button
          type="submit"
          className="w-full bg-cyan-600 text-white rounded-full font-semibold text-lg p-4 hover:bg-cyan-500 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
