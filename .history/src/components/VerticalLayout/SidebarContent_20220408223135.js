import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = (props) => {
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
                  <Link to="/#">{props.t("Student")} </Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Parents")} </Link>
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
                  <Link to="/#">{props.t("All Student")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Add New Students")} </Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Student Promotion")} </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-inbox-full"></i>
                <span>{props.t("Teachers")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("All Teachers")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Add New Teachers")} </Link>
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
                  <Link to="/#">{props.t("All Parents")}</Link>
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
                  <Link to="/#">{props.t("Login")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Register")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Recover Password")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Lock Screen")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Starter Page")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Invoice")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Profile")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Maintenance")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Coming Soon")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Timeline")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("FAQs")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Pricing")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Error 404")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Error 500")}</Link>
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
                  <Link to="/#">{props.t("Alerts")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Buttons")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Cards")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Carousel")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Dropdowns")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Grid")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Images")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Lightbox")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Modals")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Range Slider")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Session Timeout")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Progress Bars")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Sweet-Alert")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Tabs & Accordions")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Typography")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Video")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("General")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Colors")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Rating")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="waves-effect">
                <i className="mdi mdi-newspaper"></i>
                <span className="badge rounded-pill bg-danger float-end">
                  6
                </span>
                <span>{props.t("Class")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Basic Elements")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Form Validation")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Form Advanced")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Form Editors")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Form File Upload")} </Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Form Xeditable")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Form Repeater")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Form Wizard")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Form Mask")}</Link>
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
                  <Link to="/#">{props.t("Basic Tables")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Data Tables")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Responsive Table")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Editable Table")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-chart-donut"></i>
                <span>{props.t("Attendance")}</span>
              </Link>

              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Apex charts")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Chartist Chart")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("E Chart")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Jquery Knob")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Sparkline Chart")}</Link>
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
                  <Link to="/#">{props.t("Boxicons")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Material Design")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Dripicons")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Font awesome")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-map-marker-outline"></i>
                <span>{props.t("Transport")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Google Maps")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Vector Maps")}</Link>
                </li>
                <li>
                  <Link to="/#">{props.t("Leaflet Maps")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-file-tree"></i>
                <span>{props.t("Notice")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Level 1.1")}</Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    {props.t("Level 1.2")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{props.t("Level 2.1")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Level 2.2")}</Link>
                    </li>
                  </ul>
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
                  <Link to="/#">{props.t("Level 1.1")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-file-tree"></i>
                <span>{props.t("Maps")}</span>
              </Link>

              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Level 1.1")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-file-tree"></i>
                <span>{props.t("Account Settings")}</span>
              </Link>

              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Level 1.1")}</Link>
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
