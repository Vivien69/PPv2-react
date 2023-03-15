import React, { useEffect, useState } from 'react'
import http from '../../../Services/Api'
import Search from '../../../Layouts/Components/Search'

/* Icones */
import { FaEuroSign } from 'react-icons/fa'
import { FcInvite } from 'react-icons/fc'
import { ImBarcode, ImLink, ImTextHeight, ImSpinner9 } from 'react-icons/im'
import { AiFillShop } from 'react-icons/ai'


/*Button + Form */
import Button from '../../../Components/Buttons/Button'
import InputText from '../../../Components/Forms/InputText'
import InputTextarea from '../../../Components/Forms/InputTextarea'
import BigRedButton from '../../../Components/Buttons/BigRedButton'
import ListMarchand from '../../../Components/Forms/ListMarchand'
import OutsideAlerter from "../../../Components/OutsideClicker";

function Ajouter() {

  const [name, setName] = useState('')
  const [bonus, setBonus] = useState('')
  const [code, setCode] = useState('')
  const [link, setLink] = useState('')
  const [hideCode, setHideCode] = useState(true)
  const [description, setDescription] = useState('')

  const [idMarchand, setIdMarchand] = useState('')
  const [iconeMarchand, setIconeMarchand] = useState(<AiFillShop />)
  const [hideMarchands, setHideMarchands] = useState(false)

  const [data, setData] = useState([])
  const [searchApiData, setSearchApiData] = useState([])
  const [errors, setErrors] = useState([])


  // When Submit form to store M
    const SubmitForm = async (e) => {
        e.preventDefault();
    
        const buttoarchandnSubmit = document.getElementById('submitButton');
        buttonSubmit.disabled = true;
        buttonSubmit.innerHTML = '<img src="'+Spinner+'" />';
    
          const csrf = await http.get('/sanctum/csrf-cookie');
    
          const handlingRegister = await http.post('/register',
          {
            name:username,
            bonus:bonus,
            password:password
          })
          .then(response => {
            buttonSubmit.disabled = false;
            buttonSubmit.innerHTML = 'Envoyer'
          })
          .catch(err => {
            setErrors(err.response.data.errors);
            buttonSubmit.disabled = false;
            buttonSubmit.innerHTML = 'Envoyer'
          });
    
      }


  return (
    <div className="text-left">
      <div className="w-full flex">
        <div
            className="w-1/3 h-auto bg-gray-100 hidden md:block bg-cover rounded-l-lg"
            /* style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')*/ 
        >

        </div>

        <div className="md:w-2/3 w-full bg-white pr-5 pl-5 pb-5 rounded-lg lg:rounded-l-none">

        <h1 className="text-xl font-semibold mb-10 border-b-4 border-slate-200">Ajouter un parrainage</h1>

          <form className="space-y-5" onSubmit={SubmitForm}>

              {/* DIV MARCHAND */}
            <div className='relative'>
                <Search error={errors.marchand}/>
              </div>
              

            {/* BONUS  */}
            <InputText name='bonus' state={bonus} icone={<FaEuroSign />} label='Je verse un bonus' placeholder='0.00' error={errors.bonus} oclass='md:w-1/2 lg:w-1/3' onChange={bonus => setBonus(bonus)}/>

                {/* DIV BOUTON CODE LIEN ET INVITATION */}
            <div>
              <span className="text-slate-600 text-sm">Méthode de parrainage</span>

              <div className='flex mb-2'>

                <Button title='Code ou lien' icon={<ImBarcode />} click={() => setHideCode(!hideCode)} />
                <Button title='Sur Invitation' icon={<FcInvite />} click={() => setHideCode(true)}/>

              </div>

              {/* DIV CODE */}
              
              <div id="codeDiv" className={`${hideCode ? 'hidden' : ''}`} >
                <InputText name='code' state={code} icone={<ImBarcode />}  label='Code' placeholder='CUJ4JCDEF' error={errors.code} disabled={hideCode} oclass='md:w-1/2 lg:w-1/3 mb-2' classDiv='mr-2 md:mr-0' onChange={code => setCode(code)}/>
                <InputText name='link' state={link} icone={<ImLink />} label='Lien' placeholder='https://marchand.com/parrainage?id=123456' error={errors.link} classDiv='grow' onChange={link => setLink(link)}/>
              </div>

            </div>


              {/* DIV DESCRIPTION */}
            <InputTextarea name='description' state={description} icone={<ImTextHeight />} label="Description de l'offre" placeholder='Ma description' error={errors.description} oclass='h-80' onChange={description => setDescription(description)}/>


            <BigRedButton />

          </form>


          <hr className='mt-6'/>
                
        </div>    
      </div>
    </div>
  )
}

export default Ajouter