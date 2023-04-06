import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import http from '../../../Services/Api';
import sortBy from 'lodash/sortBy';
import ErrorText from '../../../Components/Forms/ErrorText'
import Menu from '../Components/Menu';
import useAuthContext from '../../../Context/AuthContext';
import InputText from '../../../Components/Forms/InputText'
import { ImSearch, ImEye } from 'react-icons/im'
import { RiEdit2Line, RiDeleteBin7Fill } from 'react-icons/ri'
import Button from '../../../Components/Buttons/Button';
import Swal from 'sweetalert2';

function Users() {

  const { user } =  useAuthContext();

  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(null);
  const [recordsData, setRecordsData] = useState(initialRecords);
  const [rowData, setRowData] = useState(null)
  const [search, setSearch] = useState('');
  const [errors, setErrors] = useState(null)
  const [axios, setAxios] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [sortStatus, setSortStatus] = useState({ columnAccessor: 'name', direction: 'asc' });

  const showItem = () => {

  }
  const editItem = () => {
    
  }
  const deleteItem = (userId, number) => {
    http.delete('/api/users/'+userId)
    .then(res => {
        if (res.status === 200 ) {
            Swal.fire({
                icon: 'error',
                title: 'Supprimé',
                text: 'L\'Utilisateur a été supprimé',
                padding: '2em',
                customClass: 'sweet-alerts',
            });
            //Permettant de mettre à jour la liste du tableau
            const prevRecords = initialRecords;
            prevRecords.splice(number,1)
            setRowData(prevRecords)
            setInitialRecords(sortBy(prevRecords, 'name'))
        }
    })
  }

  useEffect(() => {

    const fetching = async () => {
        
    
        await http.get('/api/users')
        .then(res => {
          setRowData(res.data)
          setInitialRecords(sortBy(res.data, 'name'))
          setFetching(false)
          setAxios(true)
        })
        .catch(err => {
          setErrors(err)
        })
      }

      fetching();
  
  }, []);

  useEffect(() => {
    setPage(1);
}, [pageSize]);

useEffect(() => {
  if(axios) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecordsData([...initialRecords.slice(from, to)]);
  }
}, [axios, page, pageSize, initialRecords]);

  useEffect(() => {
    if(axios) {
      
      setInitialRecords(() => {
          return rowData.filter((item) => {
              return (
                  item.name.toLowerCase().includes(search.toLowerCase()) ||
                  item.email.toLowerCase().includes(search.toLowerCase()) ||
                  item.role.toLowerCase().includes(search.toLowerCase())
              );
          });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if(axios) {
    const data = sortBy(initialRecords, sortStatus.columnAccessor);
    setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortStatus]);

  const formatDate = (date) => {
    if (date) {
        const dt = new Date(date);
        const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
        const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
        return day + '/' + month + '/' + dt.getFullYear();
    }
    return '';
  };

  return (
    <div>
      {user.role == 'ADMIN' && <Menu />}

      {errors && <ErrorText error={errors} />}

      <div className="flex md:items-center md:flex-row flex-col mb-5 gap-5 mt-3 p-1">
                <h5 className="font-semibold text-lg dark:text-white-light">Liste des utilisateurs</h5>
                <div className="ltr:ml-auto rtl:mr-auto w-full md:w-1/2 xl:w-1/3">
                    <InputText placeholder="Rechercher" icone={<ImSearch />} state={search} onChange={search => setSearch(search)}/>
                </div>
            </div>
            <div className="p-1">
              <DataTable
                withBorder
                striped
                fetching={fetching}
                highlightOnHover
                className="whitespace-nowrap table-hover"
                records={recordsData}
                columns={[
                    {
                        accessor: 'name',
                        title: 'Utilisateur',
                        sortable: true,
                        render: ({ name, email, id }) => (
                            <div className="flex items-center w-max">
                                <img className="w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover" src={`/assets/images/profile-${id}.jpeg`} alt="" />
                                <div>{name + ' ' + email}</div>
                            </div>
                        ),
                    },
                    { accessor: 'email', title: 'Email', sortable: true },
                    { accessor: 'ip', title: 'IP', sortable: true },
                    { accessor: 'role', title: 'Role', sortable: true },
                    {
                      accessor: 'actions',
                      title: <p className='mr-2'>Actions</p>,
                      textAlignment: 'right',
                      render: (item, number) => (
                        <div className='flex justify-end'>
                          <Button icon={<ImEye />} textHidden oclass='lg:mx-1 p-1.5 bg-sky-500 enabled:hover:bg-sky-700 enabled:hover:text-slate-300' click={() => showItem(item, number)} />
                          <Button icon={<RiEdit2Line />} textHidden oclass='lg:mx-1 p-1.5 bg-emerald-500 enabled:hover:bg-emerald-700 enabled:hover:text-slate-300' click={() => editItem(item, number)} />
                          <Button icon={<RiDeleteBin7Fill />} textHidden oclass='lg:mx-1 p-1.5 bg-red-500 enabled:hover:bg-red-700 enabled:hover:text-slate-300' click={() => deleteItem(item.id, number)} />
                          </div>
                      ),
                    },
                ]}
                
                totalRecords={initialRecords?.length}
                recordsPerPage={pageSize}
                page={page}
                onPageChange={(p) => setPage(p)}
                recordsPerPageOptions={PAGE_SIZES}
                onRecordsPerPageChange={setPageSize}
                sortStatus={sortStatus}
                onSortStatusChange={setSortStatus}
                minHeight={200}
                paginationText={({ from, to, totalRecords }) => ` ${from} à ${to} sur ${totalRecords} entrées`}
              />
            </div>

       

    </div>
  )
}

export default Users