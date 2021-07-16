import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getClients } from "../../redux/actions/clients";

export default function AllClients() {

  const { values: clients, error, loading } = useSelector((state) => state.bugs);
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
        <p>Ошибка, перезагрузись</p>
      ) : (
        <>
          {clients.length === 0 ? (
            <p>Клиентов нет</p>
          ) : (
            <ul>
              {clients.map((cl) => (
                <a>{cl.name} {cl.surname} {cl.email} {cl.phone}</a>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
)
}
