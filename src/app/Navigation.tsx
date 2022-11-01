import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../screens/Dashboard';
import Appointments from '../screens/Appointments';
import AppointmentsView from '../screens/Appointments/View';
import Bookings from '../screens/Bookings';
import BookingsView from '../screens/Bookings/View';
import Receipt from '../screens/Receipt';
import ManagePatients from '../screens/ManagePatients';
import PatientRegistrationhoc from '../screens/ManagePatients/PatientRegistration';
import PatientProfilehoc from '../screens/ManagePatients/PatientProfile';
import Treatmentshoc from '../screens/Treatments';
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
                <Route path="/PatientRegistration" element={PatientRegistrationhoc} />
                <Route path="/PatientProfile" element={PatientProfilehoc} />
                <Route path="/Diagnosis" element={Dashboard} />
                <Route path="/Treatments" element={Treatmentshoc} />
                <Route path="/Billing" element={Dashboard} />
                <Route path="/Receipt" element={Receipt} />
                <Route path="/Invoices" element={Dashboard} />
                <Route path="/Labs" element={Dashboard} />
                <Route path="/Settings" element={Dashboard} />
                <Route path="/Accounts" element={Dashboard} />
                <Route path="/Inventory" element={Dashboard} />
            </Routes>
        </>
    )
}
export default Navigation;