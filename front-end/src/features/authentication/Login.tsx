import { useEffect, useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useNavigate } from 'react-router-dom';
import { loginAsync, reset } from "./authenticationSlice"
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';



const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

      const { username, password } = formData;

      const navigate = useNavigate();
      const dispatch = useAppDispatch();

      const { userName, isSuccess } = useAppSelector(
        (state) => state.authentication
      );


      useEffect(() =>
      {
          if (isSuccess)
          {
              navigate("/")
          }

          dispatch(reset())

      }, [userName, isSuccess, navigate, dispatch])


      const onChange = (e:any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
      };

const onSubmit = (e: any) => {
  e.preventDefault();

  const userData = {
    username,
    password,
  };

  dispatch(loginAsync(userData))
    .then(() => {
      toast.success(`ברוך שובך ${username}!`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    })
    .catch(() => {
      toast.error('.שגיאה בהתחברות. נסה שוב');
    });
};

  return (
    <div style = {{backgroundColor: "#002c50"}}>
    <div className="container d-flex justify-content-center">
      
  <form className="form-group col-md-6" onSubmit={onSubmit}>
  <div style = {{height: "200px"}} />
  <h1 className="text-center" style = {{color: "white"}}>
      <FaSignInAlt /> התחברות
    </h1>
    <p className="text-center" style = {{color: "white"}}>הזן את פרטי המשתמש</p>

    <div className="form-group">
      <input
      style = {{textAlign: "right"}}
        type="text"
        className="form-control"
        id="username"
        name="username"
        value={username}
        placeholder="הזן שם משתמש"
        onChange={onChange}
      />
    </div><br/>

    <div className="form-group">
      <input
      style = {{textAlign: "right"}}
        type="password"
        className="form-control"
        id="password"
        name="password"
        value={password}
        placeholder="סיסמה"
        onChange={onChange}
      />
    </div><br/>

    <div className="form-group text-center">
      <Button type="submit" className="btn btn-warning">
        התחברות
      </Button><br/><br/>
    </div>
  </form>
  
</div>
<div style = {{height: 400}}/>
</div>


  )
}

export default Login