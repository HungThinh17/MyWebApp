import React, { FC, FormEvent, useState } from 'react';

// Types
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  content: string;
}

// Constants
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Address',
    content: 'Danang, Vietnam'
  },
  {
    icon: 'fas fa-envelope',
    title: 'Mail Us',
    content: 'nphung75@gmail.com'
  },
  {
    icon: 'fa fa-phone-alt',
    title: 'Telephone',
    content: '(+84) 988172302'
  }
];

const INITIAL_FORM_STATE: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  project: '',
  subject: '',
  message: ''
};

// Components
const ContactHeader: FC = () => (
  <div className="col-12 col-lg-3">
    <div className="about-header h-100 bg-dark pt-6 pe-6 pb-6">
      <div 
        className="text-start d-flex flex-column justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <p className="text-white sub-title">Contact Me</p>
        <h1 className="display-6 text-white mb-0">Let's Start A New Project</h1>
      </div>
    </div>
  </div>
);

const ContactInfoItem: FC<ContactInfo> = ({ icon, title, content }) => (
  <div className="d-flex mb-4">
    <div className="btn-xl-square bg-primary text-white me-3">
      <i className={icon}></i>
    </div>
    <div>
      <h4>{title}</h4>
      <p className="mb-0">{content}</p>
    </div>
  </div>
);

const ContactInformation: FC = () => (
  <div className="col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
    <p className="mb-4">
      The contact form is currently inactive. Get a functional and working
      contact form with Ajax & PHP in a few minutes. Just copy and paste the files,
      add a little code and you're done.{' '}
      <a 
        className="text-primary fw-bold"
        href="https://htmlcodex.com/contact-form"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Now
      </a>.
    </p>
    {CONTACT_INFO.map((info, index) => (
      <ContactInfoItem key={index} {...info} />
    ))}
  </div>
);

interface FormInputProps {
  type: string;
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
}

const FormInput: FC<FormInputProps> = ({ type, id, label, value, onChange, isTextArea }) => (
  <div className="form-floating">
    {isTextArea ? (
      <textarea
        className="form-control border-0"
        id={id}
        placeholder={label}
        value={value}
        onChange={onChange}
        style={{ height: '120px' }}
      />
    ) : (
      <input
        type={type}
        className="form-control border-0"
        id={id}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    )}
    <label htmlFor={id}>{label}</label>
  </div>
);

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="col-xl-7 wow fadeInUp" data-wow-delay="0.3s">
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-lg-12 col-xl-6">
            <FormInput
              type="text"
              id="name"
              label="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-lg-12 col-xl-6">
            <FormInput
              type="email"
              id="email"
              label="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-lg-12 col-xl-6">
            <FormInput
              type="tel"
              id="phone"
              label="Your Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-lg-12 col-xl-6">
            <FormInput
              type="text"
              id="project"
              label="Your Project"
              value={formData.project}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <FormInput
              type="text"
              id="subject"
              label="Subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <FormInput
              type="text"
              id="message"
              label="Message"
              value={formData.message}
              onChange={handleInputChange}
              isTextArea
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100 py-3">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const GoogleMap: FC = () => (
  <div className="col-12 wow fadeInUp" data-wow-delay="0.5s">
    <div className="rounded">
      <iframe
        className="rounded w-100"
        style={{ height: '400px' }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61351.48300815842!2d108.22263744510775!3d16.041202453674817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2sDa%20Nang%2C%20Vietnam!5e0!3m2!1sen!2ssa!4v1737081207212!5m2!1sen!2ssa"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      />
    </div>
  </div>
);

const Contact: FC = () => {
  return (
    <div className="container-fluid" id="pigraContact">
      <div className="container">
        <div className="row g-0">
          <ContactHeader />
          <div className="col-lg-9">
            <div className="contact-content h-100 pt-6 ps-6 pb-6">
              <div className="bg-light p-4">
                <div className="row g-5">
                  <ContactInformation />
                  <ContactForm />
                  <GoogleMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
