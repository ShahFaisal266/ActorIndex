import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './header'
import { IoFlagOutline } from 'react-icons/io5';

export default function Layout() {
  
    const [selectedCountry, setSelectedCountry] = useState('Location');
    const [selectedLanguage, setSelectedlanaguage] = useState('Language'); // Set the default value here
  
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
    };
    const handleLangaugeChange = (event) => {
      setSelectedlanaguage(event.target.value);
    };
	return (
<div className="bg-neutral-100 h-screen w-screen flex flex-col gap-1.5" >
  <div className="flex flex-row flex-1">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Header />
      <div className="flex-1 p-4 min-h-0 overflow-auto "style={{backgroundColor:'#010D25'}}>
        <Outlet />
      </div>
    </div>
  </div>
  <footer className="footer p-4 text-center text-white" style={{backgroundColor:'#0A163C'}}>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="text-left">
	  <h3 style={{fontWeight:900}}>Actors<span style={{color:'yellow'}}>Index</span></h3>
	  <p>sadasd asdsad assadsadsa asd asdsad adasd asdasd adad ada asdhsai hdsa di asdas jasda adbasd asdbasd asdbasd a ssdsaiudiac jdbdsai ac </p>
        <div className='flex flex-col gap-3.5'>
        <select style={{ backgroundColor: 'black' }} value={selectedLanguage} onChange={handleLangaugeChange}>
      <option value="Location">Langauge</option> {/* Set 'Location' as the default value */}
      <option value="country1"><IoFlagOutline /> Urdu</option>
      <option value="country2"><IoFlagOutline /> English</option>
      <option value="country3"><IoFlagOutline /> Pushto</option>
      {/* Add more country options */}
    </select>
        <select style={{ backgroundColor: 'black' }} value={selectedCountry} onChange={handleCountryChange}>
      <option value="Location">Location</option> {/* Set 'Location' as the default value */}
      <option value="country1"><IoFlagOutline /> Aus</option>
      <option value="country2"><IoFlagOutline /> UK</option>
      <option value="country3"><IoFlagOutline /> Pak</option>
      {/* Add more country options */}
    </select>
        </div>
      </div>
      
      <div className="text-left">
	  <h3 style={{fontWeight:900}}>Finding Jobs</h3>
      <p>Actors</p>
      <p>Extras</p>
      <p>Actors</p>
      <p>Extras</p>
      <p>Actors</p>
      <p>Extras</p>
      <p>Actors</p>
      <p>Extras</p>
      <p>Actors</p>
      <p>Extras</p>
      {/* Add more text content as needed */}
    </div>
    <div className="text-left">
      <h3 style={{fontWeight:900}}>Company</h3>
      <p>Web Developer</p>
      <p>Designer</p>
      <p>Web Developer</p>
      <p>Designer</p>
      <p>Web Developer</p>
      <p>Designer</p>
      <p>Web Developer</p>
      <p>Designer</p>
      <p>Web Developer</p>
      <p>Designer</p>
      {/* Add more text content as needed */}
    </div>
    <div className="text-left">
	<h3 style={{fontWeight:900}}>About Us</h3>
      <p>Media Center</p>
      <p>Legal</p>
      <p>Media Center</p>
      <p>Legal</p>
      <p>Media Center</p>
      <p>Legal</p>
      <p>Media Center</p>
      <p>Legal</p>
      <p>Media Center</p>
      <p>Legal</p>
      {/* Add more text content as needed */}
      </div>
    </div>
    <div className='text-center font-bold my-4'>
     ActorIndex @All Right Reserverd
    </div>
  </footer>

</div>


	)
}
