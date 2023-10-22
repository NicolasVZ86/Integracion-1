const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const dbConfig = {
  host: 'bylanpdxjlmrw2ixoud8-mysql.services.clever-cloud.com',
  user: 'uofv0bbpla2jv4cg',
  password: 'ZCY0AtinSfje5DtFrfDk',
  port: 3306,
  database: 'bylanpdxjlmrw2ixoud8',
  connectTimeout: 100000,
};
const connection = mysql.createConnection(dbConfig);

document.addEventListener('DOMContentLoaded', () => {
  const editarButton = document.getElementById('editarButton');
  editarButton.addEventListener('click', () => {
      const id = 1;  // Cambia el ID según tus necesidades
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const newData = {
          nombre,
          email,
          password
      };

      fetch(`/editar/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newData)
      })
      .then(response => response.json())
      .then(data => {
          alert(data.message);
      })
      .catch(error => {
          console.error('Error al editar los datos: ', error);
          alert('Error al editar los datos');
      });
  });
});
