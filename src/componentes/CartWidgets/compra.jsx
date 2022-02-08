import { useState } from "react";
import { Button,Form } from "react-bootstrap";
import { getFirestore } from "../../firebase";
import { CompraContext } from "../CompraContex";
import { useContext } from "react";


export const Compra =()=>{
    const{items, totalCompra}= useContext(CompraContext)

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [phone, setPhone]=useState("");

    const comprar =(event)=>{
        event.preventDefault()
        let datosCompra ={
            buyer:{name:name, phone:phone, email:email},
            items:[{...items}], 
            total:totalCompra()
        };
      const db= getFirestore();
      db.collection ("order").add(datosCompra).then(order => alert(`Tu orden es ${order.id}`));
      console.log (datosCompra)
    };
    return(
    <div className="formC">

    <Form>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" onChange={(e) =>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="number" placeholder="+54922458966"  onChange={(e) =>setPhone(e.target.value)}/>
        </Form.Group>
        <br></br>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="name@example.com"  onChange={(e) =>setEmail(e.target.value)} />
        </Form.Group>
        <br></br>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="vuela a escribir su email"  onChange={(e) =>setEmail(e.target.value)} />
        </Form.Group>
        <br></br>
       
        <br></br>
        <Button type="submit" onClick={comprar}>Comprar</Button>
        </Form>
        
    </div>
    )
};

export default Compra

