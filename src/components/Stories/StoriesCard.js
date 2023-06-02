import React, { useState } from "react";
import styles from "@/styles/Stories.module.css";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Stories from "react-insta-stories";
import { Autoplay } from "swiper";

export default function StoriesCard() {
  const [storyShow, setStoryShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  return (
    <>
      <StoryViewModal
        show={storyShow}
        onHide={() => setStoryShow(false)}
        backdrop="static"
        fullscreen={fullscreen}
        className="storyViewModal"
      />
      <div className={styles.storiesContainer}>
        <div className="row mt-4">
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512819432727-dbcb57a06f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-42 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-42 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544536871-6e891baa163f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512819432727-dbcb57a06f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-42 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4col-md-42 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544536871-6e891baa163f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512819432727-dbcb57a06f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-42 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-42 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544536871-6e891baa163f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512819432727-dbcb57a06f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-42 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-42 col-sm-12 col-12">
                <div className={styles.storyCard} onClick={() => setStoryShow(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544536871-6e891baa163f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80')` }}>
                  <div className={styles.storyCardOverlay}>
                    <div className={styles.stroyCardUserProfile}>
                      <div className={styles.stroyCardUserProfilePic} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
                      <div className={styles.stroyCardUserProfileName}>
                        <h4>Himanshu Sharma</h4>
                        <p>Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

function StoryViewModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={styles.storyModalContent}>

        <div className={styles.storyModalCloseBtn} onClick={props.onHide}>
          <FontAwesomeIcon icon={faClose} />
        </div>
        <div className={styles.storyBox}>
          <Stories
            stories={stories}
            defaultInterval={3000}
            width={523}
            height={930}
            loop
            keyboardNavigation
            // onStoryEnd={(s, st) => console.log("story ended", s, st)}
            // onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
            // onStoryStart={(s, st) => console.log("story started", s, st)}
            isPaused={true}
            className="storyView"
          />
        </div>
      </div>
    </Modal>
  );
}

const stories = [
  {
    // content: ({ action, isPaused }) => {
    //   return (
    //     <div>
    //       <img src="https://images.unsplash.com/photo-1544536871-6e891baa163f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80https://instagram.flko7-2.fna.fbcdn.net/v/t51.2885-15/328858438_618150522975643_2862814860881217603_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flko7-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xi-Gvg-7tYQAX_LZgUq&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA2NjE0NDM1NDg2ODg4NjE0Nw%3D%3D.2-ccb7-5&oh=00_AfApUGFgahN-8WucS2LewbzBqRGRNvKuSlAiiptKJ9O9rQ&oe=643A074C&_nc_sid=1527a3" />
    //     </div>
    //   );
    // },
    url: "https://images.unsplash.com/photo-1512819432727-dbcb57a06f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    type: "image",
  },
  {
    url: "/video/test.mp4",
    type: "video",
    Autoplay,

  },
  {
    url: "/video/test2.mp4",
    type: "video",
    Autoplay,
  },

];
