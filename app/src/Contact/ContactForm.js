import React from 'react';
import {useForm, ValidationError} from '@formspree/react';
import {Button} from "@mui/material";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import SuccessInfo from "./SuccessInfo";
import './Contact.scss'

export default function ContactForm () {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_KEY);

    if (state.succeeded) {
        return <SuccessInfo/>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`form-width`}
        >
            <input
                id="name"
                type="text"
                name="Full Name"
                className={`email-input`}
                placeholder="Full Name"
                required
            />
            <ValidationError
                prefix="Full Name"
                field="name"
                errors={state.errors}
                className={`error-message`}
            />

            <input
                id="email"
                type="email"
                name="Email"
                className={`email-input`}
                placeholder="Email Address"
                required
            />
            <ValidationError
                prefix="Email Address"
                field="email"
                errors={state.errors}
                className={`error-message`}
            />

            <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Message"
                className={`email-area`}
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className={`error-message`}
            />

            <Button
                type="submit"
                disabled={state.submitting}
                className={`btn-send-form`}
            >
                <span>
                    Send message
                </span>
                <ArrowRightAltSharpIcon className={`arrow-border`}/>
            </Button>
        </form>
    );
}
