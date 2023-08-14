import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Accordion, Button } from 'react-bootstrap';
import { deleteCallbackAsync, getCallbacksAsync, selectAllCallbacks } from './administratorSlice';
import { toast } from 'react-toastify';
import { logoutAsync, reset } from '../authentication/authenticationSlice';



const Portal = () => {


const dispatch = useAppDispatch();

  const callbacks = useAppSelector(selectAllCallbacks);


  useEffect(() => {
    dispatch(getCallbacksAsync());
  }, [dispatch]);


const handleCallbackDelete = async (id: string) => {
  try {
    await dispatch(deleteCallbackAsync(id));
    const deletedCallback = callbacks.find((callback) => callback.id === id);
    if (deletedCallback) {
      toast.success(`הפרטים של ${deletedCallback.name} נמחקו בהצלחה!`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  } catch (error) {
    toast.error('.שגיאה במחיקת השיחה. נסה שוב');
  }
};

  return (

    <div style = {{overflow: "hidden"}}>


<div style={{ height: '10vh' }} />
<div style={{ display: 'flex', justifyContent: 'center', minHeight: '70vh', backgroundColor: "#002c50"}}>
        <div style={{ textAlign: 'right', overflow: 'hidden', width: 300}}>
          <br/>
          <h1 style = {{color: "white", display: 'flex', justifyContent: 'center'}}>השאירו פרטים</h1>
          <br/>

          <Accordion>
            {[...callbacks].reverse().map((callback, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  <h4>
                  {callback.name}
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>@{callback.instagram} :אינסטגרם</p>
                  <p>מספר טלפון: {callback.phone_number}</p>
                  <p>הודעה: {callback.message}</p>

                  <p style={{ position: "absolute", transform: "translateY(-30px)" }}>
                <span>
                <a onClick={() => handleCallbackDelete(callback.id)} style={{ color: "red", cursor: "pointer" }}>מחק</a>
                </span>
              </p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <div style={{ height: '10vh' }} />
        </div>

      </div>
      <div style={{ height: '10vh' }} />
    </div>

  )
}

export default Portal