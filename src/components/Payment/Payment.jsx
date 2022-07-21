import React from "react";
import { Container, TextField, Box } from "@mui/material";
import "../Payment/Payment.css";
import cycle from "../Payment/Payment.img/bicicleta2.png";

const Payment = () => {
  return (
    <div className="container">
      <div className="black">
        <h4>payment page</h4>
        <h1>solicite um cycle.</h1>
      </div>
      <div className="white">
        <div className="payment_form">
          <div className="left_container">
            <div className="payment_form_left">
              <p>bikcraft ou seguro?</p>
              <div className="payment_form_left_check">
                <p>Bikcraft</p>
                <p>Seguro</p>
              </div>
              <div className="payment_form_left_choice">
                <p>Escolha a sua:</p>
                <p className="payment_form_left_choice_p">Nimbus Stark</p>
                <div className="payment_form_left_choice_white">
                  <div className="payment_form_left_choice_white_about">
                    <p>Magic Might</p>
                    <p>R$ 2499</p>
                  </div>
                  <div className="payment_form_left_choice_white_info">
                    <div className="payment_form_left_choice_white_info_text">
                      <ul>
                        <li>Motor Elétrico</li>
                        <li>Fibra de Carbono</li>
                        <li>40 km/h</li>
                        <li>Rastreador</li>
                      </ul>
                    </div>
                    <div className="payment_form_left_choice_white_img">
                      <img src={cycle} alt="cycle" />
                    </div>
                  </div>
                </div>
                <p className="payment_form_left_choice_p">Nebula Cosmic</p>
              </div>
            </div>
          </div>

          <div className="payment_form_right">
            <p className="payment_form_right_p">Dados Pessoais</p>
            <Box sx={{ display: "flex" }}>
              <TextField sx={{ marginRight: "20px" }} label="Name" />
              <TextField label="Last Name" />
            </Box>
            <p>CPF</p>
            <TextField fullWidth label="0000-0000-0000-0000" />
            <p>Email</p>
            <TextField fullWidth />
            <p className="payment_form_right_p">entrega</p>
            <Box
              sx={{
                display: "flex",
                marginBottom: "20px",
                marginRight: "20px",
              }}>
              <TextField sx={{ marginRight: "20px" }} label="CEP" />
              <TextField label="Number" />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginBottom: "20px",
                marginRight: "20px",
              }}>
              <TextField sx={{ marginRight: "20px" }} label="Logradouro" />
              <TextField label="Bairro" />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginBottom: "20px",
                marginRight: "20px",
              }}>
              <TextField sx={{ marginRight: "20px" }} label="Cidade" />
              <TextField label="Estado" />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
