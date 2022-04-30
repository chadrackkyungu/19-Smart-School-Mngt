import React, { useState, useEffect } from "react"

import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import MetaTags from "react-meta-tags";
import Breadcrumb from '../../components/Common/Breadcrumb';

import {  doc, updateDoc, collection, getDocs } from 'firebase/firestore';

import { Db, auth, storage } from '../../Database/init-firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { successTost_Update_Std, failUpdate_std } from '../../components/Toast'; //Toast Notification
import BackBtn from "../../components/Back-btn";
import { useParams} from "react-router-dom";



const AddNewStudents = () => {

    const { id } = useParams();

    const [perc, setPerc] = useState(0);
    const [img, setImg] = useState();
    const [data, setData] = useState([]);
    const [fileName, setFileName] = useState("");



    // get the data and populate inside the input
  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "STUDENTS"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield}); 
        })
        const result = list.find((stId) => stId.id === id)
        setData(result);
        setImg(result.img); //the the url image
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id])

  console.log(img);


  //  image upload
  useEffect(() => {
    const uploadFile = () =>{
      const name = new Date().getTime() + fileName.name; 

      const storageRef = ref(storage, fileName.name);
      const uploadTask = uploadBytesResumable(storageRef, fileName)

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
          setPerc(progress.toFixed(0));

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImg(downloadURL) // if the user upload an image  set that image
          });
        }
      );
    };
    fileName && uploadFile();
  }, [fileName]);


  console.log(img);

  // Update Data 
  const handleValidSubmit = async(e, std_Input) => {
    const {LastName, address, date_of_birth, email, firstName, gender, grade, number, religion, studenNumber} = std_Input;
    const allfield = {LastName, address, date_of_birth, email, firstName, gender, grade, number, religion, studenNumber, img};
    try {
        const userId = await createUserWithEmailAndPassword(auth, std_Input.email, std_Input.number);
        const updateRes = doc(Db, "STUDENTS",  userId.user.uid);
        await updateDoc(updateRes, allfield);

        successTost_Update_Std();
    } catch (error) {
        failUpdate_std()
    }
  };



  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Smart School Management System</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Add Students" />
        </Row>

        <Card>
        <div className="d-flex justify-content-between align-items-center">
                <BackBtn url_Link="all-students" />
        </div>
      </Card>

    

      <Row className="d-flex justify-content-around align-items-center  mobile-form-padding">
            <Col xl={12} md={6}>
              <Card className="mini-stat bg-white text-black ">
                <CardBody>
                      <AvForm onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v);
                        // console.log(e, v);
                      }}>
                  <Row> 

                    <Col md={6}> 
                    <AvField
                      value={data.firstName}
                      className="mb-3 p-3 bg-white"
                      name="firstName"
                      label="First Name"
                      placeholder="First Name"
                      type="text"
                      errorMessage="Enter Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      value={data.LastName}
                      className="mb-3 p-3 bg-white"
                      label="Last Name"
                      name="LastName"
                      type="Last Name"
                      placeholder="Last Name"
                      errorMessage="Last Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      value={data.studenNumber}
                      className="mb-3 p-3 bg-white"
                      name="studenNumber"
                      label="Student Number"
                      type="text"
                      placeholder="Student Number"
                      errorMessage="Invalid Student Number"
                      validate={{ required: { value: true }}}
                    />
                  
                    <AvField 
                      value={data.date_of_birth}
                      className="mb-3 p-3 bg-white"
                      name="date_of_birth"
                      label="Date (validate prop)" 
                      type="date" 
                      errorMessage="Invalid date of birth"
                      validate={{ required: { value: true }}}
                      title="Use MM/DD/YYYY"
                       />

                    <AvField
                      value={data.address}
                      className="mb-3"
                      type="textarea"
                      label="Adress"
                      rows="5"
                      name="address"
                      id="address"
                      placeholder="Address"
                      errorMessage="This value is required."
                      validate={{
                        required: { value: true },
                      }}
                    />

                    </Col>


                    <Col md={6}> 
                    <AvField
                      value={data.email}
                      className="mb-3 p-3 bg-white"
                      name="email"
                      label="E-Mail  "
                      placeholder="Enter Valid Email"
                      type="email"
                      errorMessage="Invalid Email"
                      validate={{
                        required: { value: true },
                        email: { value: true },
                      }}
                    />
                    
                    <AvField
                       value={data.number}
                      className="mb-3 p-3 bg-white"
                      name="number"
                      label="Number  "
                      placeholder="Enter Only number"
                      type="number"
                      errorMessage="Enter Only Number"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]+$",
                          errorMessage: "Only Numbers",
                        },
                      }}
                    />
                    
                    <AvField  value={data.gender} type="select" name="gender" label="Select Gender" className="mb-3 p-3 bg-white" placeholder="Select Gender"  errorMessage="please select gender"  validate={{ required: { value: true }}}>
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </AvField>

                    <AvField  value={data.religion} type="select" name="religion" placeholder="Religion" label="Select your Relion" className="mb-3 p-3 bg-white"  validate={{ required: { value: true }}}>
                      <option></option>
                      <option>Christian</option>
                      <option>Islam</option>
                      <option>Hindu</option>
                      <option>Buddish</option>
                    </AvField>

                    <AvField  value={data.grade} type="select" name="grade" placeholder="Grade" label="Select your grade" className="mb-3 p-3 bg-white"  validate={{ required: { value: true }}}>
                      <option></option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </AvField>

                    {
                      perc > 1 &&(
                        <div className="d-flex align-items-center justify-centent">
                        <progress  max="100" value={perc} class="amount-progress" ></progress> 
                        <span>{perc}%</span>
                     </div>  
                      )
                    }

                    
                   
                   
                    <AvField 
                      // value={data.img}
                      className="mb-3 p-3 bg-white select-file"                   
                      type="file"  
                      name="pic"
                      label="choose image"
                      errorMessage="Please select image"
                      aria-describedby="inputGroupFileAddon01"
                      // validate={{
                      //   required: { value: true },
                      // }}
                      onChange={(e) => setFileName(e.target.files[0])}
                    />

                    <Row>
                        <Col md={12}>
                        <img src={img ? img : data.img} className="rounded-circle avatar-lg" alt="" />
                        </Col>
                    </Row>
                              
                    </Col>

                    <FormGroup className="mb-0">
                      <div className="d-flex p-2 text-center btn-mobile">
                        {/* <Button type="submit" color="primary" className="m-2 w-25 btn-mobile-width"  disabled={perc !== null && perc < 100}> */}
                        <Button type="submit" color="primary" className="m-2 w-25 btn-mobile-width" >
                          Submit
                        </Button>
                      </div>
                    </FormGroup>

                    </Row>
                  </AvForm>

                    </CardBody>
              </Card>
            </Col>
        </Row>

        </div>

    </React.Fragment>
  );
};

export default AddNewStudents;