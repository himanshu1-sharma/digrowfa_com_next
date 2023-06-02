import styles from "@/styles/GlobalLogo.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div className={styles.logoBox}>
        <Dropdown className="globalLogo">
          <Dropdown.Toggle id="dropdown-basic">
            <Image src="/logo/globalLogo.png" alt="logo" width={140} height={46} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href="">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_48_1200)">
                    <path
                      d="M15.0108 29.1868C22.84 29.1868 29.1868 22.84 29.1868 15.0108C29.1868 7.18163 22.84 0.834839 15.0108 0.834839C7.18163 0.834839 0.834839 7.18163 0.834839 15.0108C0.834839 22.84 7.18163 29.1868 15.0108 29.1868Z"
                      stroke="#0C8CE9"
                      stroke-width="1.66972"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M15.0108 20.1702C22.84 20.1702 29.1868 17.8603 29.1868 15.0108C29.1868 12.1613 22.84 9.85132 15.0108 9.85132C7.18163 9.85132 0.834839 12.1613 0.834839 15.0108C0.834839 17.8603 7.18163 20.1702 15.0108 20.1702Z"
                      stroke="#0C8CE9"
                      stroke-width="1.66972"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M15.0109 29.1868C17.8604 29.1868 20.1703 22.84 20.1703 15.0108C20.1703 7.18163 17.8604 0.834839 15.0109 0.834839C12.1614 0.834839 9.85144 7.18163 9.85144 15.0108C9.85144 22.84 12.1614 29.1868 15.0109 29.1868Z"
                      stroke="#0C8CE9"
                      stroke-width="1.66972"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_1200">
                      <rect width="30.03" height="30.03" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Global
              </Link>
            </Dropdown.Item>

            <Dropdown.Item>
              <Link href="">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_48_1206)">
                    <path
                      d="M15.0227 18.4283C26.7684 18.4283 28.5318 19.1019 28.5318 23.4536C28.5318 25.724 28.055 26.9954 25.9435 27.6917C24.5299 28.0845 23.0736 28.303 21.607 28.3426L20.8502 28.388C19.2608 28.4561 17.3461 28.4863 15.053 28.4863C9.4223 28.4863 6.08476 28.335 4.13219 27.7295C1.99041 26.9954 1.51362 25.7316 1.51362 23.4611C1.51362 19.1095 3.29213 18.4359 15.0227 18.4359M15.0227 16.9223C4.33653 16.9147 0 17.1645 0 23.4611C0 25.7921 0.438951 28.0852 3.63269 29.1372C5.84258 29.894 9.33905 30.0075 15.0227 30.0075C17.5429 30.0075 19.4046 30.0075 20.888 29.9016H21.7129C23.3073 29.8445 24.8884 29.5903 26.4203 29.1448C29.6065 28.0928 30.0454 25.7997 30.0454 23.4687C30.0454 17.1796 25.7089 16.9298 15.0227 16.9298V16.9223Z"
                      fill="white"
                    />
                    <path
                      d="M14.2659 24.0515H24.7931"
                      stroke="white"
                      stroke-width="1.51362"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.3254 15.2573C19.3297 15.2573 22.5757 12.0113 22.5757 8.00709C22.5757 4.00288 19.3297 0.756836 15.3254 0.756836C11.3212 0.756836 8.0752 4.00288 8.0752 8.00709C8.0752 12.0113 11.3212 15.2573 15.3254 15.2573Z"
                      stroke="white"
                      stroke-width="1.51362"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_1206">
                      <rect width="30.0454" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Following
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
