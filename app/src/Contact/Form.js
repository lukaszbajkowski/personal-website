import React from 'react';
import {useForm, ValidationError} from '@formspree/react';
import {Button} from "@mui/material";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";

function ContactForm () {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_KEY);

    if (state.succeeded) {
        // ogarnac to tutaj i destrukturyzacja oraz error message style
        return <p>Thanks for joining!</p>;
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
                prefix="Name"
                field="name"
                errors={state.errors}
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
                prefix="Email"
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

function Form () {
    return (
        <ContactForm/>
    );
}

export default Form;