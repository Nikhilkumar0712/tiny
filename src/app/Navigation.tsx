import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../screens/Dashboard';
import Appointments from '../screens/Appointments';
import AppointmentsView from '../screens/Appointments/View';
import Bookings from '../screens/Bookings';
import BookingsView from '../screens/Bookings/View';
import Receipt from '../screens/Receipt';
import Billing from '../screens/Billing';
import ManagePatients from '../screens/ManagePatients';
import PatientProfilehoc from '../screens/ManagePatients/PatientProfile';
import Treatmentshoc from '../screens/Treatments';
import TreatmentPlanninghoc from '../screens/Treatments/Treatmentsplanning';
import VisitingPlanhoc from '../screens/Treatments/VisitingPlan';
import ConsentFormhoc from '../screens/Treatments/ConsentForm';
import CaseHistory from '../screens/Diagnosis';
import Examination from '../screens/Diagnosis/Examination';
import Investigation from '../screens/Diagnosis/Investigation';
import Prescription from '../screens/Diagnosis/Prescription';
import Expenses from '../screens/Expenses';
import TreatmentViewhoc from '../screens/Treatments/TreatmentView';
import Labshoc from '../screens/Labs';
import Inventory from '../screens/Inventory';
import AddInventory from '../screens/Inventory/Add';
import AddInventoryStep2 from '../screens/Inventory/Add/Step2';
import InventoryDetails from '../screens/Inventory/Details';
import InvoiceDetails from '../screens/Inventory/Invoice';
import UnderUsageInventory from '../screens/Inventory/UnderUsageInventory';
import Prescriptions from '../screens/Prescriptions';
import PrescriptionDetails from '../screens/Prescriptions/Details';
import LabWorkViewhoc from '../screens/Labs/LabWorkView';
import LabCreationhoc from '../screens/Labs/LabCreation';
import PatientDetailsHoc from '../screens/ManagePatients/PatientRegistration/PatientDetails';
import AttendReferralDetailsHoc from '../screens/ManagePatients/PatientRegistration/AttendeReferralsDetails';
import SchemeDetailsHoc from '../screens/ManagePatients/PatientRegistration/SchemeDetails';

const Navigation = () => {
    return (
        <>
            <Routes>
                <Route path="/Dashboard" element={Dashboard} />
                <Route path="/Appointments" element={Appointments} />
                <Route path="/AppointmentsView" element={AppointmentsView} />
                <Route path="/Bookings" element={Bookings} />
                <Route path="/BookingsView" element={BookingsView} />
                <Route path="/Bookings" element={Dashboard} />
                <Route path="/ManagePatients" element={ManagePatients} />
                <Route path="/PatientDetails" element={PatientDetailsHoc} />
                <Route path="/AttendReferralDetails" element={AttendReferralDetailsHoc} />
                <Route path="/SchemeDetails" element={SchemeDetailsHoc} />
                <Route path="/PatientProfile" element={PatientProfilehoc} />
                <Route path="/TreatmentPlanning" element={TreatmentPlanninghoc} />
                <Route path="/VisitingPlan" element={VisitingPlanhoc} />
                <Route path="/ConsentForm" element={ConsentFormhoc} />
                <Route path="/Diagnosis" element={CaseHistory} />
                <Route path="/Examination" element={Examination} />
                <Route path="/Investigation" element={Investigation} />
                <Route path="/Prescription" element={Prescription} />
                <Route path="/Treatments" element={Treatmentshoc} />
                <Route path="/TreatmentView" element={TreatmentViewhoc} />
                <Route path="/Billing" element={Billing} />
                <Route path="/Receipt" element={Receipt} />
                <Route path="/Invoices" element={Dashboard} />
                <Route path="/Labs" element={Labshoc} />
                <Route path="LabWorkView" element={LabWorkViewhoc} />
                <Route path="LabCreation" element={LabCreationhoc} />
                <Route path="/Settings" element={Dashboard} />
                <Route path="/Accounts" element={Dashboard} />
                <Route path="/Inventory" element={Inventory} />
                <Route path="/AddInventory" element={AddInventory}></Route>
                <Route path="/AddInventoryStep2" element={AddInventoryStep2}></Route>
                <Route path="/InventoryDetails" element={InventoryDetails}></Route>
                <Route path="/UnderUsageInventory" element={UnderUsageInventory}></Route>
                <Route path="/InvoiceDetails" element={InvoiceDetails}></Route>
                <Route path="/Expenses" element={Expenses}></Route>
                <Route path="/Prescriptions" element={Prescriptions}></Route>
                <Route path="/PrescriptionDetails" element={PrescriptionDetails}></Route>
            </Routes>
        </>
    )
}

export default Navigation;