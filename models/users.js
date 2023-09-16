const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please match the requested format']
    }
})

//modifies data sent back to user
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      delete returnedObject.__v
    }
})

const User = model('User', userSchema);

module.exports = User;