import express from 'express';
import calcularAreaQuadrado from './service/service.js';
import { error } from 'console';

const app = express();

app.get('/calculo', (req, res) => {
      const lado = parseFloat(req.query.lado);

      const areaQuadrado = calcularAreaQuadrado(lado);

      if(isNaN(lado)){
        res.status(404).json({error:'Digite apenas numeros'})
      }
      else{
        res.json(areaQuadrado);
      }
     
     
});

app.listen(8080, () => {
console.log('Servidor node iniciado em: 8080');
});