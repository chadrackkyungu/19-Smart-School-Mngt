import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

import { useAuth } from "../../Contexts/AuthContext"
import { Db } from "../../../Database/init-firebase";
import { collection, getDocs} from "firebase/firestore"

const SidebarContent = (props) => {

  const { currentUser } = useAuth()
  const { uid } = currentUser;
  const [profile, setProfile] = useState();

   useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "TEACHERS"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield}); 
        })
        const result = list.find((stId) => stId.id === uid)
        setProfile(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [uid])



  const ref = useRef();
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname;

    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [props.location.pathname]);

  useEffect(() => {
    ref.current.recalculate();
  });

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }

  return (
    <React.Fragment>
      <SimpleBar className="vertical-simplebar" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/#" className="waves-effect">
                <i className="mdi mdi-airplay"></i>
                <span className="badge rounded-pill bg-info float-end">3</span>
                <span>{props.t("Dashboard")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/dashboard">{props.t("Admin")} </Link>
                </li>
                <li>
                  <Link to="/student">{props.t("Student")} </Link>
                </li>
                <li>
                  <Link to="/parent">{props.t("Parents")} </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-inbox-full"></i>
                <span>{props.t("Students")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/all-students">{props.t("All Student")}</Link>
                </li>
                <li>
                  <Link to="/new-student">{props.t("Add New Students")} </Link>
                </li>
                {/* <li>
                  <Link to="/#">{props.t("Student Promotion")} </Link>
                </li> */}
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-inbox-full"></i>
                <span>{props.t("Teachers")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/all-teachers">{props.t("All Teachers")}</Link>
                </li>
                <li>
                  <Link to="/new-teacher">{props.t("Add New Teachers")} </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-calendar-check"></i>
                <span>{props.t("Parents")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/parents">{props.t("All Parents")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-account-circle-outline"></i>
                <span>{props.t("Library")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/all-books">{props.t("All Books")}</Link>
                </li>
                <li>
                  <Link to="/add-book">{props.t("Add New Books")}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">{props.t("Components")}</li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                <span>{props.t("Account")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/all-fees-collection">{props.t("All Fees Collection")}</Link>
                </li>
                <li>
                  <Link to="/create-student-payment">{props.t("Create Students Payment")}</Link>
                </li>
                <li>
                  <Link to="/all-expenses">{props.t("All Expenses")}</Link>
                </li>
                <li>
                  <Link to="/add-new-expense">{props.t("Add New Expenses")}</Link>
                </li>
              </ul>
            </li>

           

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-clipboard-list-outline"></i>
                <span>{props.t("Subjets")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/all-subjects">{props.t("All Subjects")}</Link>
                </li>
                <li>
                  <Link to="/add-subject">{props.t("Add New Subjects")}</Link>
                </li>
              </ul>
            </li>

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-chart-donut"></i>
                <span>{props.t("Attendance")}</span>
              </Link>

              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("List of Students Attendance")}</Link>
                </li>
              </ul>
            </li> */}

<li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-clipboard-list-outline"></i>
                <span>{props.t("Class")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/all-classes">{props.t("All Class")}</Link>
                </li>
                <li>
                  <Link to="/add-class">{props.t("Add New Class")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-emoticon-happy-outline"></i>
                <span>{props.t("Exams")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/all-exams">{props.t("All Exams Schedule")}</Link>
                </li>
                <li>
                  <Link to="/add-exam">{props.t("Add New Exams")}</Link>
                </li>
              </ul>
            </li>

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-map-marker-outline"></i>
                <span>{props.t("Transport")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/all-transport">{props.t("All Transport")}</Link>
                </li>
                <li>
                  <Link to="/add-transport">{props.t("Add New Transport")}</Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-file-tree"></i>
                <span>{props.t("Notice")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/all-notice">{props.t("All Notice Board")}</Link>
                </li>
                <li>
                  <Link to="/add-notice">{props.t("Add New Notice")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-file-tree"></i>
                <span>{props.t("Messages")}</span>
              </Link>

              <ul className="sub-menu">
                <li>
                  <Link to="/all-message">{props.t("See All Messages")}</Link>
                </li>
                <li>
                  <Link to="/add-message">{props.t("Create New Messages")}</Link>
                </li>
              </ul>
            </li>

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-file-tree"></i>
                <span>{props.t("Maps")}</span>
              </Link>

              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Level 1.1")}</Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-file-tree"></i>
                <span>{props.t("Account Settings")}</span>
              </Link>

              <ul className="sub-menu">
                <li>
                  <Link to="/user-profile">{props.t("User Profile")}</Link>
                </li>
                <li>
                  <Link to="/add-user-profile">{props.t("Ad New User Profile")}</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
