
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

const Register = () => {
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
      <h2 className="registerTitle text-3xl sm:text-5xl text-white text-gradient my-1 p-2 my-rem">ثبت نام </h2>
      <form className="registerForm">
        <input
          autocomplete="off"
          className="textInput"
          type="text"
          name="name"
          placeholder="نام"
          onChange={onChange}
        />

        <input
          autocomplete="off"
          className="textInput"
          type="text"
          name="email"
          placeholder="ایمیل"
          onChange={onChange}
        />

        <input
          autocomplete="off"
          className="textInput"
          type="text"
          name="شماره تلفن"
          placeholder="شماره تلفن"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="password"
          name="password"
          placeholder="پسسوورد"
          onChange={onChange}
        />

       
        <div className='termsWrapper'>
        <label className="touCheckboxLabel">
        رعایت شرایط و ضوابط
        </label>
          <input
            className="touCheckbox"
            type="checkbox"
            name="termsAccepted"
            onChange={onChange}
            
          />
          </div>

        {/* <p className={!validate(state) ? 'errorMessage' : 'invisible'}>
          پسوورد ها باهم همخوانی ندارند
        </p> */}

        <button
          className={!validate(state) ? 'disabled text-white w-2/5 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full' : 'text-white w-2/5 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'}
          onClick={handleClick}
          disabled={!validate(state)}
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default Register;
