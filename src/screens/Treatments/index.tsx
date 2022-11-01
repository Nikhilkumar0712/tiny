import React from 'react'
import HocLayout from '../../components/HocLayout'
import TreatmentPlanning from './Treatmentsplanning'
const Treatments = () => {
    return (
        <>
            <TreatmentPlanning />
        </>
    )
}
const Treatmentshoc = HocLayout(Treatments)
export default Treatmentshoc