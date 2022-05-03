import PropTypes from "prop-types";
import React, { useState } from "react";

import { connect } from "react-redux";
import { Form, Input, Button, Row, Col, Container } from "reactstrap";

import { Link } from "react-router-dom";

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import logoSm from "../../assets/images/logo-sm.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

// import images
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";
import Background from "../../assets/images/megamenu-img.png";

//i18n
import { withTranslation } from "react-i18next";

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions";

const Header = (props) => {
  const [search, setsearch] = useState(false);
  const [megaMenu, setmegaMenu] = useState(false);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  
  function tToggle() {
    const body = document.body;
    if (window.screen.width <= 768) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }


  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <Container fluid>
            <div className="float-end">
              <Dropdown
                className="d-inline-block d-lg-none ms-2"
                onClick={() => {
                  setsearch(!search);
                }}
                type="button"
              >
                <DropdownToggle
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  tag="button"
                >
                  <i className="mdi mdi-magnify"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                  <Form className="p-3">
                    <div className="m-0">
                      <div className="input-group">
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <Button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </DropdownMenu>
              </Dropdown>

              {/* <LanguageDropdown /> */}

              <Dropdown className="d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  onClick={() => {
                    toggleFullscreen();
                  }}
                  className="btn header-item noti-icon waves-effect"
                  data-toggle="fullscreen"
                >
                  <i className="mdi mdi-fullscreen"></i>
                </button>
              </Dropdown>{" "}

              <NotificationDropdown /> <ProfileMenu />{" "}


              {/* <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
                onClick={() => {
                  props.showRightSidebarAction(!props.showRightSidebar);
                }}
              >
                <i className="mdi mdi-settings-outline"></i>
              </button> */}
            </div>
            <div>
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logoLight} alt="" height="20" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoDark} alt="" height="19" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLight} alt="" height="20" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="19" />
                  </span>
                </Link>
              </div>
              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                data-toggle="collapse"
                onClick={() => {
                  tToggle();
                }}
                data-target="#topnav-menu-content"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>
              {/* <Form className="app-search d-none d-lg-inline-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </Form> */}
              <Dropdown
                className="dropdown-mega d-none d-lg-inline-block ms-2"
                isOpen={megaMenu}
                toggle={() => {
                  setmegaMenu(!megaMenu);
                }}
              >
                <DropdownToggle
                  className="btn header-item waves-effect"
                  caret
                  tag="button"
                >
                  {props.t("Mega Menu")} <i className="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-megamenu">
                  <Row>
                    <Col sm={12}>
                      <Row>
                        <Col md={2}>
                          <h5 className="font-size-14 mt-0">
                            {props.t("Students")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="/dashboard">{props.t("Admin")}</Link>
                            </li>
                            <li>
                              <Link to="/all-students">{props.t("All students")}</Link>
                            </li>
                            <li>
                              <Link to="/new-student">{props.t("Add student")}</Link>
                            </li>
                           
                          </ul>
                        </Col>
                        <Col md={2}>
                          <h5 className="font-size-14 mt-0">
                            {props.t("Teachers")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="/all-teachers">{props.t("Teachers")}</Link>
                            </li>
                            <li>
                              <Link to="/new-teacher">{props.t("Add teacher")}</Link>
                            </li>
                            <li>
                              <Link to="/parents">{props.t("Parents")}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={2}>
                          <h5 className="font-size-14 mt-0">
                            {props.t("Accounting")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="/all-fees-collection">{props.t("fees Collection ")}</Link>
                            </li>
                            <li>
                              <Link to="/create-student-payment">{props.t("Payment")}</Link>
                            </li>
                            <li>
                              <Link to="/all-expenses">{props.t("Expenses")}</Link>
                            </li>
                            <li>
                              <Link to="/add-new-expense">{props.t("Add expenses")}</Link>
                            </li>
                           
                          </ul>
                        </Col>

                        <Col md={2}>
                          <h5 className="font-size-14 mt-0">Subjects</h5>
                          <ul className="list-unstyled megamenu-list">
                          <li>
                              <Link to="/all-subjects">{props.t("Subjects")}</Link>
                            </li>
                            <li>
                              <Link to="/add-subject">{props.t("Add subjects")}</Link>
                            </li>
                            <li>
                              <Link to="/all-classes">{props.t("Classes")}</Link>
                            </li>
                            <li>
                              <Link to="/add-class">{props.t("Add class")}</Link>
                            </li>
                           
                          </ul>
                        </Col>
                        <Col md={2}>
                          <h5 className="font-size-14 mt-0">Exams</h5>
                          <ul className="list-unstyled megamenu-list">
                          
                            <li>
                              <Link to="/all-exams">{props.t("Exams")}</Link>
                            </li>
                            <li>
                              <Link to="/add-exam">{props.t("Add exam")}</Link>
                            </li>
                            <li>
                              <Link to="/all-books">{props.t("All Books")}</Link>
                            </li>
                           
                          </ul>
                        </Col>

                        <Col md={2}>
                          <h5 className="font-size-14 mt-0">School Notice</h5>
                          <ul className="list-unstyled megamenu-list">
                          
                            <li>
                              <Link to="/all-notice">{props.t("Notice")}</Link>
                            </li>
                            <li>
                              <Link to="/add-notice">{props.t("Add Notice")}</Link>
                            </li>
                            <li>
                              <Link to="/all-message">{props.t("Message")}</Link>
                            </li>
                            <li>
                              <Link to="/add-message">{props.t("Add message")}</Link>
                            </li>
                          </ul>
                        </Col>


                      </Row>
                    </Col>
                    {/* <Col sm={6}>
                      <Row>
                        <Col sm={6}>
                          <h5 className="font-size-14 mt-0">Components</h5>
                          <div className="px-lg-2">
                            <div className="row g-0">
                              <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                  <img src={github} alt="Github" />
                                  <span>GitHub</span>
                                </Link>
                              </div>
                              <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                  <img src={bitbucket} alt="bitbucket" />
                                  <span>Bitbucket</span>
                                </Link>
                              </div>
                              <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                  <img src={dribbble} alt="dribbble" />
                                  <span>Dribbble</span>
                                </Link>
                              </div>
                            </div>

                            <div className="row g-0">
                              <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                  <img src={dropbox} alt="dropbox" />
                                  <span>Dropbox</span>
                                </Link>
                              </div>
                              <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                  <img src={mail_chimp} alt="mail_chimp" />
                                  <span>Mail Chimp</span>
                                </Link>
                              </div>
                              <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                  <img src={slack} alt="slack" />
                                  <span>Slack</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div>
                            <div
                              className="card text-white mb-0 overflow-hidden text-white-50"
                              style={{
                                backgroundImage: `url(${Background})`,
                                backgroundSize: "cover",
                              }}
                            >
                              <div className="card-img-overlay"></div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <h4 className="text-white mb-3">Sale</h4>

                                    <h5 className="text-white-50">
                                      Up to{" "}
                                      <span className="font-size-24 text-white">
                                        50 %
                                      </span>{" "}
                                      Off
                                    </h5>
                                    <p>At vero eos accusamus et iusto odio.</p>
                                    <div className="mb-4">
                                      <Link
                                        to="#"
                                        className="btn btn-success btn-sm"
                                      >
                                        View more
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col> */}
                  </Row>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Container>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
};

const mapStatetoProps = (state) => {
  const { layoutType, showRightSidebar, leftMenu, leftSideBarType } =
    state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header));
