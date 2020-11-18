import React, { useEffect, useState } from 'react'
import "./effect.css";
import { Message } from './Message';
export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: '',
        email: ""
    });
    const { name, email } = formState;
    useEffect(() => {
        // console.log('hey');
    }, []);
    useEffect(() => {
        // console.log('form state cambio');
    }, [formState]);
    useEffect(() => {
        // console.log('email state cambio');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }
    return (
        <>
            <h1>UseEffect</h1>
            <hr />
            <div className="form-group">
                <input type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                ></input>

            </div>
            <div className="form-group">
                <input type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                ></input>

            </div>
            {(name === '123') && <Message />}
        </>
    )
}
