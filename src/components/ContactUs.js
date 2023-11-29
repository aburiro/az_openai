import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactUs() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    feedback: '', // Added feedback field
  });

  function submitInfo() {
    console.log(userInfo);
  }

  return (
    <div style={{ backgroundColor: '#e5e5e5' }}>
      <div className={'container p-4'}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control
            value={userInfo.username}
            onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
            type="text"
            placeholder="e.g John"
          />
          <Form.Text className="text-muted">Enter Name Here for Contact</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFeedback">
          <Form.Label>Feedback</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={userInfo.feedback}
            onChange={(e) => setUserInfo({ ...userInfo, feedback: e.target.value })}
            placeholder="Enter your feedback here"
          />
        </Form.Group>
        <Button onClick={submitInfo} variant="dark">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ContactUs;
