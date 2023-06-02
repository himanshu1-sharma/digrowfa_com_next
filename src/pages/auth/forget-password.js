import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/LoginSignup.module.css"
import Image from "next/image";
import Head from 'next/head'
import Link from "next/link"
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import Form from 'react-bootstrap/Form';

export default function ForgetPassword() {

    const [selected, setSelected] = useState("phone")

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
                                            <h1>Reset <br /> <span>Password</span></h1>
                                            <p>Enter your email/phone number, we’ll
                                                send you an OTP.</p>
                                            <div className={styles.forgetOtpOption}>
                                                {['radio'].map((type) => (
                                                    <div key={`inline-${type}`} className="mb-3">
                                                        <Form.Check
                                                            inline
                                                            label="Phone Number"
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-1`}
                                                            value="phone"
                                                            onChange={(e) => setSelected(e.target.value)}
                                                            checked={selected === "phone"}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Email"
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-2`}
                                                            value="email"
                                                            onChange={(e) => setSelected(e.target.value)}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <Form>
                                                {selected === "phone" ?
                                                    <div className={styles.phoneInput}>
                                                        <PhoneInput
                                                            placeholder={"Enter Your Number with Country Code"}
                                                            country={"in"}
                                                        />
                                                    </div>

                                                    :
                                                    <div className={styles.selecteMargin}>
                                                        <div className={styles.formGroup}>
                                                            <Form.Control type="email" placeholder="Email" />
                                                        </div>
                                                    </div>

                                                }


                                                <div className={styles.formBtn}>
                                                    <button type="button">Send Code</button>
                                                </div>

                                                <div className={styles.orDivider}></div>

                                                <div className={styles.checkAccount} id="checkAccount">
                                                    Back to <Link href="/auth/login">Login</Link>
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
