import styles from "@/styles/HomeSearch.module.css";
import Form from 'react-bootstrap/Form';

export default function HomeSearch() {
    return (
        <>
            <div className="row">
                <div className="col-xl-12 col-lg-12 co-md-12 col-sm-12 col-12">
                    <div className={styles.homeSearchContainer}>
                        <div className={styles.homeSearch}>
                            <Form>
                                <Form.Control type="search" placeholder="Search" />
                                <button>
                                    <svg width="22" height="24" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.9655 34.5022C31.6943 34.5022 31.5135 34.4119 31.3327 34.2311L23.4684 26.3668C23.1069 26.0052 23.1069 25.4628 23.4684 25.1013C23.83 24.7397 24.3724 24.7397 24.734 25.1013L32.5983 32.9655C32.9598 33.3271 32.9598 33.8695 32.5983 34.2311C32.5079 34.4119 32.2367 34.5022 31.9655 34.5022Z" fill="black" />
                                        <path d="M15.0617 1.96023C22.1125 1.96023 27.8073 7.65505 27.8073 14.7058C27.8073 21.7565 22.1125 27.4514 15.0617 27.4514C8.01101 27.4514 2.31618 21.7565 2.31618 14.7058C2.31618 7.65505 8.01101 1.96023 15.0617 1.96023ZM15.0617 0.152344C7.01667 0.152344 0.508301 6.66072 0.508301 14.7058C0.508301 22.7509 7.01667 29.2592 15.0617 29.2592C23.1068 29.2592 29.6152 22.7509 29.6152 14.7058C29.6152 6.66072 23.1068 0.152344 15.0617 0.152344Z" fill="#000813" />
                                    </svg>
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
