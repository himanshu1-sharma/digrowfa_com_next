import React, { useState, useEffect, useRef, useMemo } from "react";
import styles from "@/styles/NavigationMenu.module.css";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import Logo from "../Logo/Logo";
import Axios from "axios";

export default function NavigationMenu() {
  const { asPath } = useRouter();
  const router = useRouter();

  const [data, setData] = useState()
  const [id, setId] = useState([])
  const fetchData = async () => {
    await Axios.get('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json')
      .then(data => {
        setData(data.data)
      })
  }

  // console.log("data", data)

  const handleClick = () => {
    // data?.map((curElt, ) => {
    //   console.log("curElt", curElt.id)
    //   router.push(`/shout/${curElt}`)
    // })
    // console.log("id", data[0].id)
    router.push(`/shout/${data[0].id}`)
  }

  // console.log("id", id)

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className={styles.navigationListBox}>
        <Logo />
        <ul>
          <Link href="/">
            <li className={asPath === "/" ? `${styles.active}` : null}>
              <div className={styles.navListIcon}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5963 22.1356C23.17 22.1356 23.8512 22.8167 23.8512 27.3904C23.8512 31.9641 23.17 32.6452 18.5963 32.6452C14.12 32.6452 13.3415 31.9641 13.3415 27.3904C13.3415 22.8167 14.12 22.1356 18.5963 22.1356ZM18.5963 20.1893C12.9523 20.1893 11.3953 21.7463 11.3953 27.3904C11.3953 33.0345 12.9523 34.5915 18.5963 34.5915C24.2404 34.5915 25.7974 33.0345 25.7974 27.3904C25.7974 21.7463 24.2404 20.1893 18.5963 20.1893Z"
                    fill="#000813"
                  />
                  <path
                    d="M36.1124 11.334L19.5694 0.726994C19.2775 0.53237 18.8882 0.435059 18.499 0.435059C18.1097 0.435059 17.7205 0.53237 17.4286 0.726994L1.08018 11.334C0.398994 11.8205 0.00974648 12.6963 0.301682 13.4748C0.496305 14.3506 1.2748 14.8372 2.15061 14.8372H3.31835C2.9291 16.8807 2.73448 19.5082 2.73448 22.6221C2.73448 35.8565 5.45921 38.5813 18.6936 38.5813C31.928 38.5813 34.6527 35.8565 34.6527 22.6221C34.6527 19.4109 34.4581 16.8807 34.0689 14.8372H35.1393C36.0151 14.8372 36.7936 14.2533 36.9882 13.4748C37.1828 12.6963 36.8909 11.8205 36.1124 11.334ZM31.3441 12.9883C31.6361 13.5721 31.8307 14.156 32.0253 14.9345C32.5119 16.8807 32.6092 19.4109 32.6092 22.7195C32.6092 34.8834 30.7603 36.7323 18.5963 36.7323C6.43232 36.7323 4.5834 34.8834 4.5834 22.7195C4.5834 19.4109 4.68071 16.8807 5.16727 14.9345C5.36189 14.156 5.55652 13.5721 5.84845 12.9883H2.05329L4.38878 11.5286L10.9087 7.34419L18.5963 2.47861L26.2839 7.44151L32.8038 11.6259L35.1393 13.0856H31.3441V12.9883Z"
                    fill="#000813"
                  />
                </svg>
              </div>
              <div className={styles.navListName}>Home</div>
            </li>
          </Link>
          <li onClick={handleClick}>
            <div className={styles.navListIcon}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_386_242)">
                  <path
                    d="M19.3555 10.4779L7.51548 26.4517C6.6853 27.5717 6.53047 29.0548 7.11142 30.3222L8.54668 33.4532C9.16959 34.8121 10.5272 35.6834 12.022 35.6837L31.0488 35.6874C32.4421 35.6877 33.3678 34.2453 32.7872 32.9787L22.6295 10.8197C22.0234 9.49754 20.2216 9.30944 19.3555 10.4779Z"
                    stroke="black"
                    stroke-width="1.43602"
                    stroke-linecap="round"
                  />
                  <rect
                    x="30.3538"
                    y="18.4536"
                    width="9.55976"
                    height="2.86793"
                    rx="1.43396"
                    transform="rotate(-24.6268 30.3538 18.4536)"
                    fill="black"
                  />
                  <rect
                    x="25.6433"
                    y="12.937"
                    width="6.11111"
                    height="2.86793"
                    rx="1.43396"
                    transform="rotate(-54.6268 25.6433 12.937)"
                    fill="black"
                  />
                  <rect
                    x="32.915"
                    y="25.3762"
                    width="6.13551"
                    height="2.86793"
                    rx="1.43396"
                    transform="rotate(5.37324 32.915 25.3762)"
                    fill="black"
                  />
                  <path
                    d="M23.9265 25.4821C24.432 25.8039 24.432 26.5419 23.9265 26.8636L18.083 30.5822C17.5379 30.929 16.8247 30.5375 16.8247 29.8914L16.8247 22.4543C16.8247 21.8082 17.5379 21.4167 18.083 21.7636L23.9265 25.4821Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_386_242">
                    <rect
                      width="35.9996"
                      height="35.9996"
                      fill="white"
                      transform="translate(5.00146 5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.navListName}>Shout</div>
          </li>
          <Link href="">
            <li>
              <div className={styles.navListIcon}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 31 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3096 1.66409C25.9598 1.66409 28.9552 4.65945 28.9552 15.3096C28.9552 25.9598 25.9598 28.9552 15.3096 28.9552C10.8998 28.9552 8.65327 30.7025 1.74729 32.949C1.74729 29.5376 1.66409 21.55 1.66409 15.3096C1.66409 4.65945 4.65945 1.66409 15.3096 1.66409ZM15.3096 0C3.7442 0 0 3.7442 0 15.3096C0 18.8874 0 23.0476 0 26.6254C0 29.2048 0 31.5345 0 32.949V35.1955L2.24652 34.5299C4.65945 33.781 6.57315 33.0322 8.07084 32.4498C10.983 31.2849 12.7303 30.6193 15.3096 30.6193C26.8751 30.6193 30.6193 26.875 30.6193 15.3096C30.6193 3.7442 26.8751 0 15.3096 0Z"
                    fill="black"
                  />
                  <path
                    d="M9.65163 17.3062C10.3409 17.3062 10.8997 16.7474 10.8997 16.0581C10.8997 15.3688 10.3409 14.8101 9.65163 14.8101C8.96234 14.8101 8.40356 15.3688 8.40356 16.0581C8.40356 16.7474 8.96234 17.3062 9.65163 17.3062Z"
                    fill="#0C8CE9"
                  />
                  <path
                    d="M15.3096 17.3062C15.9989 17.3062 16.5577 16.7474 16.5577 16.0581C16.5577 15.3688 15.9989 14.8101 15.3096 14.8101C14.6203 14.8101 14.0615 15.3688 14.0615 16.0581C14.0615 16.7474 14.6203 17.3062 15.3096 17.3062Z"
                    fill="#0C8CE9"
                  />
                  <path
                    d="M20.9675 17.3062C21.6568 17.3062 22.2156 16.7474 22.2156 16.0581C22.2156 15.3688 21.6568 14.8101 20.9675 14.8101C20.2783 14.8101 19.7195 15.3688 19.7195 16.0581C19.7195 16.7474 20.2783 17.3062 20.9675 17.3062Z"
                    fill="#0C8CE9"
                  />
                </svg>
              </div>
              <div className={styles.navListName}>Chat</div>
            </li>
          </Link>
          <Link href="">
            <li>
              <div className={styles.navListIcon}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 32 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_27_317)">
                    <path
                      d="M13.6731 6.41333H17.9126C19.5591 6.41333 21.1894 6.73763 22.7106 7.3677C24.2317 7.99778 25.6138 8.9213 26.7781 10.0855C27.9423 11.2498 28.8658 12.6319 29.4959 14.153C30.126 15.6742 30.4503 17.3045 30.4503 18.951V28.8943C30.4503 29.7766 30.0998 30.6227 29.476 31.2465C28.8521 31.8704 28.006 32.2208 27.1238 32.2208H4.46196C3.58749 32.2209 2.74816 31.8767 2.1256 31.2626C1.50305 30.6485 1.14734 29.8139 1.13546 28.9395V18.9962C1.12951 17.3459 1.44941 15.7107 2.07683 14.1844C2.70424 12.658 3.62681 11.2705 4.79164 10.1015C5.95646 8.93247 7.34061 8.00491 8.8647 7.37201C10.3888 6.73911 12.0228 6.41332 13.6731 6.41333Z"
                      stroke="#000813"
                      stroke-width="1.80788"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M15.7883 0.519625C14.7469 0.52438 13.7495 0.940185 13.0132 1.67658C12.2768 2.41297 11.861 3.41036 11.8562 4.45177V4.506C11.8652 5.18546 12.0556 5.85017 12.4076 6.4314C13.1578 6.23671 13.9227 6.10369 14.6946 6.03366C14.4422 5.85372 14.2361 5.61655 14.0932 5.34158C13.9502 5.06661 13.8744 4.76168 13.872 4.45177C13.8582 4.33769 13.8582 4.22235 13.872 4.10827C13.9537 3.66081 14.1898 3.2562 14.5392 2.9649C14.8885 2.67359 15.329 2.51404 15.7838 2.51404C16.2387 2.51404 16.6791 2.67359 17.0285 2.9649C17.3778 3.2562 17.6139 3.66081 17.6957 4.10827C17.7095 4.22235 17.7095 4.33769 17.6957 4.45177C17.6937 4.76274 17.6172 5.06872 17.4725 5.34398C17.3278 5.61924 17.1191 5.85576 16.864 6.03366C17.6571 6.10135 18.4431 6.23438 19.2143 6.4314C19.57 5.8518 19.7607 5.18604 19.7657 4.506V4.45177C19.7633 3.93225 19.6585 3.4183 19.4572 2.93935C19.2559 2.4604 18.9622 2.02586 18.5927 1.66061C18.2233 1.29536 17.7854 1.00657 17.3042 0.810781C16.823 0.614993 16.3079 0.516053 15.7883 0.519625Z"
                      fill="#000813"
                    />
                    <path
                      d="M21.5284 33.5587C21.0195 34.6508 20.2095 35.5749 19.1935 36.2223C18.1774 36.8698 16.9977 37.2138 15.7929 37.2138C14.5881 37.2138 13.4083 36.8698 12.3923 36.2223C11.3763 35.5749 10.5662 34.6508 10.0574 33.5587H12.3715C12.7784 34.0741 13.2969 34.4907 13.8879 34.777C14.4789 35.0634 15.1271 35.2122 15.7838 35.2122C16.4406 35.2122 17.0888 35.0634 17.6798 34.777C18.2708 34.4907 18.7892 34.0741 19.1962 33.5587H21.5284Z"
                      fill="#000813"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_27_317">
                      <rect
                        width="31.1227"
                        height="36.691"
                        fill="white"
                        transform="translate(0.231567 0.519653)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.navListName}>Notification</div>
            </li>
          </Link>
          <Link href="">
            <li
              className={
                asPath === "/my-profile"
                  ? `${styles.navUserProfile}``${styles.active}`
                  : styles.navUserProfile
              }
            >
              <div className={styles.navListIcon}>
                <div className={styles.navListUserProfile} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')` }}></div>
              </div>
              <div className={styles.navListName}>
                <div className={styles.navListUserName}>
                  <h4>Himanshu Sharma</h4>
                  <p>Developer</p>
                </div>
              </div>
            </li>
          </Link>

          <Link href="">
            <li>
              <div className={styles.navListIcon}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.5832 1.27644C18.7136 0.822568 17.6769 0.822567 16.8072 1.27644L12.3846 3.58456C12.2279 3.66632 12.0643 3.73408 11.8957 3.78705L7.13631 5.28227C6.20042 5.57629 5.4674 6.3093 5.17338 7.24519L3.67816 12.0046C3.6252 12.1732 3.55744 12.3368 3.47568 12.4934L1.16755 16.9161C0.713681 17.7858 0.713681 18.8224 1.16755 19.6921L3.47568 24.1148C3.55744 24.2715 3.6252 24.4351 3.67816 24.6036L5.17338 29.3631C5.4674 30.2989 6.20042 31.032 7.13631 31.326L11.8957 32.8212C12.0643 32.8742 12.2279 32.9419 12.3846 33.0237L16.8072 35.3318C17.6769 35.7857 18.7136 35.7857 19.5832 35.3318L24.0059 33.0237C24.1626 32.9419 24.3262 32.8742 24.4948 32.8212L29.2542 31.326C30.1901 31.032 30.9231 30.2989 31.2171 29.3631L32.7123 24.6036C32.7653 24.4351 32.833 24.2715 32.9148 24.1148L35.2229 19.6921C35.6768 18.8224 35.6768 17.7858 35.2229 16.9161L32.9148 12.4934C32.833 12.3368 32.7653 12.1732 32.7123 12.0046L31.2171 7.24519C30.9231 6.30931 30.1901 5.57629 29.2542 5.28227L24.4948 3.78705C24.3262 3.73408 24.1626 3.66632 24.0059 3.58456L19.5832 1.27644ZM18.005 30.2276C24.6952 30.2276 30.1188 24.804 30.1188 18.1137C30.1188 11.4235 24.6952 5.99994 18.005 5.99994C11.3147 5.99994 5.89117 11.4235 5.89117 18.1137C5.89117 24.804 11.3147 30.2276 18.005 30.2276Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={styles.navListName}>Setting</div>
            </li>
          </Link>
        </ul>
        <div className={styles.copyright}>
          <Link href="">Terms of Conditions</Link> © Digrowfa
        </div>
      </div>
    </>
  );
}
