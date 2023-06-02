import React, { useState } from 'react'
import styles from "@/styles/LoginSignup.module.css"
import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer/Footer"
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

export default function Login() {

    const [isPasswordShow, setIsPasswordShow] = useState(false)

    return (
        <>
            <Head>
                <title>Digrowfa | Digitally Grow Fast</title>
                <meta name="description" content="World's 1st Complete Digital Growth Platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="container-fluid p-0">
                <div className={styles.authBg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"></div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className={styles.formContainer}>
                                    <div className={styles.formBox}>
                                        <div className={styles.formContent} id="formContent">
                                            <h1>Welcome</h1>
                                            <p>Enter your credential to access your account</p>
                                            <h2>Log In <br /> To Your <span>Account</span></h2>
                                            <Form>
                                                <div className='mt-5'>
                                                    <div className={styles.loginForm}>
                                                        <svg width="22" height="22" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.22" clip-path="url(#clip0_252_3257)">
                                                                <path d="M7.00147 8.69715C12.0635 8.69715 12.8228 8.98027 12.8228 10.7809C12.8228 11.7236 12.6197 12.2502 11.7074 12.539C11.0991 12.7077 10.4713 12.8028 9.83855 12.8221C9.73261 12.8221 9.61783 12.8221 9.50011 12.8391C8.81438 12.8703 7.99033 12.8816 7.00147 12.8816C4.57347 12.8816 3.13433 12.8193 2.29262 12.5532C1.38322 12.2502 1.17721 11.7236 1.17721 10.7809C1.17721 8.97461 1.9424 8.69715 7.00147 8.69715ZM7.00147 7.5647C2.64873 7.5647 0 7.5647 0 10.7809C0 11.8171 0.217784 13.0741 1.92474 13.612C2.94597 13.9348 4.49695 13.9971 7.00147 13.9971C8.09334 13.9971 8.90561 13.9829 9.55308 13.9546L9.91802 13.9348C10.6456 13.9168 11.3678 13.8083 12.0664 13.612C13.7704 13.0741 13.9882 11.8171 13.9882 10.7809C13.9882 7.5647 11.3395 7.5647 6.9897 7.5647H7.00147Z" fill="#000813" />
                                                                <path d="M6.6748 11.0273H11.213" stroke="#000813" stroke-width="0.970677" stroke-miterlimit="10" stroke-linecap="round" />
                                                                <path d="M7.13111 6.57951C8.85728 6.57951 10.2566 5.23338 10.2566 3.57284C10.2566 1.9123 8.85728 0.566162 7.13111 0.566162C5.40495 0.566162 4.00562 1.9123 4.00562 3.57284C4.00562 5.23338 5.40495 6.57951 7.13111 6.57951Z" stroke="#000813" stroke-width="0.970677" stroke-miterlimit="10" stroke-linecap="round" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_252_3257">
                                                                    <rect width="14" height="14" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                        <Form.Control type="text" placeholder="Handlename / Phone / Email" />
                                                    </div>
                                                    <div className={styles.loginForm}>
                                                        <svg width="28" height="20" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.22">
                                                                <path d="M3.71905 5.76731H10.2865C11.7601 5.76731 12.9546 6.96184 12.9546 8.43536V12.54C12.9546 14.0136 11.7601 15.2081 10.2865 15.2081H3.71905C2.24553 15.2081 1.05101 14.0136 1.05101 12.54V8.43536C1.05101 6.96184 2.24553 5.76731 3.71905 5.76731Z" stroke="#000813" stroke-width="1.2314" />
                                                                <path d="M4.54004 5.15156V3.50968C4.54004 2.14951 5.64268 1.04688 7.00285 1.04688V1.04688C8.36302 1.04688 9.46566 2.14951 9.46566 3.50968V5.15156" stroke="#000813" stroke-width="1.2314" stroke-linecap="round" stroke-linejoin="round" />
                                                                <circle cx="7.00271" cy="10.898" r="1.64187" fill="#000813" />
                                                            </g>
                                                        </svg>
                                                        <Form.Control type={isPasswordShow ? "text" : "password"} placeholder="Password" />
                                                        <div className={styles.passwordIcon} onClick={() => setIsPasswordShow(!isPasswordShow)}>
                                                            {isPasswordShow ?
                                                                <div className={styles.passwordShow}>
                                                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.0644 4.54836C10.7317 4.54836 11.3717 4.81345 11.8436 5.28532C12.3155 5.75719 12.5806 6.39717 12.5806 7.06449C12.5806 7.73181 12.3155 8.3718 11.8436 8.84367C11.3717 9.31553 10.7317 9.58062 10.0644 9.58062C9.39711 9.58062 8.75712 9.31553 8.28526 8.84367C7.81339 8.3718 7.5483 7.73181 7.5483 7.06449C7.5483 6.39717 7.81339 5.75719 8.28526 5.28532C8.75712 4.81345 9.39711 4.54836 10.0644 4.54836ZM10.0644 0.77417C14.258 0.77417 17.8393 3.38256 19.2902 7.06449C17.8393 10.7464 14.258 13.3548 10.0644 13.3548C5.87088 13.3548 2.28959 10.7464 0.838623 7.06449C2.28959 3.38256 5.87088 0.77417 10.0644 0.77417ZM2.66701 7.06449C3.3449 8.44862 4.39752 9.6148 5.70522 10.4304C7.01291 11.2461 8.52321 11.6785 10.0644 11.6785C11.6056 11.6785 13.1159 11.2461 14.4236 10.4304C15.7313 9.6148 16.784 8.44862 17.4618 7.06449C16.784 5.68036 15.7313 4.51419 14.4236 3.69854C13.1159 2.88289 11.6056 2.45048 10.0644 2.45048C8.52321 2.45048 7.01291 2.88289 5.70522 3.69854C4.39752 4.51419 3.3449 5.68036 2.66701 7.06449Z" fill="#000813" />
                                                                    </svg>
                                                                </div>

                                                                :
                                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.54843 1.4199L2.62197 0.354736L16.6452 14.378L15.58 15.4515L12.9968 12.8683C12.0323 13.187 11.0091 13.3547 9.93552 13.3547C5.74197 13.3547 2.16068 10.7463 0.709717 7.06441C1.28843 5.58828 2.21101 4.28828 3.3852 3.25667L1.54843 1.4199ZM9.93552 4.54828C10.6028 4.54828 11.2428 4.81338 11.7147 5.28524C12.1866 5.75711 12.4517 6.39709 12.4517 7.06441C12.4521 7.35005 12.4039 7.63367 12.3091 7.90312L9.09681 4.69087C9.36626 4.59608 9.64989 4.54786 9.93552 4.54828ZM9.93552 0.774091C14.1291 0.774091 17.7104 3.38248 19.1613 7.06441C18.4768 8.80323 17.3136 10.3125 15.8065 11.4173L14.6155 10.218C15.7754 9.41564 16.7108 8.33007 17.3329 7.06441C16.6549 5.68049 15.6022 4.51454 14.2945 3.6991C12.9868 2.88365 11.4766 2.45141 9.93552 2.45151C9.02133 2.45151 8.12391 2.60248 7.2852 2.87087L5.99359 1.58764C7.20133 1.06764 8.53488 0.774091 9.93552 0.774091ZM2.5381 7.06441C3.21615 8.44834 4.26884 9.61428 5.57652 10.4297C6.8842 11.2452 8.39442 11.6774 9.93552 11.6773C10.5142 11.6773 11.0846 11.6186 11.6129 11.5012L9.70068 9.58054C9.11708 9.51799 8.57247 9.25754 8.15744 8.8425C7.7424 8.42746 7.48195 7.88286 7.41939 7.29925L4.56778 4.43925C3.73746 5.15216 3.04133 6.04119 2.5381 7.06441Z" fill="#000813" />
                                                                </svg>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className={styles.detailModalBox}>
                                                        <Link href="/auth/forget-password">Forgot Password?</Link>
                                                    </div>
                                                </div>

                                                <div className={styles.formBtn}>
                                                    <button type="button">Login</button>
                                                </div>

                                                <div className={styles.checkAccount} id="checkAccount">
                                                    Create New Account! <Link href="/auth/signup">Sign Up</Link>
                                                </div>
                                            </Form>

                                        </div>
                                        <div className={styles.logoBox}>
                                            <Link href="/">
                                                <Image src="/logo/logo.webp" alt="digrowfa logo" width={163} height={38} id="darkLogo" />
                                                <Image src="/logo/digrowfa.webp" alt="digrowfa logo" width={163} height={38} id="lightLogo" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};
