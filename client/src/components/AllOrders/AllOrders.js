import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/order.action";
import { Link } from "react-router-dom";
import { ORDER_ADD } from "../../redux/types";

export default function AllOrders() {
  const {
    values: orders,
    error,
    loading,
  } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div>
      <h1>Все заказы</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p>Ошибка базы данных</p>
      ) : (
        <>
          {orders.length === 0 ? (
            <p>Заказов нет</p>
          ) : (
            <ul>
              {orders?.map((or) => (
                <Link to={`/orders/${or._id}`}>
                <div>
                <h7 key={or._id} >
                  {or.number} {or.client} {or.status} {or.creator}
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
