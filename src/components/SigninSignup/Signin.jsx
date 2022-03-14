
import React, { useState, useReducer } from 'react';
import './styles.css';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordRepeat: '',
  termsAccepted: false
};

function reducer(state, action) {
  if (action.name === 'termsAccepted') {
    //code checkbox
    return { ...state, termsAccepted: action.checked };
  } else {
    //code other inputs
    return { ...state, [action.name]: action.value };
  }
}

function validate(state) {
  return state.password === state.passwordRepeat && state.termsAccepted;
}

const Signin = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  function handleClick(e) {
    e.preventDefault();
    alert(`Hey ${state.name} you have successfully registered!`);
  }

  function onChange(e) {
    const { name, value, checked } = e.target;
    const action = { name, value, checked };
    dispatch(action);
  }

  return (
    <div className="wrapper white-glassmorphism">
      <h2 className="registerTitle registerTitle text-3xl sm:text-5xl text-white text-gradient my-1 p-2 my-rem"> وروود </h2>
      <form className="registerForm">
       

        <input
          autocomplete="off"
          className="textInput"
          type="text"
          name="email"
          placeholder="ایمیل"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="password"
          name="password"
          placeholder="پسسوورد"
          onChange={onChange}
        />

       

        {/* <p className={!validate(state) ? 'errorMessage' : 'invisible'}>
          پسوورد ها باهم همخوانی ندارند
        </p> */}

        <button
          className={'text-white w-2/5 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'}
          onClick={handleClick}
          disabled={!validate(state)}
        >
          وروود
        </button>
      </form>
    </div>
  );
};

export default Signin;
