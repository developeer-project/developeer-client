import React from "react";
import styles from "../../styles/homepage-comps/bottomsect.module.scss";

const BottomSect = () => {
  return (
    <div className={styles.foot_wrap}>
      <div className={styles.foot_left_wrap}>
        <img
          src="https://cdn.discordapp.com/attachments/951426015404654612/952147112060133426/D2_logo.png"
          alt="logo"
        />
        <div className={styles.text_below_logo}>
          {/* Â© 2022 Registered Trademark */}
        </div>
      </div>

      <div className={styles.foot_right_wrap}>
        <div className={styles.foot_menu_wrap}>
          <div className="d1">
            <ul>
              <li>
                Privacy
              </li>
              <li>Security</li>
              <li>Safety</li>
              <li>Data</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="d1">
            <ul>
              <li>
                Accessibility
              </li>
              <li>Careers</li>
              <li>Advertising</li>
              <li>Mobile</li>
              <li>Report</li>
            </ul>
          </div>
          <div className="d1">
            <ul>
              <li>
              Questions
              </li>
              <li>Solutions</li>
              <li>Ticket</li>
              <li>Terms</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="d1">
            <ul>
              <li>
                Contact
              </li>
              <li>Socials</li>
              <li>Docs</li>
              <li>Blog</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className="d1">
            <ul>
              <li>
                About
              </li>
              <li>Menu</li>
              <li>FAQ</li>
              <li>Donate</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSect;