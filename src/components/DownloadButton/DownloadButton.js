import styles from '@/styles/DownloadButton.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function DownloadButton() {
    return (
        <>
            <div className={styles.downloadButton}>
                <Link href="https://play.google.com/store/apps/details?id=com.digrowfa.digrowfa" target="_blank" rel="noopener noreferrer">
                    <div className={styles.homeHeaderStorBtn}>
                        <Image src="/footer/playStore.png" alt="play store" width={135} height={40} />
                    </div>
                </Link>
                <Link href="https://apps.apple.com/in/app/digrowfa/id1667079351" target="_blank" rel="noopener noreferrer">
                    <div className={styles.homeHeaderStorBtn}>
                        <Image src="/footer/appStore.png" alt="app store" width={135} height={40} />
                    </div>
                </Link>
            </div>
        </>
    )
};
