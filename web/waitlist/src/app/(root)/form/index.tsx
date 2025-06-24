"use client";

import style from "./index.module.css";
import { waitlist } from "./action";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

export default function WaitListForm() {
    const [state, action] = useActionState(waitlist, {error: ""});
    const { pending } = useFormStatus();

    return (
        <>
        <form action={action} className={style.form}>
            <input type="email" name="email" required disabled={pending} className={style.input}  />
            <button type="submit" className={style.button} disabled={pending}>
                <span className={style.span}>Join waitlist</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className={style.icon}>
                    <path
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M1 8h14m0 0-7.2 7M15 8 7.8 1"
                    />
                </svg>
            </button>
        </form>
        {state?.error !== "" && <p className={style.error}>{state?.error}</p>}
        </>
    );
}
