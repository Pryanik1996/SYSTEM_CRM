import OrderAdd from "../OrderAdd/OrderAdd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function NewOrderForClient() {
  const client = useSelector((state) => state.clients?.clients[0]);

  const { id } = useParams();

  return <OrderAdd client={client} id={id} />;
}
