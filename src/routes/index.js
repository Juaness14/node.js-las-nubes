const router = require('express').Router();

const pacientesRouter = require('./pacientes.router');
const adminRouter = require('./admin.router');
const medicamentosRouter = require('./medicamentos.router');
const chatbotRouter = require('./chatbot.router');
const colaboradoresRouter = require('./colaboradores.router');
const citasRouter = require('./citas.router');

const loadEndpoints = (app) => {
    app.use('/api', router);
    router.use('', pacientesRouter);
    router.use('', adminRouter);
    router.use('', medicamentosRouter);
    router.use('', chatbotRouter);
    router.use('', colaboradoresRouter);
    router.use('', citasRouter);
}

module.exports = loadEndpoints;