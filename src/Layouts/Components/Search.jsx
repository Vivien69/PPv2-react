import React, {useState, useEffect, Fragment} from 'react'
import InputText from '../../Components/Forms/InputText'
import { ImSearch, ImSpinner9 } from 'react-icons/im'
import OutsideAlerter from '../../Services/OutsideClicker'
import { http, csrf} from '../../Services/Api'
import ListMarchand from '../../Components/Forms/ListMarchand'
import { writeToCache } from '../../Services/Cache'

const Search = ({classDiv, error}) => {
  
    const [name, setName] = useState('')
    const [idMarchand, setIdMarchand] = useState('')
    const [iconeSearch, setIconeSearch] = useState(<ImSearch />)
    const [hideMarchands, setHideMarchands] = useState(false)

    const [data, setData] = useState([])
    const [searchApiData, setSearchApiData] = useState([])

    useEffect(() => {
      setIconeSearch(<ImSpinner9 className='animate-spin'/>)

      const savedItem = localStorage.getItem('Marchands')

      if(savedItem == null) {
          const data = fetchDataMarchand()
      }
      else  {
          setData(JSON.parse(savedItem));
          setSearchApiData(JSON.parse(savedItem))
      }

      async function fetchDataMarchand() {

      csrf
      
      const cat = await http.get('/api/marchand').then(response => {
          setData(response.data);
          setSearchApiData(response.data)
          writeToCache('Marchands', response.data)
        })
      }

      setIconeSearch(<ImSearch />)


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

      <div className={`w-full mr-2 transition relative ${classDiv}`}>
            <InputText name='search' placeholder='Rechercher...' state={name} icone={iconeSearch} oclass='lg:w-full relative ' off classDiv='static' error={error} onChange={ e => getMarchands(e)}/>
            <input name='idSearchMarchand' placeholder='Rechercher...' state={idMarchand} className='hidden'/>

              {hideMarchands && (
              <OutsideAlerter change={hide => setHideMarchands(hide)}>
                
              <div id='result' className={`border-2 bg-slate-50 duration-500 transition border-slate-200 absolute z-20 w-full`}>
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