const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    }, 
    kudos: [{
        type: Schema.Types.ObjectId,
        ref: 'Kudo'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;

