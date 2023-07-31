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
      <Container
        fluid
        style={{
          backgroundColor: '#8B6C50',
          height: '450px',
          width: '72%',
          borderRadius: '15px',
          position: 'relative',
          transform: 'translateX(0px) translateY(260px)',
          boxShadow:
            '0 14px 12px 0 rgba(0, 0, 0, 0.4), 0 1px 60px 0 rgba(0, 0, 0, 0.30)',
        }}
      >
        <div style={{ textAlign: 'right', position: 'relative', left: -90, top: -220 }}>
          <Col md={9}>
            <div style={{ height: '250px' }} />

            <Form onSubmit={handleSubmit}>
              <Row className="justify-content-center mt-3">
                <Col md={6}>
                  <Form.Group controlId="formName">
                    <Form.Label style={{ color: 'white' }}>שם מלא</Form.Label>
                    <Form.Control
                      style={{
                        textAlign: 'right',
                        boxShadow:
                          '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)',
                      }}
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formInstagram">
                    <Form.Label style={{ color: 'white' }}>אינסטגרם</Form.Label>
                    <Form.Control
                      style={{
                        textAlign: 'right',
                        boxShadow:
                          '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)',
                      }}
                      type="text"
                      value={instagram}
                      onChange={(event) => setInstagram(event.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label style={{ color: 'white' }}>מספר טלפון</Form.Label>
                    <Form.Control
                      style={{
                        textAlign: 'right',
                        boxShadow:
                          '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)',
                      }}
                      type="text"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Label style={{ color: 'white' }}>הודעה</Form.Label>
                    <Form.Control
                      style={{
                        textAlign: 'right',
                        boxShadow:
                          '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)',
                      }}
                      as="textarea"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </Form.Group>

                  <br />
                  <Button
                    variant="success"
                    type="submit"
                    style={{
                      width: '40%',
                      position: 'relative',
                      left: '-29%',
                      boxShadow:
                        '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)',
                    }}
                  >
                    !שלח פרטים
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </div>
      </Container>

      <div style={{ color: 'white', position: 'absolute', left: '64%', transform: 'translateY(-90%)' }}>
        <h3>קבלת ייעוץ לפגישה</h3>

        <div style={{ textAlign: 'right', position: 'relative', left: '-25%', transform: 'translateY(22%)' }}>
          ,אני מאפשרת דיאלוג ראשוני למען תיאום והבנה של התהליך<br />
          .נושא ומהות התהליך ועוד פרטים עניניים<br />
          <br />
          !מלאו פרטים ואחזור אליכם עם כל המידע הדרוש תוך 24 שעות
        </div>
      </div>

      <img
        style={{ position: 'relative', bottom: -65, left: '65%', filter: 'invert(100%)' }}
        className="d-block w-10"
        src={require('../../images/24.png')}
        alt="24 hours"
        height="170"
        width="170"
      />
    </div>
  );
};

export default Callback;
