const { Dish } = require('../schema/dish.schema');

const getAll = (req, res) => {

    // Get Dishes
    Dish.find({}).then(result => {
        return res.status(201).json({data: result})

    }).catch(err => {
        return res.status(500).json({data: err})
    })
}
const get = (req, res) => {

    // Get Dish by ID
    try {
              const dish = Dish.findById(req.params.id);
              if (!dish) {
                return res.status(404).json({ message: 'Dish not found' });
              }
              res.status(200).json(dish);
            } catch (error) {
              res.status(500).json({ message: 'Error retrieving dish', error });
            }
}

const create = (req, res) => {
    
    const _dishBody = req.body; 
    const errors = new Array()
    if (!_dishBody.name || typeof _dishBody.name != 'string') {
        errors.push("Name is either not present or is not type String")
    }
    if(errors.length > 0) {
        return res.status(400).json({
            data: errors,
            message: 'Dish not created, Validation error.'
        })
    }
    const _dish = new Dish(_dishBody)
    return _dish.save().then(result => {
        res.status(200).json({data: result})
    }).catch(err => {
        res.status(500).json({data: err})
    })
}

const update = (req, res) => {
    // object desctructuring.
    const { dish_id } = req.params;
    Dish.findByIdAndUpdate(dish_id, req.body).then(result => {
        res.status(200).json({data: result})
    }).catch(err => {
        res.status(500).json({data: err})
    })
}

const _delete = (req,res) => {
    const {dish_id} = req.params;
    Dish.findByIdAndDelete(dish_id).then(result => {
        res.status(200).json({data: result, messsage : 'Dish deleted'})
    }).catch(err => {
        res.status(500).json({data: err})
    })
}


module.exports = {getAll, get, create, update, _delete};