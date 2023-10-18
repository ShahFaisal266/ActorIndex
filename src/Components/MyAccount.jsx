import React,{ useState } from 'react';

import FlagSelect from 'react-flags-select';
import { RiLock2Line } from 'react-icons/ri';
import { FaUpload,FaInfoCircle,FaUser ,FaCreditCard,FaBuilding,FaPlus} from 'react-icons/fa';
import { FiEdit, FiMail,FiMapPin } from 'react-icons/fi';
import { MdVerifiedUser } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import { Description } from '@mui/icons-material';





function MyAccount() {
  const circleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25px', // Adjust the width and height as needed
    height: '25px', // Ensure it's a square to create a circle
    backgroundColor: 'yellow',
    borderRadius: '50%', // Makes it a circle
  };
  const [username,setUsername]=useState('');
  const [usernameerror, setUsernameError] = useState('');
  const [firstname,setFirstName]=useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [email,setEmail]=useState('');
  const [emailerror,setEmailError]=useState('');
  const [familyname,setFamilyName]=useState('');
  const [familynameError,setFamilyNameError]=useState('');
  const [businessname,setbusinessname]=useState('');
  const [businessnameError,setbusinessnameError]=useState('');
  const [Businesscategory,setbuinessCategory]=useState('');
  const [BusinesscategoryError,setbuinessCategoryError]=useState('');
  const [subcategory,setsubCategory]=useState('');
  const [subcategoryError,setsubCategoryError]=useState('');
  const [description,setdescription]=useState('');
  const [descriptionError,setdescriptionError]=useState('');
  const [password,setpassword]=useState('');
  const [passwordError,setpasswordError]=useState('');
  const [jobtitle, setJobtitle] = useState('');
  const [jobtitleError, setJobtitleError] = useState('');
  const [selectGreeting, setSelectedGreeting] = useState('Select Greeting');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [keywords, setKeywords] = useState(['']); // Initialize with one input
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedState, setSelectedState] = useState('');
  const [selectPostalCode, setSelectedPostalCode] = useState('');
  const [selectedLocation,setSelectedLocation]=useState('');

  const handleUserNameChange=(event)=>{
    setUsername(event.target.value);
  }
  const handleBusinessChange=(event)=>{
    setbusinessname(event.target.value);
  }
  const handleBusinesscategory=(event)=>{
    setbuinessCategory(event.target.value);
  }
  const hanldeDescription=(event)=>{
    setdescription(event.target.value);
  }
  const handlePassword=(event)=>{
    setpassword(event.target.value);
  }
  const handleSubCategory=(event)=>{
    setsubCategory(event.target.value);
  }
  const handlejobtitle=(event)=>{
    setJobtitle(event.target.value);
  }
  const handlefamilyName=(event)=>{
    setFamilyName(event.target.value);
  }
  const handelFirstName=(event)=>{
    setFirstName(event.target.value);
  }
  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [fields, setFields] = useState([{ location: 'PK', state: 'Swabi', region: 'KPK' }]);

  const handleLocationChange = (index, location) => {
    const updatedFields = [...fields];
    updatedFields[index].location = location;
    setFields(updatedFields);
  };

  const handleChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { location: 'PK', state: 'Swabi', region: 'KPK' }]);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };


  const handleGreetingChange = (event) => {
    setSelectedGreeting(event.target.value);
  };
  const handleSelectedLocation1 = (country) => {
    setSelectedLocation(country);
  };
  const handlePostalCode = (event) => {
    setSelectedPostalCode(event.target.value);
  };
  const handleStateProvice = (event) => {
    setSelectedState(event.target.value);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  

  // Function to add a new keyword input field
  const addKeywordInput = () => {
    setKeywords([...keywords, '']);
  };

  // Function to update the keyword at a specific index
  const updateKeyword = (index, value) => {
    const updatedKeywords = [...keywords];
    updatedKeywords[index] = value;
    setKeywords(updatedKeywords);
  };

  //All the field will not empty and all the data are in console
  const handleSave = () => {
    // Log all the form values and fields
    if (username.trim() !== ""&& selectGreeting.trim()!==""&& password.trim()!==""&& firstname.trim()!==""&& selectedCountry.trim()!==""&& subcategory.trim()!==""&&
     businessname.trim()!==""&& Businesscategory.trim()!==""&& phoneNumber.trim()!==""&& jobtitle.trim()!==""&&email.trim()!==""&&keywords.trim()!==null) 
    {
      alert("Saved Sucessfully");
      console.log(username+email+firstname+businessname+Businesscategory+subcategory+phoneNumber+selectedCountry+selectGreeting+jobtitle)
      console.log("Keywords:");
      keywords.forEach((keyword, index) => {
        console.log(`Keyword ${index + 1}: ${keyword}`);
});
    }
    else
     alert("Some Fields are Empty.Please! Fill all the Fields");
    setFirstnameError('First Name is Required')
    setUsernameError('User Name is Required');
    setEmailError("Email is Required");
    setFamilyNameError("Family Name is Required");
    setJobtitleError("Job Title is Required");
    setPhoneNumberError("Phone Number is Required");
    setbusinessnameError("Business Name is Required");
    setbuinessCategoryError("Business category is Required");
    setpasswordError("Password is Required");
    setdescriptionError("Description is Required");
   
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <div className="flex items-center space-x-4 ">
            <FaUser size={30} className="text-yellow-500" />
            <h2 className="text-lg text-yellow-500 ">ACCOUNT INFORMATION</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <div className="flex items-center space-x-4">
          <div className="border-l border-dotted border-yellow-500  pl-4 h-20"></div>
            <FaCreditCard size={32} className="text-yellow-500" />
            <h2 className="text-lg text-yellow-500">PAYMENT DETAILS</h2>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
            UserName
          </label>
          <input
            type="text"
            name="name"
            value={username}
            onChange={handleUserNameChange}
            placeholder="UserName"
            className="w-full px-3 py-2 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            style={{ backgroundColor: '#010D25' }}
          />
          {usernameerror && (
            <p className="text-red-500 text-sm mt-2">{usernameerror}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <div className="flex items-center my-4">
            <span className="text-green-500">
              <MdVerifiedUser size={24} />
            </span>
            <h4 className="block text-white">Verified Account</h4>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap">
        <FaInfoCircle className="my-1 text-yellow-500" fontSize={25} />
        <h2 className="text-2xl text-yellow-500 mb-4 mx-2">CONTACT PERSON</h2>
      </div>

      <form>
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
             First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={handelFirstName}
              placeholder="Your First Name"
              className="w-full text-white px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              style={{ backgroundColor: '#010D25' }}
            />
            {firstnameError && (
            <p className="text-red-500 text-sm mt-2">{firstnameError}</p>
          )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmail}
              placeholder="Your Email"
              className="w-full px-3 text-white py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              style={{ backgroundColor: '#010D25' }}
            />
            {emailerror && (
            <p className="text-red-500 text-sm mt-2">{emailerror}</p>
          )}
          </div>
        </div>

        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="country" className="block text-white text-sm font-medium mb-2">
              Family Name
            </label>
            <input
              type="text"
              name="Familyname"
              placeholder="Your Country"
              value={familyname}
              onChange={handlefamilyName}
              className="w-full px-3 text-white py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              style={{ backgroundColor: '#010D25' }}
            />
            {familynameError && (
            <p className="text-red-500 text-sm mt-2">{familynameError}</p>
          )}
          </div>

          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="city" className="block text-white text-sm font-medium mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="jobtitle"
              value={jobtitle}
              onChange={handlejobtitle}
              placeholder="Your City"
              className="w-full px-3 text-white py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              style={{ backgroundColor: '#010D25' }}
            />
             {jobtitleError && (
            <p className="text-red-500 text-sm mt-2">{jobtitleError}</p>
          )}
          </div>
        </div>

        <div className="mb-4 flex flex-wrap">
        <div className="w-full md:w-1/2 mb-4">
            <label htmlFor="dropdown1" className="block text-white text-sm font-medium mb-2">
              Preferred Greeting
            </label>
            <div className="relative">
              <select
                id="dropdown1"
                name="dropdown1"
                className="w-full px-3 py-2 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                style={{ backgroundColor: '#010D25' }}
                value={selectGreeting}
                onChange={handleGreetingChange}
              >
                <option value="Location">Select Preferred Greeting</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="dropdown2" className="block text-white text-sm font-medium mb-2">
              Mobile Number
            </label>
            <div className="flex items-center">
              <div className="mr-2">
                <FlagSelect
                  selected={selectedCountry}
                  onSelect={handleCountryChange}
                  countries={['US', 'PK', 'GB', 'AU', 'DE']}
                  customLabels={{
                    US: '+1',
                    PK: '+92',
                    GB: '+44',
                    AU: '+61',
                    DE: '+49',
                  }}
                  styles={{
                    border: '1px solid #000',
                    borderRadius: '0.25rem',
                    backgroundColor: '#010D25',
                  }}
                />
                 {phoneNumberError && (
            <p className="text-red-500 text-sm mt-2">{phoneNumberError}</p>
          )}
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="w-full px-3 py-2 border text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  style={{ backgroundColor: '#010D25' }}
                />
              </div>
            </div>
          </div>
        </div>
        </form>
        <div className="max-w-md mx-auto w-full pr-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">Profile Image</h2>
      <div className="w-50  mb-4">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-lg border-1 border-dotted" style={{ color: '#0A163C' }}>
            <label
              htmlFor="imageUpload"
              className="cursor-pointer flex flex-col items-center"
            >
              <FaUpload size={32} style={{ color: 'yellow' }} />
              <p className="text-sm text-gray-600 mt-2">Click to upload</p>
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>
    </div>
      
      <div className="mb-4 flex flex-wrap">
        <FaBuilding className="my-1 text-yellow-500" fontSize={25} />
        <h2 className="text-2xl text-yellow-500 mb-4 mx-2">BUSINESS DETAILS</h2>
      </div>
      <form>
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              Business or Trading Name
            </label>
            <input
              type="text"
              name="businessname"
              value={businessname}
              onChange={handleBusinessChange}
              placeholder="Your Business"
              className="w-full text-white px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              style={{ backgroundColor: '#010D25' }}
            />
             {businessnameError && (
            <p className="text-red-500 text-sm mt-2">{businessnameError}</p>
          )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Business category
            </label>
            <input
              type="email"
              name="businesscategory"
              value={Businesscategory}
              onChange={handleBusinesscategory}
              placeholder="Your Email"
              className="w-full px-3 text-white py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              style={{ backgroundColor: '#010D25' }}
            />
             {BusinesscategoryError && (
            <p className="text-red-500 text-sm mt-2">{BusinesscategoryError}</p>
          )}
          </div>
        </div>

        <div className="mb-4 flex flex-wrap">
        <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="dropdown1" className="block text-white text-sm font-medium mb-2">
              Postal Code
            </label>
            <div className="relative">
              <select
                id="dropdown2"
                name="dropdown2"
                className="w-full px-3 py-2 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                style={{ backgroundColor: '#010D25' }}
                value={selectPostalCode}
                onChange={handlePostalCode}
              >
                <option value="SelectPostal">Select Postal Code</option>
                <option value="option1">2324</option>
                <option value="option2">32432</option>
                <option value="option3">3444</option>
              </select>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="city" className="block text-white text-sm font-medium mb-2">
              Select sub-category
            </label>
            <input
              type="text"
              name="sub-category"
              placeholder="Your sub-category"
              value={subcategory}
              onChange={handleSubCategory}
              className="w-full px-3 text-white py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              style={{ backgroundColor: '#010D25' }}
            />
             {subcategoryError && (
            <p className="text-red-500 text-sm mt-2">{subcategoryError}</p>
          )}
          </div>
        </div>

        <div className="mb-4 flex flex-wrap">
        <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="dropdown1" className="block text-white text-sm font-medium mb-2">
              Select State
            </label>
            <div className="relative">
              <select
                id="dropdown3"
                name="dropdown3"
                className="w-full px-3 py-2 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                style={{ backgroundColor: '#010D25' }}
                value={selectedState}
                onChange={handleStateProvice}
              >
                <option value="Select State">Select State</option>
                <option value="option1">KPK</option>
                <option value="option2">Islamabad</option>
                <option value="option3">Lahore</option>
              </select>
            </div>
          </div>

          

          

          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="dropdown2" className="block text-white text-sm font-medium mb-2">
              Location
            </label>
            <div className="relative">
            
                <FlagSelect
                className='block border-2 rounded text-sm font-medium mb-2 '
                  selected={selectedLocation}
                  onSelect={handleSelectedLocation1}
                  countries={['US', 'PK', 'GB', 'AU', 'DE']}
                  customLabels={{
                    US: 'America',
                    PK: 'Pakistan',
                    GB: 'England',
                    AU: 'Austraila',
                    DE: 'Germany',
                  }}
                  styles={{
                    border: '1px solid #000',
                    borderRadius: '0.25rem',
                    backgroundColor: '#010D25',
                  }}
                />
            </div>
          </div>
        </div>
        </form>
        <div className="mb-4">
      <h2 className="text-xl text-white mb-4">Description</h2>
      <div className="md:flex md:space-x-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={hanldeDescription}
            className="text-white shadow-md w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            style={{ backgroundColor: '#010D25' }}
          />
           {descriptionError && (
            <p className="text-red-500 text-sm mt-2">{descriptionError}</p>
          )}
        </div>

        <div className="w-full md:w-1/2">
          <ProfileImageUpload />
        </div>
      </div>
    </div>
  <h4 className="block text-white text-sm font-medium mb-2 my-4">
              Enter Keyword
            </h4>
            <div className="mb-4 flex flex-wrap -mx-2">
        {keywords.map((keyword, index) => (
          <div className="w-full md:w-1/2 px-2 mb-4" key={index}>
            <input
              type="text"
              id={`keyword-${index}`}
              name={`keyword-${index}`}
              
              placeholder={`Keyword ${index + 1}`}
              className="w-full px-3 text-white py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              style={{ backgroundColor: '#010D25' }}
              value={keyword}
              onChange={(e) => updateKeyword(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="mb-4 flex flex-wrap "style={{cursor:'pointer'}} onClick={addKeywordInput}>
      <FaPlus className='text-black-500 my'style={circleStyle}   />
        <h4 className="text-xl text-yellow-500 mb-4 mx-2">Add Another Keywords</h4>
      </div>
      <div className="mb-4 flex flex-wrap "style={{cursor:'pointer'}} onClick={addKeywordInput}>
      <FiMapPin fontSize={25} className='text-yellow-500 my-1'   />
        <h1 className="text-2xl text-yellow-500 mb-4 mx-2">LOCATION YOUR SERVICES ARE AVAILABLE</h1>
      </div>

      <div>
      {fields.map((field, index) => (
        <div key={index} className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor={`location${index}`} className="block text-white text-sm font-medium mb-2">
              Location
            </label>
            <FlagSelect
              selected={field.location}
              onSelect={(country) => handleLocationChange(index, country)}
              countries={['US', 'PK', 'GB', 'AU', 'DE']}
              customLabels={{
                PK: 'Pakistan',
                US: 'America',
                GB: 'England',
                AU: 'Australia',
                DE: 'Germany',
              }}
              styles={{
                border: '2px solid #FFFFFF', // Set the border width and color
                borderRadius: '0.25rem',
                backgroundColor: '#010D25',
              }}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor={`state${index}`} className="block text-white text-sm font-medium mb-2">
              State
            </label>
            <select
              id={`state${index}`}
              name={`state${index}`}
              className="w-full px-3 py-2 border text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={field.state}
              onChange={(e) => handleChange(index, 'state', e.target.value)}
              style={{ backgroundColor: '#010D25' }}
            >
              {/* Add options for the state dropdown */}
              <option value="Location">State</option>
                <option value="option1">Peshawar</option>
                <option value="option2">Swabi</option>
                <option value="option3">Lahore</option>
              <option></option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor={`region${index}`} className="block text-white text-sm font-medium mb-2">
              Region
            </label>
            <select
              id={`region${index}`}
              name={`region${index}`}
              className="w-full px-3 py-2 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={field.region}
              onChange={(e) => handleChange(index, 'region', e.target.value)}
              style={{ backgroundColor: '#010D25' }}
            ><option value="Location">Region</option>
            <option value="option1">KPK</option>
            <option value="option2">Punjab</option>
            <option value="option3">Islamabad</option>
              {/* Add options for the region dropdown */}
            </select>
          </div>
         
        </div>
      ))}
     <div className="mb-4 flex flex-wrap "style={{cursor:'pointer'}} onClick={addField}>
      <FaPlus className='text-black-500 my'style={circleStyle}   />
        <h4 className="text-xl text-yellow-500 mb-4 mx-2">Add Another Location</h4>
      </div>
    </div>
    <div className="mb-4 flex flex-wrap ">
      <RiLock2Line fontSize={25} className='text-yellow-500 my'/>
        <h4 className="text-xl text-yellow-500 mb-4 mx-2">Security</h4>
      </div>
    <div className="mb-4 flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="Your Name"
            className="w-full px-3 py-2 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            style={{ backgroundColor: '#010D25' }}
          />
           {passwordError && (
            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <div className="flex items-center">
           
            <h4 className="block text-white">Change Password?</h4>
            <span className="text-yellow-500 mx-2 my-9">
              <FiEdit size={24} />
            </span>
          </div>
        </div>
      </div>
    
      <div className="mb-4 flex flex-wrap ">
        
      <FiMail fontSize={25} className='text-yellow-500 my'/>
        <h4 className="text-xl text-yellow-500 mb-4 mx-2">Membership</h4>
      </div>
      
      <div className="flex items-center">
  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
    Accountant
  </label>

  <div className="border-l border-dotted border-yellow-500 pl-4 h-10 mx-5"></div>

  <label htmlFor="name" className="block text-white text-sm font-medium mb-2 flex items-center">
    Manager
    <span className="text-white mx-2 my-9">
      <FiEdit size={24} />
    </span>
  </label>
</div>

          
          <div className="flex flex-col md:flex-row">
  <div className="flex items-center mb-2 md:mb-0 md:mr-4">
    <input
      type="checkbox"
      id="checkbox1"
      className="p-2 md:p-3 bg-blue-500 rounded-lg shadow-md focus:ring focus:ring-blue-300 focus:outline-none appearance-none"
    />
    <label className="text-white ml-2 md:ml-3">Bronze</label>
  </div>

  <div className="flex items-center mb-2 md:mb-0 md:mr-4">
    <input
      type="checkbox"
      id="checkbox3"
      className="p-2 md:p-3 bg-green-500 rounded-lg shadow-md focus:ring focus:ring-green-300 focus:outline-none appearance-none"
    />
    <label className="text-white ml-2 md:ml-3">Silver</label>
  </div>

  <div className="flex items-center mb-2 md:mb-0 md:mr-4">
    <input
      type="checkbox"
      id="checkbox3"
      className="p-2 md:p-3 bg-red-500 rounded-lg shadow-md focus:ring focus:ring-red-300 focus:outline-none appearance-none"
    />
    <label className="text-white ml-2 md:ml-3">Gold</label>
  </div>

  <div className="flex items-center mb-2 md:mb-0 md:mr-4">
    <input
      type="checkbox"
      id="checkbox4"
      className="p-2 md:p-3 bg-yellow-500 rounded-lg shadow-md focus:ring focus:ring-yellow-300 focus:outline-none appearance-none"
    />
    <label className="text-white ml-2 md:ml-3">Diamond</label>
  </div>
  <div className="flex items-center mb-2 md:mb-0 md:mr-4">
    <IoIosArrowUp className='text-yellow-500'fontSize={25}/>
    <button className='text-yellow-500 font-semibold underline'>Upgrade My Memebership</button>
  </div>
</div>
<div className="flex justify-end ">
      <button
        type="submit"
        onClick={handleSave}
        className="bg-white text-black px-4 py-2 border border-2 border-red-500 rounded-md hover:bg-black transition duration-300"
      >
        Save Chnages
      </button>
    </div>

  </div>


  );
}

export default MyAccount;

function ProfileImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full pr-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">Business Logo</h2>
      <div className="w-50  mb-4">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-lg border-1 border-dotted" style={{ color: '#0A163C' }}>
            <label
              htmlFor="imageUpload"
              className="cursor-pointer flex flex-col items-center"
            >
              <FaUpload size={32} style={{ color: 'yellow' }} />
              <p className="text-sm text-gray-600 mt-2">Click to upload</p>
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
