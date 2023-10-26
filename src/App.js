import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout/Layout';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

import Studio from './pages/Studio';


function App() {
  return (
    <>
   <Layout>
<Routes >
  <Route path='/' element = {<Home/>}/>
  <Route path='/portfolio' element = {<Portfolio/>}/>
  <Route path='/contact' element = { <Contacts/>}/>
  <Route path='/studio/:id' element = { <Studio/>}/>

</Routes>
    
    
   
   </Layout>
    </>
  );
}

export default App;
