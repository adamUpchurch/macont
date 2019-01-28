import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import Form from'../../components/Form';
import MediaQuery from 'react-responsive';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact us</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={true} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 intro intro-small">
          <h1>Or how about we contact you?</h1>
        </div>
      </div>
      <div className='row'>
        <div className="col-12 col-6 ">
          <Form />
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
