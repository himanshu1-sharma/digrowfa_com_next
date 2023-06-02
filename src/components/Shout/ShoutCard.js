import React, { useState, useEffect, useRef, useMemo } from "react";
import styles from "@/styles/Shout.module.css";
import { useRouter } from 'next/router';
import Axios from "axios";
import ReactPlayer from 'react-player'




export default function ShoutCard() {

  const [data, setData] = useState()
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(0)
  const [id, setId] = useState([])

  // const targetRef = useRef(null)
  // const [active, setActive] = useState(false)

  // const callbackFunction = (entries) => {
  //   const [entry] = entries
  //   setActive(entry.isIntersecting)
  // }

  // const options = useMemo(() => {
  //   return {
  //     root: null,
  //     rootMargin: "0px 0px 100px 0px",
  //     threshold: 0.5
  //   }
  // }, [])

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options);
  //   const currentTarget = targetRef.current;
  //   if (currentTarget) {
  //     observer.observe(currentTarget)
  //   }

  //   return (() => {
  //     if (currentTarget) {
  //       observer.unobserve(currentTarget)
  //     }
  //   })
  // }, [targetRef, options])

  const fetchData = async () => {
    await Axios.get('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json')
      .then(data => {
        setData(data.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  const router = useRouter();

  function handleWheelEvent(e) {
    const scroll = Math.sign(e.scrollY)
    if (scroll > 0) {
      router.push(`/shout/${id - 1}`)
    } else {
      router.push(`/shout/${id + 1}`);
    }
  }

  const callback = (entries) => {
    entries.forEach((entry) => {
      let ele = entry.target.childNodes[0]
      console.log(ele)
      ele.play().then(() => {
        if (!ele.paused && !entry.isIntersecting) {
          ele.pause()
        }
      })
    })
  }

  useEffect(() => {
    let observer = new IntersectionObserver(callback, { threshold: 1.0 });
    const elements = document.querySelectorAll("#videos")
    elements.forEach((element) => {
      observer.observe(element)
    })
    return (element) => {
      observer.disconnect(element)
    }
  }, [data])

  return (
    <>

      <div className={styles.shoutCardContainer} onWheel={handleWheelEvent}>

        {data && data?.map((curElt, index) => {
          return (
            <>
              <div className={styles.shoutCardBox} key={index}>
                <div className={styles.shoutCard} id='videos'>
                  <video
                    controls
                    autoPlay
                    config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                    onContextMenu={(e) => e.preventDefault()}
                    // muted
                    loop
                  >
                    <source src={curElt.videoUrl} type="video/mp4" />
                  </video>


                </div>
                <div className={styles.shoutCardContentBox}>
                  <div className={styles.shoutCardContent}>
                    <div className={styles.shoutCardContentIcon}>
                      <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.6043 3.5961C26.8456 1.8374 24.4713 0.870117 21.9212 0.870117C19.6349 0.870117 17.4365 1.66153 15.7658 3.15642C14.095 1.66153 11.8966 0.870117 9.61034 0.870117C6.26881 0.870117 3.27903 2.62881 1.52034 5.53066C-0.765969 9.22392 -0.0624908 14.2362 3.10316 17.0501L15.0623 29.0093C15.2382 29.1851 15.502 29.2731 15.7658 29.2731C16.0296 29.2731 16.2934 29.1851 16.4692 29.0093L28.5163 17.0501L28.6043 16.9622C28.6043 16.9622 28.6922 16.9622 28.6922 16.8742C30.3629 15.3794 31.4182 12.9172 31.4182 10.2791C31.4182 7.72903 30.3629 5.35479 28.6043 3.5961ZM27.9008 15.2035C27.7249 15.3794 27.549 15.5552 27.3732 15.7311L15.7658 27.2506L4.33425 15.7311C4.15838 15.5552 3.89457 15.3794 3.71871 15.1156C1.60827 12.7413 1.25653 9.13599 3.01523 6.32207C4.51012 3.94783 6.97229 2.54088 9.61034 2.54088C11.6328 2.54088 13.5674 3.33229 15.0623 4.73925L15.7658 5.6186L16.5572 4.91512C17.9641 3.42023 19.8987 2.71675 22.0091 2.71675C24.0316 2.71675 25.9662 3.50816 27.4611 4.91512C28.8681 6.32207 29.6595 8.25664 29.6595 10.3671C29.6595 12.2137 28.956 13.9724 27.9008 15.2035Z" fill="black" />
                        <path d="M27.9007 15.2036C27.7248 15.3795 27.5489 15.5554 27.373 15.7312L27.9007 15.2036Z" fill="black" />
                        <path d="M28.5163 17.05L15.7657 29.7127L15.0623 29.0092C15.2381 29.185 15.5019 29.273 15.7657 29.273C16.0295 29.273 16.2933 29.185 16.4692 29.0092L28.5163 17.05Z" fill="black" />
                      </svg>

                    </div>
                    <div className={styles.shoutCardContentText}>1.6k</div>
                  </div>
                  <div className={styles.shoutCardContent}>
                    <div className={styles.shoutCardContentIcon}>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_380_23929)">
                          <path d="M18.0504 2.03318C28.28 2.03318 31.157 4.91024 31.157 15.1398C31.157 25.3693 28.28 28.2464 18.0504 28.2464C13.8148 28.2464 11.657 29.9247 5.02374 32.0825C5.02374 28.8058 4.94382 21.1336 4.94382 15.1398C4.94382 4.91024 7.82088 2.03318 18.0504 2.03318ZM18.0504 0.434814C6.94178 0.434814 3.34546 4.03114 3.34546 15.1398C3.34546 18.5763 3.34546 22.5722 3.34546 26.0087C3.34546 28.4861 3.34546 30.7238 3.34546 32.0825V34.2402L5.50325 33.6009C7.82088 32.8816 9.659 32.1624 11.0975 31.6029C13.8947 30.4841 15.573 29.8447 18.0504 29.8447C29.1591 29.8447 32.7554 26.2484 32.7554 15.1398C32.7554 4.03114 29.1591 0.434814 18.0504 0.434814Z" fill="black" />
                          <path d="M12.6065 17.0572C13.2686 17.0572 13.8053 16.5205 13.8053 15.8584C13.8053 15.1964 13.2686 14.6597 12.6065 14.6597C11.9444 14.6597 11.4077 15.1964 11.4077 15.8584C11.4077 16.5205 11.9444 17.0572 12.6065 17.0572Z" fill="black" />
                          <path d="M18.0374 17.0572C18.6995 17.0572 19.2362 16.5205 19.2362 15.8584C19.2362 15.1964 18.6995 14.6597 18.0374 14.6597C17.3753 14.6597 16.8386 15.1964 16.8386 15.8584C16.8386 16.5205 17.3753 17.0572 18.0374 17.0572Z" fill="black" />
                          <path d="M23.4776 17.0572C24.1396 17.0572 24.6764 16.5205 24.6764 15.8584C24.6764 15.1964 24.1396 14.6597 23.4776 14.6597C22.8155 14.6597 22.2788 15.1964 22.2788 15.8584C22.2788 16.5205 22.8155 17.0572 23.4776 17.0572Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_380_23929">
                            <rect width="34.9259" height="34.9259" fill="white" transform="translate(0.519287 0.118652)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={styles.shoutCardContentText}>500</div>
                  </div>
                  <div className={styles.shoutCardContent}>
                    <div className={styles.shoutCardContentIcon}>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9814 32.4682C5.47235 32.4682 3.20508 30.201 3.20508 17.6919C3.20508 5.1828 5.47235 2.91553 17.9814 2.91553C18.4505 2.91553 18.7633 3.22825 18.7633 3.69735C18.7633 4.16644 18.4505 4.47916 17.9814 4.47916C6.25417 4.47916 4.76871 5.96462 4.76871 17.6919C4.76871 29.4191 6.25417 30.9046 17.9814 30.9046C29.7087 30.9046 31.1942 29.4191 31.1942 17.6919C31.1942 17.2228 31.5069 16.9101 31.976 16.9101C32.4451 16.9101 32.7578 17.2228 32.7578 17.6919C32.7578 30.201 30.4905 32.4682 17.9814 32.4682Z" fill="black" />
                        <path d="M14.1615 24.6498C13.6924 24.6498 13.3796 24.3371 13.3796 23.868C13.3796 16.0498 19.7905 9.63892 27.6087 9.63892H31.0487C31.5178 9.63892 31.8305 9.95164 31.8305 10.4207C31.8305 10.8898 31.5178 11.2026 31.0487 11.2026H27.6087C20.6505 11.2026 14.9433 16.9098 14.9433 23.868C14.9433 24.2589 14.6305 24.6498 14.1615 24.6498Z" fill="black" />
                        <path d="M25.2576 17.8484C25.0231 17.8484 24.8667 17.7702 24.7104 17.6139C24.3976 17.3012 24.3976 16.8321 24.7104 16.5193L30.8867 10.343L24.8667 4.32299C24.554 4.01026 24.554 3.54117 24.8667 3.22844C25.1795 2.91571 25.6486 2.91571 25.9613 3.22844L32.5286 9.79571C32.8413 10.1084 32.8413 10.5775 32.5286 10.8903L25.8049 17.6139C25.6486 17.7702 25.414 17.8484 25.2576 17.8484Z" fill="black" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.shoutCardContent}>
                    <div className={styles.shoutCardContentIcon}>
                      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3 11.0205C28.9679 11.0205 30.7171 12.4141 30.7171 21.4037C30.7171 30.4317 28.9647 31.7869 17.3 31.7869C5.65137 31.7869 3.88292 30.4317 3.88292 21.4037C3.88292 12.4141 5.65137 11.0205 17.3 11.0205ZM17.3 9.43787C11.2867 9.43787 7.5864 9.78066 5.25411 11.5908C2.78405 13.5066 2.30029 16.6398 2.30029 21.4037C2.30029 26.1804 2.78405 29.3201 5.25411 31.2327C7.57679 33.0299 11.2803 33.3695 17.2968 33.3695C23.323 33.3695 27.0265 33.0299 29.3492 31.2327C31.8128 29.3265 32.2966 26.1836 32.2966 21.4069C32.2966 16.643 31.816 13.5098 29.3524 11.5972C27.0233 9.78066 23.3198 9.43787 17.3 9.43787Z" fill="#000813" />
                        <path d="M24.9347 9.23678C24.499 9.23678 24.1434 8.88437 24.1434 8.44547C24.1434 5.34428 21.5836 3.49254 17.3003 3.49254C13.081 3.49254 10.4571 5.38913 10.4571 8.44547C10.4571 8.88117 10.1015 9.23678 9.66583 9.23678C9.23012 9.23678 8.87451 8.88437 8.87451 8.44547C8.87451 5.43078 11.0819 1.90991 17.3003 1.90991C21.1863 1.90991 25.726 3.62069 25.726 8.44547C25.726 8.88117 25.3704 9.23678 24.9347 9.23678Z" fill="#000813" />
                        <path d="M9.81936 16.877C10.3413 16.877 10.7645 16.4539 10.7645 15.9319C10.7645 15.4099 10.3413 14.9868 9.81936 14.9868C9.2974 14.9868 8.87427 15.4099 8.87427 15.9319C8.87427 16.4539 9.2974 16.877 9.81936 16.877Z" fill="#000813" />
                        <path d="M24.7805 16.877C25.3025 16.877 25.7256 16.4539 25.7256 15.9319C25.7256 15.4099 25.3025 14.9868 24.7805 14.9868C24.2586 14.9868 23.8354 15.4099 23.8354 15.9319C23.8354 16.4539 24.2586 16.877 24.7805 16.877Z" fill="#000813" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.shoutCardContent}>
                    <div className={styles.shoutCardContentIcon}>
                      <svg width="29" height="7" viewBox="0 0 29 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.87946" cy="3.84186" r="2.97077" fill="black" />
                        <circle cx="14.5743" cy="3.84186" r="2.97077" fill="black" />
                        <circle cx="25.2689" cy="3.84186" r="2.97077" fill="black" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}

      </div>
    </>
  )
}


// export async function getServerSideProps(context) {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const data = await res.json()



//   return {
//     props: {
//       data
//     }
//   }

// }