import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

  
const Products = () =>{
    const [count,setCount] = useState(0);
    console.log("Before Add: :"+count);

    const hendeler = ()=>{
        const sum = count + 10;
        setCount(sum);
        console.log("After Add: "+count);
    }



    return(
        <Card style={{width:"20rem"}} className="m-3">
           <Card.Body>
            <Card.Title> <h2>Card Title</h2></Card.Title>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, error repudiandae voluptatum assumenda eligendi eum.</p>
                <Button variant="primary" onClick={hendeler}>Learn Mores</Button>
           </Card.Body>
           
        </Card>
    )
}

export default Products;