const express = require('express');
// const { create } = require('../controller/todo.controller');
const dishRouter = express.Router();

const  { getAll ,get , create, update, _delete} = require('../controllers/dish.controller');

dishRouter.get('/', getAll);

dishRouter.get('/:dish_id', get);

dishRouter.post('/', create);

dishRouter.put('/', update);

dishRouter.delete('/:dish_id', _delete);

module.exports = dishRouter;
