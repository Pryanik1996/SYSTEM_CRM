import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { getOneOrder } from "../../redux/actions/currentOrderAction";
import Button from "@material-ui/core/Button";
import "./Order.css";

export default function Order() {
  const dispatch = useDispatch();
  const currentOrder = useSelector((state) => state.currentOrder);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneOrder(id));
  }, []);

  return (
    <div className="orderInfo">
      <h5>Подробнее о заказе № {currentOrder?.number}</h5>
      <div>
        Тип мебели: <b>{currentOrder?.typeFurn}</b>{" "}
      </div>
      <div>
        Стоимость мебели: <b>{currentOrder?.priceFurn}</b>{" "}
      </div>
      <div>
        Стоимость доставки: <b>{currentOrder?.priceDeliv}</b>{" "}
      </div>
      <div>
        Дата доставки: <b>{currentOrder?.dateDeliv}</b>{" "}
      </div>
      <div>
        Дата сборки: <b>{currentOrder?.dateConstr}</b>{" "}
      </div>
      <div>
        Бригада доставки: <b>{currentOrder?.teamDeliv}</b>{" "}
      </div>
      <div>
        Бригада сборки: <b>{currentOrder?.teamConstr}</b>{" "}
      </div>
      <div>
        Статус заказа: <b>{currentOrder?.status}</b>{" "}
      </div>
      <div>
        Комментарии при заказе: <b>{currentOrder?.teamConstr}</b>{" "}
      </div>
      <Button variant="contained">Добавить комментарий</Button>
      <Button variant="contained">Редактировать </Button>
    </div>
  );
}
