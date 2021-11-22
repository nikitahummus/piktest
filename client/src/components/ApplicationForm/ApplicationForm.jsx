import { useState } from "react";
import { useDispatch } from "react-redux";
import { setOrder } from "../../redux/actionCreators/order.ac";
import { Body, Button, Form, GreyInput, Title, WhiteInput } from "./styledComponents";


function formSubmit(data, setError, dispatch) {
    if (data.mail.search(/^[^\s@]+@[^\s@]+$/) === -1) {
      setError(prev => {
        return { ...prev, mail: 'невалидный адрес email' };
      });
    }
    else if (data.phone.search(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) === -1) {
      setError(prev => {
        return { ...prev, phone: 'невалидный номер телефона' };
      });
    }
    else if (data.firstName === '') {
      setError(prev => {
        return { ...prev, firstName: 'введите имя' };
      });
    }
    else if (data.lastName === '') {
      setError(prev => {
        return { ...prev, lastName: 'введите фамилию' };
      });
    }
    else if (data.mail === '') {
      setError(prev => {
        return { ...prev, mail: 'введите emeil' };
      });
    }
    else if (data.phone === '') {
      setError(prev => {
        return { ...prev, phone: 'введите номер телефона' };
      });
    }
    else if (data.flatsCount === '') {
      setError(prev => {
        return { ...prev, flatsCount: 'выберите количество помещений' };
      });
    } else {
      const order = {
        user: {
          firstName: data.firstName,
          lastName: data.lastName,
          mail: data.mail,
          phone: data.phone
        },
        order: {
          flatsCount: data.flatsCount, 
          time: new Date()
        }
      }
      dispatch(setOrder(order))
    }
  }

export default function ApplicationForm() {
  const time = new Date().getHours();
  const [error, setError] = useState({});
  const [flats, setFlats] = useState(0);
  const dispatch = useDispatch();

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      setError({});
      const data = Object.fromEntries(new FormData(e.target));
      formSubmit(data, setError, dispatch)
    }
    }>
      <Title>{time < 6 ? 'Доброй ночи' : (time < 12 ? 'Доброе утро' : (time < 18 ? 'Добрый день' : 'Добрый вечер'))}</Title>
      <Body>Для бронирования помещений заполните форму</Body>
      <div className="inputcontainer">
        <GreyInput error={error.firstName? true : false} Firstname type="text" placeholder="Ваше имя" name="firstName" />
        <WhiteInput error={error.lastName? true : false} lastName type="text" placeholder="Фамилия" name="lastName" /></div>
      <WhiteInput error={error.phone? true : false} type="text" placeholder="Телефон" name="phone" />
      <GreyInput error={error.mail? true : false} type="email" placeholder="E-mail" name="mail" />
      <GreyInput onChange={(e)=>{
        console.log(+(e.target.value))
        if ( !isNaN(+e.target.value)){
          setFlats(e.target.value)
        }
      }} error={error.flatsCount? true : false} type="text" placeholder="Количество помещений" name="flatsCount" />
      <Button type="submit">Забронировать {flats} {flats < 2 ? 'квартиру' : (flats < 5 ? 'квартиры' : 'квартир')}</Button>
      <p className="disclame">Это дисклеймер, который есть во всех формах</p>
    </Form>
  )
}

