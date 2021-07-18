import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { useDispatch, useSelector } from 'react-redux';
import ClientInfo from '../ClientInfo/ClientInfo';
import { getAllClient } from '../../redux/actions/clients.action';


const useStyles = makeStyles({
    root: {
    minWidth: 275,
    },
    bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
    const dispatch = useDispatch()


    const items = useSelector((state) => state.clients)
    const {clients} = items
    console.log(clients, '****')

    useEffect(() => {
        dispatch(getAllClient())
    }, [])

    return (
    <Card className={classes.root} variant="outlined">
        {clients?.map((el, i) => 
            <ClientInfo name={el.name} surname={el.surname} patronymic={el.patronymic} email={el.email} phone={el.phone} address={el.address} />
        )}
    </Card>
    );
}



