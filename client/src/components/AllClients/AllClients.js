import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../../redux/actions/clients.action";
import { Link } from "react-router-dom";

export default function AllClients() {
  const {
    values: clients,
    error,
    loading,
  } = useSelector((state) => state.clients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);


  return (
    <div>
      <h1>Все клиенты</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p>Ошибка базы данных</p>
      ) : (
        <>
          {clients.length === 0 ? (
            <p>Клиентов нет</p>
          ) : (
            <ul>
              {clients?.map((cl) => (
                <Link to={`/clients/${cl._id}`}>
                <div>
                <h7 key={cl._id} >
                  {cl.name} {cl.surname} {cl.email} {cl.phone}
                </h7>
                </div>
                </Link>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
