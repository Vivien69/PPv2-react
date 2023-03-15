import React, {useState, useEffect, Fragment} from 'react'
import InputText from '../../Components/Forms/InputText'
import { ImSearch, ImSpinner9 } from 'react-icons/im'
import OutsideAlerter from '../../Components/OutsideClicker'
import http from '../../Services/Api'
import ListMarchand from '../../Components/Forms/ListMarchand'

const Search = ({classDiv, error}) => {
  
    const [name, setName] = useState('')
    const [idMarchand, setIdMarchand] = useState('')
    const [iconeSearch, setIconeSearch] = useState(<ImSearch />)
    const [hideMarchands, setHideMarchands] = useState(false)

    const [data, setData] = useState([])
    const [searchApiData, setSearchApiData] = useState([])

    useEffect(() => { 
        const csrf = http.get('/sanctum/csrf-cookie');
        const deployListMarchands = http.get('/api/marchand')
        .then(response => {
            
          setData(response.data);
          setSearchApiData(response.data)
    
          })

        
        
    
      }, []);
    
      const getMarchands = async (name) => {
        setIconeSearch(<ImSpinner9 className='animate-spin'/>)
        setName(name)
    
        
        if(searchApiData.length > 0) {
          filterVal();
        } if(name == '') {
          setData([])
          setHideMarchands(false)
        }
        setIconeSearch(<ImSearch />)
      }


      const filterVal = async () => {

        const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
        setData(filterResult);
        setHideMarchands(true)
      }


      const handleClickMarchand = (props) => {
        setName(props.name)
        setIdMarchand(props.id)
        setHideMarchands(false)
      }

    


  return (

      <div className={`w-full mr-2 relative ${classDiv}`}>
            <InputText name='search' placeholder='Rechercher...' state={name} icone={<ImSearch />} oclass='w-full relative ' error={error} onChange={ e => getMarchands(e)}/>
            <input name='idSearchMarchand' placeholder='Rechercher...' state={idMarchand} className='hidden' />

              {hideMarchands && (
              <OutsideAlerter change={hide => setHideMarchands(hide)}>
                
              <div id='result' className={`border-2 bg-slate-50 border-slate-200 absolute z-20 w-full`}>
                {
                  data.map(item => {
                    return(
                      <ListMarchand name={item.name} image={item.picture} link={item.url} oclass='w-16 h-10' dataid={item.id} key={item.id} onClick={handleClickMarchand} />)
                    })
                }
                </div>

              </OutsideAlerter>)}

        </div>
  )
}

export default Search