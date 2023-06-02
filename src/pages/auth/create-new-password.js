import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/LoginSignup.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Form from "react-bootstrap/Form";

export default function CreateNewPassword() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

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
                        A strong password has a combination of letters, digits
                        and punctuation marks.
                      </p>
                      <h2>
                        Create <span>Password</span>
                      </h2>

                      <Form>
                        <div className={styles.loginForm}>
                          <Form.Control
                            type="password"
                            placeholder="New Password"
                          />
                        </div>
                        <div className={styles.loginForm}>
                          <Form.Control
                            type={isPasswordShow ? "text" : "password"}
                            placeholder="Confirm Password"
                          />
                          <div
                            className={styles.passwordIcon}
                            onClick={() => setIsPasswordShow(!isPasswordShow)}
                          >
                            {isPasswordShow ? (
                              <div className={styles.passwordShow}>
                                <svg
                                  width="20"
                                  height="14"
                                  viewBox="0 0 20 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.0644 4.54836C10.7317 4.54836 11.3717 4.81345 11.8436 5.28532C12.3155 5.75719 12.5806 6.39717 12.5806 7.06449C12.5806 7.73181 12.3155 8.3718 11.8436 8.84367C11.3717 9.31553 10.7317 9.58062 10.0644 9.58062C9.39711 9.58062 8.75712 9.31553 8.28526 8.84367C7.81339 8.3718 7.5483 7.73181 7.5483 7.06449C7.5483 6.39717 7.81339 5.75719 8.28526 5.28532C8.75712 4.81345 9.39711 4.54836 10.0644 4.54836ZM10.0644 0.77417C14.258 0.77417 17.8393 3.38256 19.2902 7.06449C17.8393 10.7464 14.258 13.3548 10.0644 13.3548C5.87088 13.3548 2.28959 10.7464 0.838623 7.06449C2.28959 3.38256 5.87088 0.77417 10.0644 0.77417ZM2.66701 7.06449C3.3449 8.44862 4.39752 9.6148 5.70522 10.4304C7.01291 11.2461 8.52321 11.6785 10.0644 11.6785C11.6056 11.6785 13.1159 11.2461 14.4236 10.4304C15.7313 9.6148 16.784 8.44862 17.4618 7.06449C16.784 5.68036 15.7313 4.51419 14.4236 3.69854C13.1159 2.88289 11.6056 2.45048 10.0644 2.45048C8.52321 2.45048 7.01291 2.88289 5.70522 3.69854C4.39752 4.51419 3.3449 5.68036 2.66701 7.06449Z"
                                    fill="#000813"
                                  />
                                </svg>
                              </div>
                            ) : (
                              <svg
                                width="20"
                                height="16"
                                viewBox="0 0 20 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.54843 1.4199L2.62197 0.354736L16.6452 14.378L15.58 15.4515L12.9968 12.8683C12.0323 13.187 11.0091 13.3547 9.93552 13.3547C5.74197 13.3547 2.16068 10.7463 0.709717 7.06441C1.28843 5.58828 2.21101 4.28828 3.3852 3.25667L1.54843 1.4199ZM9.93552 4.54828C10.6028 4.54828 11.2428 4.81338 11.7147 5.28524C12.1866 5.75711 12.4517 6.39709 12.4517 7.06441C12.4521 7.35005 12.4039 7.63367 12.3091 7.90312L9.09681 4.69087C9.36626 4.59608 9.64989 4.54786 9.93552 4.54828ZM9.93552 0.774091C14.1291 0.774091 17.7104 3.38248 19.1613 7.06441C18.4768 8.80323 17.3136 10.3125 15.8065 11.4173L14.6155 10.218C15.7754 9.41564 16.7108 8.33007 17.3329 7.06441C16.6549 5.68049 15.6022 4.51454 14.2945 3.6991C12.9868 2.88365 11.4766 2.45141 9.93552 2.45151C9.02133 2.45151 8.12391 2.60248 7.2852 2.87087L5.99359 1.58764C7.20133 1.06764 8.53488 0.774091 9.93552 0.774091ZM2.5381 7.06441C3.21615 8.44834 4.26884 9.61428 5.57652 10.4297C6.8842 11.2452 8.39442 11.6774 9.93552 11.6773C10.5142 11.6773 11.0846 11.6186 11.6129 11.5012L9.70068 9.58054C9.11708 9.51799 8.57247 9.25754 8.15744 8.8425C7.7424 8.42746 7.48195 7.88286 7.41939 7.29925L4.56778 4.43925C3.73746 5.15216 3.04133 6.04119 2.5381 7.06441Z"
                                  fill="#000813"
                                />
                              </svg>
                            )}
                          </div>
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
