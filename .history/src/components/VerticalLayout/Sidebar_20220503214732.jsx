import PropTypes from "prop-types";
import React, {useState, useEffect}from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import avatar2 from "../../assets/images/users/avatar-smart-school.png";

import { useAuth } from "../../Contexts/AuthContext"
import { Db } from "../../Database/init-firebase";
import { collection, getDocs} from "firebase/firestore"


const Sidebar = (props) => {

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

  console.log(profile);


  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="h-100">
          <div className="user-wid text-center py-4">
            <div className="user-img">
              <img
                src={profile?.img ? profile.img : avatar2}
                alt="avatar-smart-school"
                className="avatar-md mx-auto rounded-circle"
              />
            </div>

            <div className="mt-3">
              <Link to="#" className="text-dark fw-medium font-size-16">
               {profile?.name}
              </Link>
              <p className="text-body mt-1 mb-0 font-size-13">
                Full Stack Developer
              </p>
            </div>
          </div>
          <div data-simplebar className="h-100">
            {props.type !== "condensed" ? (
              <SidebarContent />
            ) : (
              <SidebarContent />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStatetoProps = (state) => {
  return {
    layout: state.Layout,
  };
};
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
