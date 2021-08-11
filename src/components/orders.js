//This component has not been tested because the back could not be put online

/*import React, { useState, useEffect } from "react";
import producsService from "../services/products.service"


const orders = () => {
    const [producs, setProduc] = useState ("");
    
    useEffect(() => {
        producsService.getOrders().then(
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
    <section className="card card-container">
        <Card style={{ width: '18rem' }} className="">
            <Card.Img variant="top" src="#" />
                <Card.Body>
                    <Card.Title>{content.productTitle}</Card.Title>
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

export default producs; */