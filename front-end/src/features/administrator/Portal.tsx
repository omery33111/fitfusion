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
      toast.success(`הפרטים של '${deletedCallback.name}' נמחקו בהצלחה!`, {
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

  const onLogout = () => {
    dispatch(logoutAsync());
    dispatch(reset());
    window.location.href = "/";
  };
  
  return (

    <div style={{ overflow: "hidden" }}>
      <div style={{ height: '10vh' }} />
      <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#002c50"}}>
        <div style={{ textAlign: 'right' }}>
          <br/>
          <h1 style = {{color: "white", position: "relative", right: "-15%"}}>השאירו פרטים</h1>
          <br/>

          <Accordion>
            {[...callbacks].reverse().map((callback, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  {callback.name}
                </Accordion.Header>
                <Accordion.Body>
                  <p>@{callback.instagram} :אינסטגרם</p>
                  <p>מספר טלפון: {callback.phone_number}</p>
                  <p>הודעה: {callback.message}</p>

                  <p style={{ position: "absolute", right: "", transform: "translateY(-30px)" }}>
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