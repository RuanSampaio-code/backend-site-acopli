import express from 'express';
import messagesRoutes from './messagesRoutes.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de node.js"));

    app.use(
        express.json(),
        messagesRoutes

    )
}

export default routes;
