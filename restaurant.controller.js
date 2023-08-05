// this Todo represents the Todo table. First letter of a schema should always be caps..
const { Restaurant } = require('../schema/restaurant.schema');

const getAll = (req, res) => {

    // Get Restaurant
    Restaurant.find({}).populate("dish").then(result => {
        // it will get executed only when the DB query is successful.
        return res.status(201).json({data: result})

    }).catch(err => {
        // this will get executed if anthing goes wrong.
        return res.status(500).json({data: err})
    })
}
const get = (req, res) => {

    // Get Restaurant by ID
    try {
              const restaurant = Restaurant.findById(req.params.id);
              if (!restaurant) {
                return res.status(404).json({ message: 'Restaurant not found' });
              }
              res.status(200).json(restaurant);
            } catch (error) {
              res.status(500).json({ message: 'Error retrieving restaurant', error });
            }
}

const create = (req, res) => {
    
    // validate the data being recieved from client.
    
    const _restaurantBody = req.body; 
    const errors = new Array()
    if (!_restaurantBody.name || typeof _restaurantBody.name != 'string') {
        errors.push("Name is either not present or is not type String")
    }
    if(errors.length > 0) {
        return res.status(400).json({
            data: errors,
            message: 'Restaurant not created, Validation error.'
        })
    }
    const _restaurant = new Restaurant(_restaurantBody)
    return _restaurant.save().then(result => {
        res.status(200).json({data: result})
    }).catch(err => {
        res.status(500).json({data: err})
    })
}

const _delete = (req,res) => {
    const {restaurant_id} = req.params;
    Restaurant.findByIdAndDelete(restaurant_id).then(result => {
        res.status(200).json({data: result, messsage : 'Restaurant deleted'})
    }).catch(err => {
        res.status(500).json({data: err})
    })
}


module.exports = {getAll, get, create, _delete};

