import Link from "next/link";
import style from "./page.module.css";
import WaitListForm from "./form";
import ActiveUsers from "./active-users";

export default function Home() {
    return (
        <main className={style.page}>
            <header className={style.header}>
                <h2 className={style.title}>AI Resume Builder</h2>
                <Link href="https://github.com/rwd-lol/ai-resume-builder" target="_blank" className={style.github}>
                    <span className={style.git}>GitHub</span>
                    <span>1+</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M11.5 2.3a.5.5 0 0 1 1 0L14.8 7a2.1 2.1 0 0 0 1.6 1l5.1.8a.5.5 0 0 1 .3.9l-3.7 3.6a2.1 2.1 0 0 0-.6 2l.9 5a.5.5 0 0 1-.8.6L13 18.6a2.1 2.1 0 0 0-2 0L6.4 21a.5.5 0 0 1-.8-.5l1-5.2a2.1 2.1 0 0 0-.7-1.9L2.2 9.8a.5.5 0 0 1 .3-1l5.1-.7A2.1 2.1 0 0 0 9.2 7z" />
                    </svg>
                </Link>
            </header>
            <section className={style.main}>
                <h1 className={style.title}>
                    The open source <br /> AI Resume Builder.
                </h1>
                <p className={style.text}>Professional resume editing. ATS Resume Checker. AI Writer.</p>
                <WaitListForm />
                <div className={style.active_user}>
                    <div className={style.active_user}></div> <ActiveUsers/> { " "}
                    <span className={style.span}>people already joined</span>
                </div>
            </section>
            <footer className={style.footer}>
                <div>
                    <span className={style.text}>Currently in beta • Open source on</span>{" "}
                    <Link href="https://github.com/rwd-lol/ai-resume-builder" target="_blank" className={style.link}>
                        GitHub 1+
                    </Link>
                </div>
            </footer>
        </main>
    );
}
