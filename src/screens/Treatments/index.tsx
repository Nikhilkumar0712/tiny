import React from 'react'
import HocLayout from '../../components/HocLayout'
import ConsentForm from './ConsentForm'
import TreatmentView from './TreatmentView'
const Treatments = () => {
    return (
        <>
         <ConsentForm/>
        </>
    )
}
const Treatmentshoc = HocLayout(Treatments)
export default Treatmentshoc