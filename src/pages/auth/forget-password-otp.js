import React, { useState } from "react";
import styles from "@/styles/LoginSignup.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Form from "react-bootstrap/Form";
import OtpInput from "react-otp-input";

export default function ForgetPasswordOTP() {
  const [otp, setOtp] = useState("");

  return (
    <>
      <Head>
        <title>Digrowfa | Digitally Grow Fast</title>
        <meta
          name="description"
          content="World's 1st Complete Digital Growth Platform"
        />
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
                      <h1>
                        Reset <br /> <span>Password</span>
                      </h1>
                      <p>
                        Enter your email/phone number, we’ll send you an OTP.
                      </p>
                      <h2>
                        Verify <span>Code</span>
                      </h2>
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
                          <h6>
                            9555271705 <Link href="/auth/signup">Edit</Link>
                          </h6>
                          <h6>
                            <span>Resend</span>
                          </h6>
                        </div>
                        <div className={styles.formBtn}>
                          <button type="button">Next</button>
                        </div>

                        <div className={styles.orDivider}></div>

                        <div className={styles.checkAccount} id="checkAccount">
                          Back to <Link href="/auth/login">Login</Link>
                        </div>
                      </Form>
                    </div>
                    <div className={styles.logoBox}>
                      <Link href="/">
                        <Image
                          src="/logo/logo.webp"
                          alt="digrowfa logo"
                          width={163}
                          height={38}
                          id="darkLogo"
                        />
                        <Image
                          src="/logo/digrowfa.webp"
                          alt="digrowfa logo"
                          width={163}
                          height={38}
                          id="lightLogo"
                        />
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
  );
}
