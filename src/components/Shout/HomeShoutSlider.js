import styles from "@/styles/HomeShoutSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

export default function HomeShoutSlider() {
  return (
    <>
      <div className={styles.homeShoutSliderBox}>
        <div className="homeStoriesSliderContent">
          <Swiper
            slidesPerView={14}
            spaceBetween={25}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="homeStoriesSlider"
          >
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.shoutCategory}>
                Trending
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
