import styles from "@/styles/SplashScreen.module.css"
import Image from "next/image"

export default function SplashScreen() {
    return (
        <>
            <div className={styles.splashBg}>
                <Image src="/splash/splash.gif" alt="splash loading" width={800} height={600} />
            </div>
        </>
    )
};
