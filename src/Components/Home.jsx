import React,{useState} from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { IoPieChart } from 'react-icons/io5';
import BarChart from './charts/barcharts';
import LineChart from './charts/linechart';
import { FaEye } from 'react-icons/fa';
import { Container} from '@mui/material';
import CurvedLineChart from './charts/curveLine';
import PieChart from './charts/piecharts';

function MyAccount({progressValues}) {
    const [selecteddays, setSelectedDay] = useState('Location');
    
    const handledayChange = (event) => {
        setSelectedDay(event.target.value);
    };
   
    const imageUrl="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/08/Responsive-Beautiful-Login-Page-Template.png?fit=969%2C663&ssl=1";
        const cardsData = [
        {
          title: 'Pie Chart',
          amount: '$78256',
          change: '-125',
          bgColor: 'bg-sky-500',
        },
        {
            title: 'Pie Chart',
            amount: '$78256',
            change: '-125',
            bgColor: 'bg-sky-500',
          },
          {
            title: 'Pie Chart',
            amount: '$78256',
            change: '-125',
            bgColor: 'bg-sky-500',
          },
          {
            title: 'Pie Chart',
            amount: '$78256',
            change: '-125',
            bgColor: 'bg-sky-500',
          },
        ];
        
  const contentData = [
    {
    name:"Project Views",
       // Background color for the first card
      content: (
        <div className="bg-blue-300 p-4  rounded-lg" style={{ width: '400px',height:'250px' }} >
          {/* Line chart content here */}
          <h1>1500</h1>
            <Container>
                
            <p>View of open projects</p>
      <LineChart />
    </Container>
        </div>
      ),
    },
    {
        name:"Job Advertisment Views",
      // Background color for the second card
      content: (
        <div className="bg-green-300 p-4 rounded-lg" style={{ width: '400px',height:'250px' }}>
          {/* Histogram content here */}
          <h1>754</h1>
            <Container>
                
            <p>Views of Job ads</p>
      <BarChart />
    </Container>
        </div>
      )
    },
    {
    name:"Application Received",
      content: (
        
        <div className="bg-purple-300 p-4 rounded-lg" style={{ width: '400px',height:'250px' }}>
          {/* Histogram content here */}
          <h1>1500</h1>
            <Container>
            <p>For all open projects</p>
      <CurvedLineChart />
    </Container>
        </div>
      )
    },
    {
        name:"Expression of interest Received ",
        // Background color for the second card
        content: (
          <div className="bg-pink-300 p-4 rounded-lg" style={{ width: '400px',height:'250px' }}>
            {/* Histogram content here */}
            <h1>233</h1>
            <Container>
                
            <p>Number received for all open projects</p>
        <CurvedLineChart />
      </Container>
          </div>
        )
      },
      {
        name:"Track your Recuriment activities ",
        // Background color for the second card
        content: (
          <div className="p-4 rounded-lg" style={{ width: '400px',height:'400px',backgroundColor:'#0A163C'}}>
            {/* Histogram content here */}
            <h2 style={{color:'white'}}>Select Months</h2>
        <LineChart/>
          </div>
        )
      },
      {
      name:"Your Profile Viewed From ",
      content: (
        <div className="p-4 rounded-lg" style={{ width: '400px',height:'400px',backgroundColor:'#0A163C'}}>
          {/* Histogram content here */}
          <h2 style={{color:'white'}}>Select Months</h2>
      <PieChart/>
        </div>
      )
    },
    
  ];

  return (
    <div >
      <div className="p-2">
  <div className="flex space-x-4">
    <div className="w-1/2">
      <div className="p-2 grid grid-cols-2 gap-4">
        <h2 className='text-white'>Recent States</h2>
        <select style={{backgroundColor:'#010D25',color:'white'}} value={selecteddays} onChange={handledayChange}>
      <option value="Location">Days</option> {/* Set 'Location' as the default value */}
      <option value="days"><BsChevronDown /> 1 Day</option>
      <option value="days2"><BsChevronDown /> 7 Days</option>
      <option value="days3"><BsChevronDown /> 30 Days</option>
      {/* Add more country options */}
    </select>
        {cardsData.map((card, index) => (
          <div key={index} className="p-2 rounded-md shadow-md flex items-center justify-between my-2  " style={{backgroundColor:'#0A163C'}}>
            <div className="flex items-center">
              <div className={`rounded-full h-14 w-12 flex items-center justify-center ${card.bgColor}`} >
                <IoPieChart className="text-2xl text-white"  />
              </div>
              <div className="pl-4" >
                <span className="text-sm text-gray-500 font-light text-white">{card.title}</span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold text-white">{card.amount}</strong>
                  <span className="text-sm text-green-500 pl-2 text-white">{card.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2">
    <div className="mx-0.5 my-0.5 p-2 flex flex-wrap md:flex-nowrap">
      {progressValues.map((progress, index) => (
        <div key={index} className="text-center">
          <CircularProgressBar
            progress={progress.number}
            radius={70}
            backgroundColor="white"
            color={`hsl(${(1 - progress.number / 100) * 120}, 100%, 50%)`}
          />
          <h2 className="text-lg font-semibold text-white">{progress.title}</h2>
        </div>
      ))}
    </div>
  </div>
    </div>
    <div className=" p-2 w-1/2 ">
      <img src={imageUrl} alt="Image" className="p-2  w-full object-cover rounded-md shadow-md" />
    </div>
  </div>
</div>
    
    <div className="mx-0.5 my-0.5 p-2 flex flex-wrap md:flex-nowrap space-x">
      {contentData.map((content, index) => (
       <ColoredCard key={index}>
           <div className="flex items-center justify-between text-white">
      {content.name}
      <FaEye size={32} color="yellow" />
    </div>
       {content.content}
     </ColoredCard>
     
      ))}

</div>


</div>
  );
  
}

export default MyAccount;

function CircularProgressBar({ progress, radius, backgroundColor, color,title }) {
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-48 h-48 max-w-md mx-auto">
      <svg className="w-full h-full">
        <circle
          className="text-transparent"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          r={radius}
          cx="50%"
          cy="50%"
          stroke={color}
          fill={backgroundColor}
          
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`text-xl font-semibold ${color}`}>
          {progress}%
        </div>
      </div>
    </div>
  )
}

function ColoredCard({  children }) {
  return (

    <div className={`max-w-md mx-auto rounded-lg shadow-lg  gap-1.5`}>
      <div className="p-4">
        <div className="mt-4">
           
          {children}
          
        </div>
      </div>
    </div>
  );
}



