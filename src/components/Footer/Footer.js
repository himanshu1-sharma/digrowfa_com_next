import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import DownloadButton from '../DownloadButton/DownloadButton'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <section className="container-fluid p-0">
                <footer className={styles.footer}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className={styles.appAvailable}>
                                    <p>Available On</p>
                                    <DownloadButton />
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                                <div className={styles.copyright}>
                                    <Image src='/footer/copyright.png' alt="copyright" width={15} height={15} />
                                    Digrowfa Pvt Ltd
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className={styles.footerNavLink}>
                                    <ul>
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Privacy</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Terms</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Help Centre</Link>
                                        </li>
                                        <li>
                                            <Link href="/">About</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
};
