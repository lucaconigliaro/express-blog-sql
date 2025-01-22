const express = require(`express`); 
const postsRouters = require("./routers/posts");
const handleError = require(`./middlewares/handleError`);
const notFoundRoute = require(`./middlewares/notFoundRoute`);
const cors = require("cors");

const app = express();
const port = 3001; 


app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5175'], 
}));

app.use(express.json());

app.use(express.static(`public`));

app.use(`/posts`, postsRouters);

app.get(`/`, (req, res) => {
    // ops(); //funzione che non esiste e da l'errore
    console.log("La rotta è stata chiamata");
    res.json({
        message: "Server del mio blog"
    })
});

app.use(notFoundRoute);
app.use(handleError);

// // Dopo tutte le rotte inseriamo il middleware che gestisce l'errore
// app.use(handleError);

app.listen(port, () => {
    console.log("Server is listenin")
});