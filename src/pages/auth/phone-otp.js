import React, { useState } from 'react'
import styles from "@/styles/LoginSignup.module.css"
import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer/Footer"
import Form from 'react-bootstrap/Form';
import OtpInput from 'react-otp-input';

export default function PhoneOtp() {

    const [otp, setOtp] = useState('');

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
                                            <h1>Verification</h1>
                                            <p>We have Sent a 6 Digits code on your Mobile number</p>
                                            <h2>Enter <span>OTP</span></h2>
                                            <Form>
                                                <div className={styles.optInput} id="otpInput">
                                                    <OtpInput
                                                        value={otp}
                                                        onChange={setOtp}
                                                        numInputs={6}
                                                        renderSeparator={<span>-</span>}
                                                        renderInput={(props) => <input {...props} />}
                                                    />
                                                </div>
                                                <div className={styles.smsWaiting} id="smsWaiting">
                                                    <h6>Waiting for SMS</h6>
                                                    <h6>9555271705 <Link href="/auth/signup">Edit</Link></h6>
                                                    <h6><span>Resend</span></h6>
                                                </div>
                                                <div className={styles.formBtn}>
                                                    <button type="button">Next</button>
                                                </div>

                                                <div className={styles.checkAccount} id="checkAccount">
                                                    Have an Account? <Link href="/auth/login">Login</Link>
                                                </div>

                                                <div className={styles.safe}>
                                                    <Image src="/auth/safeDark.png" alt="safe" width={172} height={34} id="darkLogo" />
                                                    <Image src="/auth/safeLight.png" alt="safe" width={172} height={34} id="lightLogo" />
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
