import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../../redux/actions/clients.action";

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
                <div>
                <a key={cl._id} href="/">
                  {cl.name} {cl.surname} {cl.email} {cl.phone}
                </a>
                </div>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
