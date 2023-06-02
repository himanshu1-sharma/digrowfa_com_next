import styles from "@/styles/HomeSuggestionSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper";

export default function HomeSuggestionsSlider() {
    return (
        <>
            <div className={styles.homeStoriesSliderBox}>
                <div className="homeSuggestionsSliderContent">
                    <Swiper
                        slidesPerView={14}
                        spaceBetween={25}
                        freeMode={true}
                        navigation={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="homeSuggestionsSlider"
                    >

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.HomeSuggestionsSliderCard}>
                                <div className={styles.HomeSuggestionsSliderCardProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                                    <div className={styles.suggestionIcon}>
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0924 11.687C15.0924 12.7526 14.8862 13.7838 13.4424 14.2651C12.9268 14.437 12.2393 14.5401 11.3112 14.6088C11.1737 14.6088 11.0706 14.6088 10.9331 14.6432C10.2456 14.6776 9.42056 14.6776 8.25181 14.6776C5.67368 14.6776 4.09243 14.6088 3.09556 14.2651C1.65181 13.7838 1.44556 12.7526 1.44556 11.687C1.44556 8.83384 3.40493 8.73071 8.25181 8.73071C13.0987 8.73071 15.0924 8.83384 15.0924 11.687Z" fill="#0C8CE9" />
                                            <path d="M11.9781 5.50186C12.4406 3.54341 11.2278 1.58088 9.26935 1.11843C7.31089 0.655983 5.34836 1.86874 4.88592 3.82719C4.42347 5.78565 5.63623 7.74818 7.59468 8.21062C9.55314 8.67307 11.5157 7.46032 11.9781 5.50186Z" fill="#0C8CE9" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" fill="#0C8CE9" />
                                            <path d="M2.94946 8.46094V10.6523" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <path d="M1.85693 9.5564L4.04834 9.5564" stroke="white" stroke-width="0.365234" stroke-linecap="round" />
                                            <rect x="0.214355" y="6.81689" width="5.47852" height="5.47852" rx="2.73926" stroke="white" stroke-width="0.365234" />
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.suggestionUserName}>
                                    <h4>Himanshu sharma</h4>
                                    <p>title</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    );
}
