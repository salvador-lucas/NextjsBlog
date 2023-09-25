import ContactForm from '@/components/contact/contact-form';
import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const ContactPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact page</title>
        <meta name="description" content="Contact page" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
