const express = require('express');
// const { create } = require('../controller/todo.controller');
const restaurantRouter = express.Router();

const  { getAll ,get , create, _delete} = require('../controllers/restaurant.controller')

restaurantRouter.get('/', getAll);

restaurantRouter.get('/:restaurant_id', get);

restaurantRouter.post('/', create);

restaurantRouter.delete('/:restaurant_id', _delete);

module.exports = restaurantRouter;
