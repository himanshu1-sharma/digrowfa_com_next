import styles from "@/styles/LoginSignup.module.css"
import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer/Footer"


export default function LoginSignup() {
    return (
        <>
            <Head>
                <title>Digrowfa | Digitally Grow Fast</title>
                <meta name="description" content="World's 1st Complete Digital Growth Platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="container-fluid p-0">
                <div className={styles.loginSignupBg} id="loginSignupBg">
                    <div className={styles.overlayImg}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className={styles.loginSignupLogo}>
                                        <Link href="/">
                                            <Image src="/logo/digrowfa.webp" alt="digrowfa logo" width={163} height={38} />
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className={styles.loginSignupBox}>
                                        <div className={styles.loginSignupContent}>
                                            <h1>Start Your <br />
                                                Online Growth Journey</h1>
                                            <p>-With Digrowfa</p>
                                            <div className={styles.buttonWidth}>
                                                <Link href="/auth/signup">
                                                    <button className={styles.createNew}>Create New Account</button>
                                                </Link>
                                                <div className={styles.or}>Or</div>
                                                <Link href="/auth/login">
                                                    <button className={styles.haveAccount}>Login</button>
                                                </Link>
                                            </div>
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
