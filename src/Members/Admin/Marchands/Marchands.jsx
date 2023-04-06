import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import http from '../../../Services/Api';
import sortBy from 'lodash/sortBy';
import ErrorText from '../../../Components/Forms/ErrorText'
import Menu from '../Components/Menu';
import useAuthContext from '../../../Context/AuthContext';

function Marchands() {

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

  
  useEffect(() => {

    const fetching = async () => {
        
    
        await http.get('/api/marchand')
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
                  item.url.toLowerCase().includes(search.toLowerCase()) ||
                  item.etat.toLowerCase().includes(search.toLowerCase())
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

      <div className="flex md:items-center md:flex-row flex-col mb-5 gap-5">
                <h5 className="font-semibold text-lg dark:text-white-light">Liste des marchands</h5>
                <div className="ltr:ml-auto rtl:mr-auto">
                    <input type="text" className="form-input w-auto" placeholder="Recherche..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="datatables">
                <DataTable
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
                        { accessor: 'url', title: 'URL', sortable: true },
                        { accessor: 'etat', title: 'Etat', sortable: true },
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
                    paginationText={({ from, to, totalRecords }) => ` ${from} a ${to} sur ${totalRecords} entrées`}
                />
            </div>

       

    </div>
  )
}

export default Marchands