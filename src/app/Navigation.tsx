
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../screens/Dashboard';
import Appointments from '../screens/Appointments';
import AppointmentsView from '../screens/Appointments/View';
import Bookings from '../screens/Bookings';
import BookingsView from '../screens/Bookings/View';

const Navigation = () => {
    return(
        <Routes>
            <Route path="/Dashboard" element={Dashboard} />
            <Route path="/Appointments" element={Appointments} />
            <Route path="/AppointmentsView" element={AppointmentsView} />
            <Route path="/Bookings" element={Bookings} />
            <Route path="/BookingsView" element={BookingsView} />
            <Route path="/Bookings" element={Dashboard} />
            <Route path="/ManagePatients" element={Dashboard} />
            <Route path="/Diagnosis" element={Dashboard} />
            <Route path="/Treatment" element={Dashboard} />
            <Route path="/Billing" element={Dashboard} />
            <Route path="/Invoices" element={Dashboard} />
            <Route path="/Labs" element={Dashboard} />
            <Route path="/Settings" element={Dashboard} />
            <Route path="/Accounts" element={Dashboard} />
            <Route path="/Inventory" element={Dashboard} />
        </Routes>
    )
}
export default Navigation;