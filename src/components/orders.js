import React, { useState, useEffect } from "react";
import orderService from "../services/order.service";

const orders = () => {
    const [content, setContent] = useState("");
    
    useEffect(() => {
        orderService.getOrders().then(
        (response) => {
          setContent(response.orders);
        },
        (error) => {
            const _content = 
            (errir.response && error.response.orders) ||
            error.message ||
            error.toString();

         setContent(_content);
        }
      );
    }, []);
    return (
        <div className="container">
    <section className="">
        <Card style={{ width: '18rem' }} className="">
            <Card.Img variant="top" src="#" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </section>
        </div>
    );

};

export default orders;