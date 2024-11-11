import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { OrderModal } from '../OrderModal/OrderModal';
import { useState } from 'react'

function Item({ id, img, name, desc, price, count }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal() {
        setModalIsOpen(true);
    }
    return (
        <Card style={{ width: '18rem' }} className='card'>
            <Card.Img src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className='price-item'>
                    {price} ₽
                </Card.Text>
                <Card.Text className='ost-tovar'>
                    Всего осталось товаров:  {count}
                </Card.Text>
                {
                    count > 0 ?
                        <Link to={`${id}`} className='button-more'>Подробнее</Link>
                        :
                        <button onClick={showModal} className='order-btn'>Заказать</button>
                        
                }
                <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
            </Card.Body>
        </Card>
    );
}

export default Item;