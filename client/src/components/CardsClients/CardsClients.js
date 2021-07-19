import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useDispatch, useSelector } from "react-redux";
import ClientInfo from "../ClientInfo/ClientInfo";
import { getCardClient } from "../../redux/actions/clients.action";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardsClients() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.clients);
  const { clients } = items;

  const { id } = useParams();
  useEffect(() => {
    dispatch(getCardClient(id));
  }, []);

  return (
    <Card className={classes.root} variant="outlined">
      {clients?.length ? (
        clients.map((el, i) => (
          <ClientInfo
            name={el.name}
            surname={el.surname}
            patronymic={el.patronymic}
            email={el.email}
            phone={el.phone}
            address={el.address}
          />
        ))
      ) : (
        <p>Карточка удалена</p>
      )}
    </Card>
  );
}
