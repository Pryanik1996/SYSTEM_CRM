import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getComments } from '../../redux/actions/clients.action';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';


export default function CommentsClients() {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        } = useForm({ mode: "onChange" });

        const {id} = useParams()

        const user = useSelector(state => state.user)
        const userId = user._id
        const userName = user.name
        const items = useSelector(state => state.clients)
        console.log("ITEMS", items)
        const {comments} = items

        const onSubmit = (data) => {
        dispatch(getComments(data, id, userId, userName));
        reset();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('comments')}></input>
        <button type="submit">Добавить</button>
        <div className="commentsList">
            {comments ? comments.map((el) => 
            <>
            <li>
                {el.body}  
            </li>
            <li>Автор: {el.authorName} </li>
            <li>Дата создания: {el.date}</li>
            <Button type="submit" variant="contained" color="primary">Удалить</Button>
            </>
            ) : <p>Комментариев нет</p>}
            
        </div>
        </form>
    )
}