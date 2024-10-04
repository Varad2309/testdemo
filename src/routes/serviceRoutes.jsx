// src/routes/serviceRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HealthSafetyTable from "../components/tables/HealthSafetyTable";
import QMS from "../components/tables/QMS";
import EMSTraining from '../components/tables/EMSTraining';
import ISO17025 from '../components/tables/ISO17025';
import BusinessExcellence from '../components/tables/BusinessExcellence';
import SoftSkill from '../components/tables/SoftSkill';
import Technical from '../components/tables/Technical';
import Computer from '../components/tables/Computer';
import Certification from '../components/tables/certification';
import IATF16949 from '../components/tables/IATF16949';

const ServiceRoutes = () => {
  return (
    <Routes>
      <Route path="1" element={<HealthSafetyTable />} />
      <Route path="2" element={<QMS />} />
      <Route path="3" element={<EMSTraining />} />
      <Route path="4" element={<ISO17025 />} />
      <Route path="5" element={<BusinessExcellence />} />
      <Route path="6" element={<SoftSkill />} />
      <Route path="7" element={<Technical />} />
      <Route path="8" element={<Computer />} />
      <Route path="9" element={<IATF16949 />} />
      <Route path="10" element={<Certification/>} />
    </Routes>
  );
};

export default ServiceRoutes;
