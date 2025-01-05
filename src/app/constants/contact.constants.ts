import {
  Country,
  HeroContent,
  Office,
} from '../components/shared/interfaces/solutions.interface';

export const CONTACT_CONSTANTS = {
  HERO: {
    header: 'Contact Us',
    text: 'Get in touch with our team to discuss how we can help your business grow',
    image: '/assets/pages/contact.jpg',
  } as HeroContent,

  CONTACT_INFO: {
    header: "Let's Connect",
    description:
      "Whether you're looking for IT solutions, talent acquisition services, or just want to learn more about what we do, we'd love to hear from you.",
    methods: {
      email: {
        title: 'Email',
        value: 'info@cozentech.com',
      },
      phone: {
        title: 'Phone',
        value: '+1 (629) 274-2295',
      },
      chat: {
        title: 'Live Chat',
        value: 'Available Monday to Friday, 9:00 AM - 6:00 PM PST',
      },
    },
  },

  FORM: {
    labels: {
      name: 'Full Name',
      companyName: 'Company Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
    },
    placeholders: {
      name: 'John Doe',
      companyName: 'Acme Corp',
      email: 'johndoe@acme.com',
      phone: '234567890',
      subject: 'Select a Subject',
      message: 'Write your message here',
    },

    submitButton: {
      text: 'Send Message',
      icon: 'send',
    },
  },

  OFFICES_SECTION: {
    header: 'Our Offices',
    description:
      'Visit us at one of our global offices or reach out to the location nearest to you.',
  },

  CONTACT_EMAIL: 'info@cozentech.com',

  FORM_SUBJECTS: [
    'IT Solutions',
    'Talent Acquisition',
    'Partnership',
    'General Inquiry',
  ],

  COUNTRIES: [
    { name: 'United States', code: 'US', dialCode: '+1', flag: 'US' },
    { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: 'GB' },
    { name: 'Canada', code: 'CA', dialCode: '+1', flag: 'CA' },
    { name: 'Australia', code: 'AU', dialCode: '+61', flag: 'AU' },
    { name: 'Germany', code: 'DE', dialCode: '+49', flag: 'DE' },
    { name: 'France', code: 'FR', dialCode: '+33', flag: 'FR' },
    { name: 'India', code: 'IN', dialCode: '+91', flag: 'IN' },
    { name: 'Japan', code: 'JP', dialCode: '+81', flag: 'JP' },
    { name: 'China', code: 'CN', dialCode: '+86', flag: 'CN' },
    { name: 'Brazil', code: 'BR', dialCode: '+55', flag: 'BR' },
    { name: 'Mexico', code: 'MX', dialCode: '+52', flag: 'MX' },
    { name: 'Spain', code: 'ES', dialCode: '+34', flag: 'ES' },
    { name: 'Italy', code: 'IT', dialCode: '+39', flag: 'IT' },
    { name: 'Netherlands', code: 'NL', dialCode: '+31', flag: 'NL' },
    { name: 'Singapore', code: 'SG', dialCode: '+65', flag: 'SG' },
  ] as Country[],

  DEFAULT_COUNTRY: {
    name: 'United States',
    code: 'US',
    dialCode: '+1',
    flag: 'US',
  } as Country,

  OFFICES: [
    {
      city: 'San Francisco',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (629) 274-2295',
      email: 'sf@cozentech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
    },
    {
      city: 'New York',
      address: '456 Madison Avenue, New York, NY 10022',
      phone: '+1 (629) 274-2295',
      email: 'ny@cozentech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
    },
    {
      city: 'London',
      address: '789 Tech Hub, London EC2A 4NE, UK',
      phone: '+44 20 7123 4567',
      email: 'uk@cozentech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
    },
  ] as Office[],
};
