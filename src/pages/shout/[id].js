import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavigationMenu from "@/components/Navigation/NavigationMenu";
import HomeSearch from "@/components/HomeSearch/HomeSearch";
// import Add from "@/components/Add/Add";
import HomeShoutSlider from "@/components/Shout/HomeShoutSlider";
import ShoutCard from "@/components/Shout/ShoutCard";

export default function Shouts() {
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
            <>
                <section className="container-fluid p-0">
                    <div className={styles.homeBg}>
                        <div className={styles.homeContentBg}>
                            <div className={` ${styles.homeContent} ${styles.leftContent}`}>
                                <NavigationMenu />
                            </div>
                            <div className={`${styles.homeContent} ${styles.centerContent}`}>
                                <HomeSearch />
                                {/* <HomeShoutSlider /> */}
                                <ShoutCard />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <Add /> */}
            </>
        </>
    )
};
