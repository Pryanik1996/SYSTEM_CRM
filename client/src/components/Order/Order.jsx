import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import React, { useEffect, useState, useMemo } from "react";
import { getOrder } from "../../redux/actions/order.action";
import { useHistory, useLocation } from "react-router";
import {
  getOneOrder,
  deleteCurrentOrder,
  deleteCurrentComment,
  editCurrentOrder,
} from "../../redux/actions/currentOrderAction";
import { addCommentToOrder } from "../../redux/actions/commentsAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import Modal from "../Modal/Modal";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./Order.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Order() {
  const [addComment, setAddComment] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  // const handleSubmitModal = (e) => {
  //   e.preventDefault();
  // };
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const deleteOrder = () => {
    dispatch(deleteCurrentOrder(id, history));
  };
  // const deleteComment = () => {
  //   dispatch (deleteCurrentComment(id))
  // }

  const addCommentStatus = () => {
    setAddComment(!addComment);
  };

  const currentOrder = useSelector((state) => state.currentOrder);
  const orderId = useSelector((state) => state.currentOrder?._id);
  const userName = useSelector((state) => state.user?.name);
  // console.log("44444444=>", userName);

  useEffect(() => {
    dispatch(getOneOrder(id));
  }, []);

  const {
    register,
    handleSubmit,
    watch, //???????????????????????? ?????????????????????? ????????????
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(getOrder(data, history));
    reset();
  };

  const [comment, setComment] = useState("");

  const handleComment = (event) => {
    if (event.target.value) {
      setComment(event.target.value);
    } else {
      setComment("");
    }
  };
  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(addCommentToOrder(orderId, comment, userName));
    setComment("");
    setAddComment(!addComment);
  };

  // console.log("COMMMMMENT=>", comment);
  // console.log("0000=>>>", userName);

  const initialForm = useMemo(
    () => ({
      number: currentOrder?.number,
      typeFurn: currentOrder?.typeFurn,
      priceFurn: currentOrder?.priceFurn,
      priceDeliv: currentOrder?.priceDeliv,
      dateDeliv: currentOrder?.dateDeliv,
      priceConstr: currentOrder?.priceConstr,
      dateConstr: currentOrder?.dateConstr,
      teamDeliv: currentOrder?.teamDeliv,
      teamConstr: currentOrder?.teamConstr,
      status: currentOrder?.status,
      commentsWhenCreate: currentOrder?.commentsWhenCreate,
    }),
    [currentOrder]
  );
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  function ??hangeHandler(e) {
    setFormState((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }));
  }
  function onSubmitForm(e) {
    e.preventDefault();
    // setFormState(initialForm);
    dispatch(editCurrentOrder(id, formState));
    setModalActive(false);
  }

  console.log(formState, currentOrder);

  return (
    <div className="orderInfo">
      <div className="orderInfoSmall">
        <div className="orderTitle">
          <h5>
            ?????????????????? ?? ???????????? ??? {currentOrder?.number} ?????? ??????????????{" "}
            {currentOrder?.client?.surname} {currentOrder?.client?.name}{" "}
            {currentOrder?.client?.patronymic}
          </h5>
          <div className="orderIcons">
            <DeleteIcon
              style={{ cursor: "pointer" }}
              onClick={() => setModalDelete(true)}
              variant="contained"
              fontSize="large"
            />
            <EditIcon
              style={{ cursor: "pointer" }}
              onClick={() => setModalActive(true)}
              variant="contained"
              fontSize="large"
            />
          </div>
        </div>
        <div>
          ?????? ????????????: <b>{currentOrder?.typeFurn}</b>{" "}
        </div>
        <div>
          ?????????????????? ????????????: <b>{currentOrder?.priceFurn}</b>{" "}
        </div>
        <div>
          ?????????????????? ????????????????: <b>{currentOrder?.priceDeliv}</b>{" "}
        </div>
        <div>
          ???????? ????????????????: <b>{currentOrder?.dateDeliv}</b>{" "}
        </div>
        <div>
          ???????? ????????????: <b>{currentOrder?.dateConstr}</b>{" "}
        </div>
        <div>
          ?????????????? ????????????????: <b>{currentOrder?.teamDeliv}</b>{" "}
        </div>
        <div>
          ?????????????? ????????????: <b>{currentOrder?.teamConstr}</b>{" "}
        </div>
        <div>
          ???????????? ????????????: <b>{currentOrder?.status}</b>{" "}
        </div>
        <div>
          ?????????????????????? ?????? ????????????: <b>{currentOrder?.commentsWhenCreate}</b>{" "}
        </div>
        <hr />
        {addComment ? (
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={(e) => handleSubmitComment(e)}
          >
            <input
              id="outlined-basic"
              label="?????? ??????????????????????"
              variant="outlined"
              placeholder="?????? ??????????????????????..."
              className="commentOrderInput"
              value={comment}
              onChange={handleComment}
            />
            <Button type="submit" variant="contained">
              ??????????????????????
            </Button>{" "}
          </form>
        ) : (
          // <form onSubmit={(e) => handleSubmitComment(e)}>
          //   <input
          //     className="commentOrderInput"
          //     placeholder="?????? ??????????????????????"
          //     type="text"
          //     value={comment}
          //     onChange={handleComment}
          //   />
          //   <Button type="submit" variant="contained">
          //     ??????????????????????
          //   </Button>{" "}
          // </form>
          <>
            <Button variant="contained" onClick={() => addCommentStatus()}>
              ???????????????? ??????????????????????
            </Button>
            {/* <Button variant="contained" onClick={() => setModalActive(true)}>
              ?????????????????????????? ??????????
            </Button> */}
          </>
        )}
        <div className="ordersCommentsBottom">
          <h6>?????????????????????? ??????????????????????:</h6>{" "}
          {currentOrder?.comments?.length ? (
            <ul className="commentsOrderList">
              {currentOrder?.comments.map((el) => (
                <li className="commentsOrderItem">
                  <div className="commentsOrderItemLeft">
                    <div>
                      {" "}
                      <b>{el.body}</b>
                    </div>
                    <div style={{ fontSize: "14px" }}>
                      <i>
                        {el.author}, {el.date}
                      </i>
                    </div>
                  </div>
                  {el.author === userName && (
                    <div className="commentsOrderItemRight">
                      <DeleteIcon
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch(deleteCurrentComment(el._id, id))
                        }
                        variant="contained"
                        size="small"
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>???????????????????????? ???????? ??????</p>
          )}
        </div>

        {modalActive ? (
          <Modal active={modalActive} setActive={setModalActive}>
            <div className="card">
              <div className="card-header">???????????????????????????? ???????????????? ????????????</div>
              <div className="card-body">
                <form className={classes.root} onSubmit={onSubmitForm}>
                  <label htmlFor="number">
                    ?????????? ????????????
                    <input
                      value={formState.number}
                      onChange={??hangeHandler}
                      id="number"
                      type="text"
                    />
                  </label>
                  <label htmlFor="typeFurn">
                    ?????? ????????????
                    <input
                      value={formState.typeFurn}
                      onChange={??hangeHandler}
                      id="typeFurn"
                      type="text"
                    />
                  </label>
                  <label htmlFor="priceFurn">
                    ?????????????????? ????????????
                    <input
                      value={formState.priceFurn}
                      onChange={??hangeHandler}
                      id="priceFurn"
                      type="text"
                    />
                  </label>
                  <label htmlFor="priceDeliv">
                    ?????????????????? ????????????????
                    <input
                      value={formState.priceDeliv}
                      onChange={??hangeHandler}
                      id="priceDeliv"
                      type="text"
                    />
                  </label>
                  <label htmlFor="priceConstr">
                    ?????????????????? ????????????
                    <input
                      value={formState.priceConstr}
                      onChange={??hangeHandler}
                      id="priceConstr"
                      type="text"
                    />
                  </label>
                  <label htmlFor="dateDeliv">
                    ???????? ????????????????
                    <input
                      type="date"
                      value={formState.dateDeliv}
                      onChange={??hangeHandler}
                      id="dateDeliv"
                    />
                  </label>

                  <label htmlFor="dateConstr">
                    ???????? ????????????
                    <input
                      type="date"
                      value={formState.dateConstr}
                      onChange={??hangeHandler}
                      id="dateConstr"
                    />
                  </label>
                  <label htmlFor="teamDeliv">
                    ?????????????? ????????????????
                    <input
                      value={formState.teamDeliv}
                      onChange={??hangeHandler}
                      id="teamDeliv"
                      type="text"
                    />
                  </label>
                  <label htmlFor="teamConstr">
                    {" "}
                    ?????????????? ????????????
                    <input
                      value={formState.teamConstr}
                      onChange={??hangeHandler}
                      id="teamConstr"
                      type="text"
                    />
                  </label>

                  <select
                    value={formState.status}
                    onChange={??hangeHandler}
                    id="status"
                  >
                    <option value="???????????????? ????????????????">???????????????? ????????????????</option>
                    <option value="?? ????????????">?? ????????????</option>
                    <option value="????????????">????????????</option>
                    <option value="??????????????????">??????????????????</option>
                    <option value="????????????????????">????????????????????</option>
                  </select>

                  {/* <input
                    value={formState.status}
                    onChange={??hangeHandler}
                    id="status"
                    type="text"
                  /> */}
                  {/* <input
                    value={formState.commentsWhenCreate}
                    onChange={??hangeHandler}
                    id="commentsWhenCreate"
                    type="text"
                  /> */}

                  {/* <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  ???????????? ????????????
                </InputLabel>
                <Select
                  defaultValue={currentOrder?.status}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  {...register("status")}
                >
                  <MenuItem value={"???????????????? ????????????????"}>
                    ???????????????? ????????????????
                  </MenuItem>
                  <MenuItem value={"?? ????????????"}>?? ????????????</MenuItem>
                  <MenuItem value={"????????????"}>????????????</MenuItem>
                  <MenuItem value={"??????????????????"}>??????????????????</MenuItem>
                  <MenuItem value={"????????????????????"}>????????????????????</MenuItem>
                </Select>
              </FormControl> */}

                  <hr />

                  <span>
                    <Button type="submit" variant="contained" color="primary">
                      ?????????????????? ??????????????????
                    </Button>
                  </span>
                </form>
              </div>
            </div>
          </Modal>
        ) : (
          <></>
        )}
        <Modal active={modalDelete} setActive={setModalDelete}>
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
              ???? ??????????????, ?????? ???????????? ?????????????? ?????????? ??? {currentOrder?.number} ?
              <hr />
              <span>
                <Button
                  onClick={() => deleteOrder(orderId)}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  ??????????????
                </Button>
              </span>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
