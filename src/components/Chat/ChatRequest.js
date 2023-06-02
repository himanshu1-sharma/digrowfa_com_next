import styles from "@/styles/ChatRequest.module.css";
import userStyles from "@/styles/SuggestionsUser.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";

export default function ChatRequest() {
  return (
    <>
      <div className={styles.chatRequestContentBox}>
        <Tabs
          defaultActiveKey="chat"
          id="fill-tab-example"
          className="mb-3 userChatRequestTabs"
          fill
        >
          <Tab eventKey="chat" title="Chat">
            <div className={styles.chatRequestContent}>
              <Form>
                <div className={styles.searchChatUser}>
                  <svg
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3289 22.3212C20.1537 22.3212 20.0369 22.2628 19.9201 22.146L14.8398 17.0657C14.6062 16.8321 14.6062 16.4818 14.8398 16.2482C15.0734 16.0146 15.4238 16.0146 15.6573 16.2482L20.7376 21.3285C20.9712 21.562 20.9712 21.9124 20.7376 22.146C20.6792 22.2628 20.504 22.3212 20.3289 22.3212Z"
                      fill="#0C8CE9"
                    />
                    <path
                      d="M9.40908 1.29923C13.9638 1.29923 17.6426 4.97806 17.6426 9.53279C17.6426 14.0875 13.9638 17.7664 9.40908 17.7664C4.85434 17.7664 1.17551 14.0875 1.17551 9.53279C1.17551 4.97806 4.85434 1.29923 9.40908 1.29923ZM9.40908 0.131348C4.212 0.131348 0.00762939 4.33572 0.00762939 9.53279C0.00762939 14.7299 4.212 18.9342 9.40908 18.9342C14.6061 18.9342 18.8105 14.7299 18.8105 9.53279C18.8105 4.33572 14.6061 0.131348 9.40908 0.131348Z"
                      fill="#000813"
                    />
                  </svg>
                  <Form.Control type="text" placeholder="Search" />
                </div>
              </Form>

              <div className={userStyles.suggestionUserCardContent}>
                <div className={userStyles.suggestionUserCard}>
                  <div className={userStyles.suggestionUserCardProfile}></div>
                  <div className={userStyles.suggestionUserCardName}>
                    <h4>himanshu Sharma</h4>
                    <p>
                      <b>Replied to your story</b>
                    </p>
                  </div>
                </div>
                <div className={userStyles.followSuggestion}>
                  <span>3d</span>
                </div>
              </div>
              <div className={userStyles.suggestionUserCardContent}>
                <div className={userStyles.suggestionUserCard}>
                  <div className={userStyles.suggestionUserCardProfile}></div>
                  <div className={userStyles.suggestionUserCardName}>
                    <h4>himanshu Sharma</h4>
                    <p>Developer</p>
                  </div>
                </div>
                <div className={userStyles.followSuggestion}>
                  <span>3d</span>
                </div>
              </div>
              <div className={userStyles.suggestionUserCardContent}>
                <div className={userStyles.suggestionUserCard}>
                  <div className={userStyles.suggestionUserCardProfile}></div>
                  <div className={userStyles.suggestionUserCardName}>
                    <h4>himanshu Sharma</h4>
                    <p>Developer</p>
                  </div>
                </div>
                <div className={userStyles.followSuggestion}>
                  <span>3d</span>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="requests" title="Requests">
            <div className={styles.chatRequestContent}>
              <div className={userStyles.suggestionUserCardContent}>
                <div className={userStyles.suggestionUserCard}>
                  <div className={userStyles.suggestionUserCardProfile}></div>
                  <div className={userStyles.suggestionUserCardName}>
                    <h4>himanshu Sharma</h4>
                    <p>
                      <b>Replied to your story</b>
                    </p>
                  </div>
                </div>
                <div className={userStyles.followSuggestion}>
                  <span>3d</span>
                </div>
              </div>
              <div className={userStyles.suggestionUserCardContent}>
                <div className={userStyles.suggestionUserCard}>
                  <div className={userStyles.suggestionUserCardProfile}></div>
                  <div className={userStyles.suggestionUserCardName}>
                    <h4>himanshu Sharma</h4>
                    <p>Developer</p>
                  </div>
                </div>
                <div className={userStyles.followSuggestion}>
                  <span>3d</span>
                </div>
              </div>
              <div className={userStyles.suggestionUserCardContent}>
                <div className={userStyles.suggestionUserCard}>
                  <div className={userStyles.suggestionUserCardProfile}></div>
                  <div className={userStyles.suggestionUserCardName}>
                    <h4>himanshu Sharma</h4>
                    <p>Developer</p>
                  </div>
                </div>
                <div className={userStyles.followSuggestion}>
                  <span>3d</span>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
