import React, { useState, useRef } from 'react'
import { Formik, Field, Form } from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactCardFlip from 'react-card-flip';
import Data from "./data.json";


const ListCard = () => {
  return (
    <div style={{ margin: "auto", width: "50%" }} className="Projects">
      {Data.map((item, index) => (
        <Card cards={item} key={`card-${index}`} />
      ))}
    </div>
  );
};

const CardStyle = {
  width: '18rem', height: '200px', marginTop: "10px", padding: "10px"
};

const Card = ({ cards }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <div className="container d-flex justify-content-center row">
      <div className="row">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div style={CardStyle} className="CardFront text-dark bg-light mb-3">
            <div className="justify-content-center">
              <div className="text-center">
                <h2 className="text-center" style={{ fontSize: '1.6em' }} >Edit Details</h2>
              </div>
              <button className="btn" style={{ position: "absolute", right: "2%", top: "2%" }} onClick={() => setIsFlipped((prev) => !prev)}>
                <img src="exchange.png" style={{ width: "20px", height: "20px", }} />
              </button>
            </div>
            <div>
              <Formik className="text-center"
                initialValues={{ name: cards.name, company: cards.company }}
                onSubmit={async values => {
                  await new Promise(resolve => setTimeout(resolve, 500));
                  alert(JSON.stringify("The Details are succesfully edited!", null, 2));
                }}>
                <Form>
                  Name: <Field name="name" type="text" style={{ border: "none", backgroundColor: "transparent" }} />
                  <br />
                  Company: <Field name="company" type="text" style={{ border: "none", backgroundColor: "transparent" }} />
                  <br />
                  <div className="d-flex justify-content-center">
                    <br />
                    <button type="submit" className="btn btn-success" style={{ marginTop: "40px" }}>Save Changes</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div style={CardStyle} className="CardBack text-light bg-dark mb-3">
            <div className="justify-content-center">
              <div className="text-center">
                <h2 className="text-center" style={{ fontSize: '1.6em' }} >Edit Details</h2>
              </div>
              <button className="btn" style={{ position: "absolute", right: "2%", top: "2%" }} onClick={() => setIsFlipped((prev) => !prev)}>
                <img src="exchange.png" style={{ width: "20px", height: "20px", }} />
              </button>
            </div>  
            <div>
              <Formik className="text-center"
                initialValues={{ github: cards.github }}
                onSubmit={async values => {
                  await new Promise(resolve => setTimeout(resolve, 500));
                  alert(JSON.stringify("The Details are succesfully edited!", null, 2));
                }}>
                <Form>
                  Github: <Field name="github" type="text" style={{ color: "white", border: "none", backgroundColor: "transparent" }} />
                  <br />
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-success" style={{ marginTop: "50px" }}>Save Changes</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default ListCard;
