import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/LoginSignup.module.css"
import Image from "next/image";
import Head from 'next/head'
import Link from "next/link"
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function Signup() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Head>
                <title>Digrowfa | Digitally Grow Fast</title>
                <meta name="description" content="World's 1st Complete Digital Growth Platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <section className="container-fluid p-0">
                <div className={styles.authBg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"></div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className={styles.formContainer}>
                                    <div className={styles.formBox}>
                                        <div className={styles.formContent} id="formContent">
                                            <h1>Hey !</h1>
                                            <p>You are a few moments away from your
                                                online business platform</p>
                                            <h2>Create <br />
                                                New <span>Account</span></h2>
                                            <Form>
                                                <div className={styles.phoneInput}>
                                                    <PhoneInput
                                                        placeholder={"Enter Your Number with Country Code"}
                                                        country={"in"}
                                                    />
                                                    <div className={styles.detailModalBox}>
                                                        <i onClick={() => setModalShow(true)}>Why do i need to provide my phone?</i>
                                                    </div>
                                                </div>
                                                <div className={styles.formCheck}>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="accept" defaultChecked />
                                                        <label className="form-check-label" htmlFor="accept">
                                                            Digrowfa helps you to grow your online. By signing in, you agree to our <Link href="">Terms of Use</Link> & <Link href="">Privacy Policy</Link>
                                                        </label>
                                                    </div>
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


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="detailModal"
        >
            <Modal.Body>
                <div className="detailModalContent">
                    <h4>Phone Number</h4>
                    <p>
                        Digrowfa users your phone number to confirm you identity and keep our platform as authentic as possible
                    </p>
                </div>
                <div className="detailModalBtn">
                    <button onClick={props.onHide}>ok</button>
                </div>
            </Modal.Body>
        </Modal>
    );
}