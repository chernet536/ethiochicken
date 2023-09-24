import React from 'react';

function ContactForm() {
  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={{textAlign:'center'}}>Contact Us</h2>
        <form style={formStyle}>
          <label style={labelStyle}>Name:</label>
          <input type="text" style={inputStyle} />

          <label style={labelStyle}>Email:</label>
          <input type="email" style={inputStyle} />

          <label style={labelStyle}>Subject:</label>
          <input type="text" style={inputStyle} />

          <label style={labelStyle}>Message:</label>
          <textarea style={messageStyle}></textarea>

          <button style={buttonStyle} type="submit">Send</button>
        </form>
      </div>

      <div style={infoContainerStyle}>
        <h3>Get in Touch</h3>
        <p>Address:  Ethio China St, Addis Ababa 1000</p>
        <p>Phone:  094 416 8359</p>
        <p>Email: info@ethiochicken.com.com</p>
        <p>Website: www.ethiochicken.com</p>
      </div>
    </div>
  );
}

// Inline CSS styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap:'15px',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '20px',
};

const formContainerStyle = {
  width: '50%',
};

const infoContainerStyle = {
  marginRight:'30px',
  marginTop:'50px',
  width: '50%',
};

const formStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  maxWidth: '500px',
  margin: '0 auto',
};

const labelStyle = {
  fontWeight: 'bold',
  marginBottom: '5px',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
};

const messageStyle = {
  marginBottom: '10px',
  padding: '10px',
  height: '100px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#8a181b',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',
};

const infoStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

export default ContactForm;