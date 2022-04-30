const ArraysForm = [
{
      id:1,
      name:"firstName",
      label:"First Name",
      placeholder:"First Name",
      type:"text",
      errorMessage:"Enter Name",
    //   validate:{{ required: { value: true } }}
},
    {
      id:2,
      label:"Last Name",
      name:"LastName",
      type:"Last Name",
      placeholder:"Last Name",
      errorMessage:"Last Name",
    //   validate={{ required: { value: true } }}
    },
{
     id:3,
      name:"studenNumber",
      label:"Student Number",
      type:"text",
      placeholder:"Student Number",
      errorMessage:"Invalid Student Number"
    //   validate:{{ required: { value: true }}}
 }
  
      <AvField 
      className="mb-3 p-2 bg-white"
      name="date_of_birth"
      label="Date (validate prop)" 
      type="date" 
      errorMessage="Invalid date of birth"
      validate={{ required: { value: true }}}
      title="Use MM/DD/YYYY"
       />

    <AvField
      className="mb-3 p-2 bg-white"
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
    </Col>


    <Col md={6}> 
    
    
    <AvField
      className="mb-3 p-2 bg-white"
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
    
    <AvField type="select" name="gender" label="Select Gender" className="mb-3 p-2 bg-white" placeholder="Select Gender"  errorMessage="please select gender"  validate={{ required: { value: true }}}>
      <option></option>
      <option>Male</option>
      <option>Female</option>
      <option>Others</option>
    </AvField>

    <AvField type="select" name="religion" placeholder="Religion" label="Select your Relion" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
    {
      religions_Arrays().map((religion, key) => 
        <option key={key}> {religion} </option>
      )
    }
    </AvField>

    <AvField type="select" name="grade" placeholder="Grade" label="Select your grade" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
    {
      grade_Arrays().map((grade, key) => 
        <option key={key}> {grade} </option>
      )
    }
    </AvField>


    <AvField type="select" name="birthCountry" placeholder="Birth country" label="Select Country Of birth" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
    {
      countrie_Arrays().map((country, key) => 
        <option key={key}> {country} </option>
      )
    }
    </AvField>

    </Col>

    <Col lg={12} md={6}>

    <AvField
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

      <Row className="m-4"> 
    <Col xl={16} md={6}>
       

        <AvField 
          className="mb-3 p-2 bg-white select-file"                   
          type="file"  
          name="pic"
          label="choose image"
          errorMessage="Please select image"
          aria-describedby="inputGroupFileAddon01"
          validate={{
            required: { value: true },
          }}
          onChange={(e) => setFileName(e.target.files[0])}
    />
    </Col>

        <Col lg={6} md={6}>
          <img src={img ? img : schoolImg} className="rounded-circle avatar-lg" alt="" />
        </Col>
              
    </Row>

      <h5 className="mb-5"> Parent Details </h5>

    <Row>
      <Col xl={6} md={6}>
        <AvField
          className="mb-3 p-2 bg-white"
          label="Enter Parent Name"
          name="parentName"
          type="text"
          placeholder="Full Name"
          errorMessage="full name"
          validate={{ required: { value: true } }}
        />
        <AvField
          className="mb-3 p-2 bg-white"
          label="Enter Parent Last Name"
          name="parentLastName"
          type="text"
          placeholder="Parent Last Name" n
          errorMessage="parent Last Name"
          validate={{ required: { value: true } }}
        />
        <AvField
          className="mb-3 p-2 bg-white"
          name="CellNumber"
          label="Enter cell phone Number "
          type="text"
          placeholder="Cell phone Number"
          errorMessage="Invalid cell phone Number"
          validate={{ required: { value: true }}}
        />
      </Col>

    <Col xl={6} md={6}>
      <AvField
        className="mb-3 p-2 bg-white"
        name="parentEmail"
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
          className="mb-3 p-2 bg-white"
          label="Job Title"
          name="jobTitle"
          type="text"
          placeholder="Job Title"
          errorMessage="Job Title is required"
          validate={{ required: { value: true } }}
      />


          <AvField type="select" name="parentBirthCountry" placeholder="Parent Birth country" label="Select Country Of birth" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
              {
                countrie_Arrays().map((country, key) => 
                <option key={key}> {country} </option>
                )
              }
          </AvField>
    </Col>
      
    <Col xl={12} md={6}>
          <AvField
            className="mb-3"
            type="textarea"
            label="Your Adress"
            rows="5"
            name="parentAddress"
            id="address"
            placeholder="Parent Address"
            errorMessage="This value is required."
            validate={{
              required: { value: true },
            }}
          />

      </Col>

    </Row>
]