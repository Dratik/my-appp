import React, { useRef } from 'react';

export default function Register(props) {
    const nameEl = useRef(null);
    const passwordEl = useRef(null);
    const address = useRef(null);
    const email = useRef(null);
    const phoneno = useRef(null);
    const rememberMeEl = useRef(null);


    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: nameEl.current.value,
            password: passwordEl.current.value,
            address: address.current.value,
            email: email.current.value,
            phoneno: phoneno.current.value,
            rememberMeEl: rememberMeEl.current.checked,
        }
        console.log(data);

        // Submit form details to login endpoint etc.
        // ...
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" ref={nameEl} />
            <input type="password" placeholder="password" ref={passwordEl} />
            <input type="text" placeholder="address" ref={address} />
            <input type="text" placeholder="email" ref={email} />
            <input type="text" placeholder="phoneno" ref={phoneno} />
            <label>
                <input type="checkbox" ref={rememberMeEl} />
           Remember me
         </label>
            <button type="submit" className="myButton">Login</button>
        </form>
    );
}