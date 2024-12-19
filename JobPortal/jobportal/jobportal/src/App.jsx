import React from 'react';
import NavebarComponent from './Component/NavebarComponent';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from './Component/LoginComponent';
import RegisterComponent from './Component/registerComponent';
import ViewCompanyCompont from './Component/ViewCompanyCompont';
import ViewEmployeComponent from './Component/ViewEmployeComponent';
import ProfileCompanyComponent from './Component/ProfileCompanyComponent';
import ProfileEmployeComponent from './Component/ProfileEmployeComponent';
import JobApplyComponent from './Component/JobApplyComponent';
import Logout from './Component/Logout';


const App = () => {
  return (
    <div>
      <NavebarComponent />

      <Routes>
        <Route path='/login' element={<LoginComponent />}></Route>
        <Route path='/signup' element={<RegisterComponent />}></Route>
        <Route path='/viewcompany' element={<ViewCompanyCompont />}></Route>
        <Route path='/viewemployee' element={<ViewEmployeComponent />}></Route>
        <Route path='/addcompany' element={<ProfileCompanyComponent />}></Route>
        <Route path='/addemploye' element={<ProfileEmployeComponent />}></Route>
        <Route path='/jobapply' element={<JobApplyComponent />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
