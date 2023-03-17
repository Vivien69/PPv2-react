import React, { useState } from 'react'
import Button from '../../../../Components/Buttons/Button';
import Marchand from './Marchand';
import Parrainage from './Parrainage'
import Offre from './Offre';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


function Index() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        url: '',
        content: '',
        picture: '',
        categorie: '',
        urlConditions: '',
        offre: '',
        montantRemise: '',
        devise: '',
        montantMinimum: '',
        foncParrainage: '',
        offreParrain: '',
        offreFilleul: ''

    })

    const [errors, setErrors] = useState({
        name: '',
        slug: '',
        url: '',
        content: '',
        picture: '',
        categorie: '',
        urlConditions: '',
        offre: '',
        montantRemise: '',
        devise: '',
        montantMinimum: '',
        foncParrainage: '',
        offreParrain: '',
        offreFilleul: ''

    })

    const FormTitles = ['Marchand', 'Parrainage', 'Offre'];

    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <Marchand formData={formData} setFormData={setFormData} errors={errors} />
            break;
            case 1:
                return <Parrainage formData={formData} setFormData={setFormData} errors={errors} />
            break;
            case 2:
                return <Offre formData={formData} setFormData={setFormData} errors={errors} />
            break;
        }
    }

  return (
    <div>

            {PageDisplay()}

        <div className='flex justify-between mb-4 bg-slate-100 p-4'>

            <Button title='Précedent' icon={<FaAngleLeft />} disabled={page == 0} click={() => {
                setPage( (currPage) => currPage -1)
            }}/>
            <Button title='Suivant' icon={<FaAngleRight />} disabled={page == FormTitles.length -1} click={() => {
                setPage( (currPage) => currPage +1) }}/>

        </div>

    </div>
  )
}

export default Index