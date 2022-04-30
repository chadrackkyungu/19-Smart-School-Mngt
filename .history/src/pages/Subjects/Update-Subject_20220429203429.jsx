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

import { serverTimestamp, doc, collection, getDocs, updateDoc, deleteDoc} from 'firebase/firestore';
import { Db, storage} from '../../Database/init-firebase';

import { successTost_Update_Std, failUpdate_std, successTost } from '../../components/Toast'; //Toast Notification

//arrays
import  { grade_Arrays } from '../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx';

import BackBtn from "../../components/Back-btn";
import { useParams, useHistory } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";


function UpdateSubject() {

  let history = useHistory();

  const [fileName, setFileName] = useState("");
  const [perc, setPerc] = useState(0);
  const [img, setImg] = useState();

  const { id } = useParams();
  const [data, setData] = useState([]);

console.log(img);

//GET STUDENTS PAYMENT DATA FROM THE DB
useEffect(() =>{
  const fetchData = async() =>{
    let list = [];
    try {
      const querySnapshot = await getDocs(collection(Db, "SUBJECTS"));
          querySnapshot.forEach((doc) => {
          list.push({id: doc.id, ...doc.data().allfield}); 
      })
      const result = list.find((stId) => stId.id === id)

      setData(result);
      setImg(result.img)
      
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
}, [id])




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
            setImg(downloadURL)
          });
        }
      );
    };

    fileName && uploadFile();
  }, [fileName]);

  

  //DELETE PAYMENT
  const deleteStudent = async() => {
    try {
      await deleteDoc(doc(Db, "SUBJECTS", data.id));
      successTost();
      history.push(`/all-subjects`);
    }catch(err){
      console.log("Error".err);
    }
  }
  

   // UPDATE STUDENT
   const handleValidSubmit = async(e, std_Input) => {
    const { subjectName,subjectCode, type, grade } = std_Input;
    const allfield = { subjectName,subjectCode, type , grade , img ,  timeStamp: serverTimestamp()};

    try {
        const updateRes = doc(Db, "SUBJECTS", data.id);
        await updateDoc(updateRes, {allfield});
        successTost_Update_Std(); 
    } catch (error) {
        failUpdate_std() 
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Smart-school | Update Subjects</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Add A Subject" />
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4">
                <BackBtn url_Link="all-subjects" />
                <div className="btn-center text-center ">
                   <button className="btn btn-primary" onClick={deleteStudent}> delete </button>
                </div>
        </div>
    <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
      <Col xl={12} md={6}>
        <Card className="mini-stat bg-white text-black ">
          <CardBody>
            <AvForm onValidSubmit={(e, v) => {
               handleValidSubmit(e, v);
            }}>
            <h5 className="mb-5"> Update Subjects  </h5>
            <hr/>
            <Row> 
              <Col md={6}> 
               
                  <AvField
                  value={data.subjectName}
                      className="mb-3 p-2 bg-white input-style"
                      name="subjectName"
                      label="Subject Name"
                      type="text"
                      errorMessage="Please enter subject name"
                      validate={{ required: { value: true } }}
                  />

                  <AvField
                  value={data.subjectCode}
                      className="mb-3 p-2 bg-white input-style"
                      name="subjectCode"
                      label="Code"
                      type="number"
                      errorMessage="Please Enter subject number"
                      validate={{ required: { value: true } }}
                  />

  
                <AvField value={data.type} type="select" name="type" label="Select Subject Type" className="mb-3 p-2 bg-white input-style"   errorMessage="please select Subject Type"  validate={{ required: { value: true }}}>
                  <option></option>
                  <option>Mathematics</option>
                  <option>Theory</option>
                  <option>Practical</option>
                </AvField>

                <AvField value={data.grade} type="select" name="grade"  label="Class grade" className="mb-3 p-2 bg-white input-style"  validate={{ required: { value: true }}}>
                  {
                    grade_Arrays().map((grade, key) => 
                      <option key={key}> {grade} </option>
                    )
                  }
              </AvField>

              </Col> 

              

              <Col md={6}> 
             
              <Row className="m-4"> 

                <Col lg={12} md={6} className="mb-5">
                      <img src={img ? img : data.img} className="rounded-circle avatar-lg" alt="" />
                </Col>


                <Col xl={12} md={6} className="mt-4">
                  {
                    perc > 1 &&(
                      <div className="d-flex align-items-center justify-centent">
                      <progress  max="100" value={perc} class="amount-progress" ></progress> 
                      <span>{perc}%</span>
                  </div>  
                    )
                  }

                  

                  <AvField 
                    className="mb-3 p-2 bg-white select-file"                   
                    type="file"  
                    name="pic"
                    label="choose image"
                    errorMessage="Please select image"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={(e) => setFileName(e.target.files[0])}
                  />
                  </Col>
              </Row>
              </Col>

            
                <FormGroup className="mb-0">
                  <div className="d-flex justify-content-center p-2 text-center">
                    <Button type="submit" color="primary" className="m-2  btn-mobile-width" >
                      Update Subject
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
  )
}

export default UpdateSubject