import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/order.action";
import { Link } from "react-router-dom";
import { ORDER_ADD } from "../../redux/types";
import { useState } from "react";

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

  //============== SEARCH

  let keyCl = ["number", "client", "status", "creator"];

  function translit(word) {
    var answer = "";
    var converter = {
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "e",
      ж: "zh",
      з: "z",
      и: "i",
      й: "y",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "h",
      ц: "c",
      ч: "ch",
      ш: "sh",
      щ: "sch",
      ь: "",
      ы: "y",
      ъ: "",
      э: "e",
      ю: "yu",
      я: "ya",

      А: "A",
      Б: "B",
      В: "V",
      Г: "G",
      Д: "D",
      Е: "E",
      Ё: "E",
      Ж: "Zh",
      З: "Z",
      И: "I",
      Й: "Y",
      К: "K",
      Л: "L",
      М: "M",
      Н: "N",
      О: "O",
      П: "P",
      Р: "R",
      С: "S",
      Т: "T",
      У: "U",
      Ф: "F",
      Х: "H",
      Ц: "C",
      Ч: "Ch",
      Ш: "Sh",
      Щ: "Sch",
      Ь: "",
      Ы: "Y",
      Ъ: "",
      Э: "E",
      Ю: "Yu",
      Я: "Ya",
    };

    for (var i = 0; i < word.length; ++i) {
      if (converter[word[i]] == undefined) {
        answer += word[i];
      } else {
        answer += converter[word[i]];
      }
    }

    return answer;
  }

  let filtredOrders = orders;
  const [value, setValue] = useState("");
  if (value) {
    function helpMePlease(item) {
      for (let i = 0; i < keyCl.length; i++) {
        if (!item.hasOwnProperty(keyCl[i])) item[keyCl[i]] = "";
      }
      if (item.number.toLowerCase().includes(value.toLowerCase().trim()))
        return true;
      if (item.client.toLowerCase().includes(value.toLowerCase().trim()))
        return true;
      if (item.status.toLowerCase().includes(value.toLowerCase().trim()))
        return true;
      if (item.creator.toLowerCase().includes(value.toLowerCase().trim()))
        return true;

      if (
        translit(item.number.toLowerCase()).includes(value.toLowerCase().trim())
      )
        return true;
      if (
        translit(item.client.toLowerCase()).includes(value.toLowerCase().trim())
      )
        return true;
      if (
        translit(item.status.toLowerCase()).includes(value.toLowerCase().trim())
      )
        return true;
      if (
        translit(item.creator.toLowerCase()).includes(
          value.toLowerCase().trim()
        )
      )
        return true;
    }
    filtredOrders = orders.filter(helpMePlease);
  }

  const clearInput = () => {
    setValue("");
  };

  return (
    <div>
      <h1>Все заказы</h1>

      <form onSubmit={() => clearInput()} className="search_form">
        <input
          onChange={(event) => setValue(event.target.value)}
          type="text"
          placeholder="Поиск заказа..."
          className="search_input"
        />
      </form>

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
              {filtredOrders?.map((or) => (
                <Link to={`/orders/${or._id}`}>
                  <div>
                    <h7 key={or._id}>
                      {or.number} {or.client} {or.status} {or.creator?.name}
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
