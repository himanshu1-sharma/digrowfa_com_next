import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { usePathname } from "next/navigation";
import NavigationMenu from "@/components/Navigation/NavigationMenu";
import StoriesCard from "@/components/Stories/StoriesCard";
import HomeSuggestionsSlider from "@/components/Stories/HomeSuggestionsSlider";
import HomeSearch from "@/components/HomeSearch/HomeSearch";
import Add from "@/components/Add/Add";
// import "@sayings/react-reels/dist/index.css";



export default function Home() {
  const pathName = usePathname();
  const isHome = pathName === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  // const [selected, setSelected] = useState("stories");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(!isLoading);
  //   }, 5000);
  // }, []);

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
      {/* {isLoading && isHome ? (
        <SplashScreen />
      ) : ( */}
      <>
        <section className="container-fluid p-0">
          <div className={styles.homeBg}>
            <div className={styles.homeContentBg}>
              <div className={` ${styles.homeContent} ${styles.leftContent}`}>
                <NavigationMenu />
              </div>
              <div className={`${styles.homeContent} ${styles.centerContent}`}>
                {/* {selected === "stories" ? (
                  <>
                   
                  </>
                ) : selected === "shout" ? (
                  <>
                    <HomeShoutSlider />
                    <ShoutCard />
                  </>
                ) : null} */}
                <HomeSearch />
                <HomeSuggestionsSlider />
                <StoriesCard />
              </div>
              {/* <div className={`${styles.homeContent}  ${styles.rightContent}`}>
                <ChatRequest />
              </div> */}
            </div>
          </div>
        </section>
        <Add />
        {/* <Footer /> */}
      </>
      {/* )} */}
    </>
  );
}
