import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';


var app = express();
const port = 3000
const API = "https://dinosaur-facts-api.shultzlab.com/dinosaurs/random"
const ruta = express.Router();

app.use(cors()); 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const my_route = ruta.get("/random", (req,res)=>{
    fetch(`${API}`)
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => {
        res.send(contenido)
    });
});

app.use("/dinos",my_route);
app.get('/', (req,res)=>{
    res.send({"message":"Microservicio de Dinosaurios"})
});

app.listen(port, function () {
    console.log(`Server running on port ${port}`)
  });