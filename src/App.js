import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/shared/layout';
import MyAccount from './Components/MyAccount';
import Setting from './Components/Setting';

function App() {
  const progressValues = [
    { title: 'Service Provider Visitor', number: 25 },
    { title: 'Empoloyeer Visitor ', number: 50 },
    { title: 'Job Seeker Visitor', number: 75 },
    { title: 'Fan Visitor', number: 100 },
  ];
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route path="/profile" element={<MyAccount />} />
          <Route path="/setting" element={<Setting />} />
          {progressValues.map((progress, index) => (
            <Route
              key={index}
              path={'/'}
              element={<Home progressValues={progressValues}/>}
            />
          ))}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
