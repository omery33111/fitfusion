import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useAppDispatch } from '../../app/hooks';
import { postCallbackAsync } from './callbackSlice';
import { toast } from 'react-toastify';

const Callback = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [instagram, setInstagram] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const callbackData = {
      name: name,
      instagram: instagram,
      phone_number: phoneNumber,
      message: message || 'ללא הודעה.',
    };

    try {
      await dispatch(postCallbackAsync(callbackData));
      toast.success('הפרטים התקבלו בהצלחה!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setName('');
      setInstagram('');
      setPhoneNumber('');
      setMessage('');
    } catch (error) {
      toast.error('.פרטים שגויים. נסה שוב');
    }
  };

  return (
    
    <div>
    <Container fluid style={{ width: "80%", backgroundColor: '#505666', borderRadius: '15px', padding: '15px',
                              boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.6), 0 1px 40px 0 rgba(0, 0, 0, 0.50)' }}>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div style={{ textAlign: 'right', color: 'white' }}>
              <br/>
            <p>קבלת ייעוץ לפגישה
              <br/>
              <br/>
              <div>
                <p>
              אני מאפשר דיאלוג ראשוני למען תיאום והבנה של התהליך, דרך וצורת התהליך ועוד פרטים עניניים.
            מלאו פרטים ואחזור אליכם עם כל המידע הדרוש תוך 24 שעות
              </p>
              </div>
            </p>
          </div>

          <br />

          <Form onSubmit={handleSubmit} className="text-center">
            <Form.Group controlId="formName" style = {{textAlign: "right"}}>
              <Form.Label style={{ color: 'white' }}>שם מלא</Form.Label>
              <Form.Control
              style = {{textAlign: "right"}}
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formInstagram" style = {{textAlign: "right"}}>
              <Form.Label style={{ color: 'white' }}>אינסטגרם</Form.Label>
              <Form.Control
              style = {{textAlign: "right"}}
                type="text"
                value={instagram}
                onChange={(event) => setInstagram(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" style = {{textAlign: "right"}}>
              <Form.Label style={{ color: 'white' }}>מספר טלפון</Form.Label>
              <Form.Control
              style = {{textAlign: "right"}}
                type="text"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" style = {{textAlign: "right"}}>
              <Form.Label style={{ color: 'white' }}>הודעה</Form.Label>
              <Form.Control
              style = {{textAlign: "right"}}
                as="textarea"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Form.Group>

            <br/>
            <br/>

            <Button variant="warning" type="submit" style={{width: '70%'}}>
              <b>!שלח פרטים</b>
            </Button>
            <br /><br />
          </Form>
        </Col>

        <Col md={4} lg={4} className="text-center">
        <img
          src={require('../../images/24.png')}
          alt="24 hours"
          height="100%"
          width="100%"
          style={{
            filter: "brightness(0) invert(1)",
            position: "relative"}}/>
        </Col>
      </Row>

      
    </Container>

          


    </div>
  );
};

export default Callback;
