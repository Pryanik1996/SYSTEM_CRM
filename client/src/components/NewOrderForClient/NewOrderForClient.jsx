import OrderAdd from "../OrderAdd/OrderAdd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function NewOrderForClient() {
  const clients = useSelector((state) => state.clients);
  const { id } = useParams();
  console.log("CLIENTS=>", clients);
  return <OrderAdd />;
}
