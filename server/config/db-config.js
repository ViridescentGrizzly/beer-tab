var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/beer-tab-db');


var schema = new mongoose.Schema ({
                                    username: String, 
                                    password: String,
                                    network: mongoose.Schema.Types.Mixed
                                  });

var User = mongoose.model('User', schema);

var user1 = new User({
                      username: 'argle', 
                      password: 'bargle', 
                      network: {
                                'nathino': -3,
                                'l337rofler': -2,
                                'steven': 4
                              }
                    });