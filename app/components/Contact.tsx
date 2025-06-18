'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);

    try {
      const response = await fetch('https://formspree.io/f/your_form_id', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } catch (err) {
      setError('Error submitting the form. ' + err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="bg-bg-subtle dark:bg-bg-subtle-dark rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-text-base dark:text-text-base-dark mb-6">Contact Me</h2>
        {submitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Thanks for reaching out!
            </h3>
            <p className="text-text-muted dark:text-text-muted-dark">
              I’ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-bg-surface dark:bg-bg-surface-dark text-text-base dark:text-text-base-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-bg-surface dark:bg-bg-surface-dark  text-text-muted dark:text-text-muted-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-bg-surface dark:bg-bg-surface-dark text-text-muted dark:text-text-muted-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
              />
            </div>
            {error && <p className="text-text-warning dark:text-text-warning-dark">{error}</p>}
            <button
              type="submit"
              className="w-full bg-primary dark:bg-primary-dark hover:bg-primary-hover dark:hover:bg-primary-hover-dark text-text-base-dark dark:text-text-base font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
