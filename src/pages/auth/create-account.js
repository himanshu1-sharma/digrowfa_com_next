import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/LoginSignup.module.css"
import Image from "next/image";
import Head from 'next/head'
import Link from "next/link"
import Form from 'react-bootstrap/Form';

export default function CreateAccount() {

    const [image, setImage] = useState("");
    const [imgPrev, setImgPrev] = useState();


    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImgPrev(reader.result);
            }
        };
        reader?.readAsDataURL(file);
    };


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
                                            <Form>
                                                <div className={styles.profileFormGroupImg}>
                                                    <label for="file">
                                                        {/* <img
                                                            src='/icons/addProfile.png'
                                                            alt="editProfile"
                                                            className="img-fluid"
                                                        /> */}
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="file"
                                                        name="file"
                                                        onChange={(e) => uploadFileHandler(e)}
                                                        hidden
                                                    />
                                                    <div className={styles.userProfilePic}>
                                                        <div className={styles.userProfilePicPrew} style={{ backgroundImage: `url(${imgPrev})` }}></div>
                                                    </div>
                                                </div>
                                                <div id="formGroup">
                                                    <div className={styles.formGroup}>
                                                        <Form.Control type="text" placeholder="Full Name" />
                                                    </div>
                                                    <div className={styles.formGroup}>
                                                        <Form.Control type="email" placeholder="Email" />
                                                    </div>
                                                    <div className={styles.formGroup}>
                                                        <div className={styles.handleName} id="handleName">
                                                            <span>@</span>
                                                            <Form.Control type="text" placeholder="Create Handle Name" />
                                                        </div>
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
