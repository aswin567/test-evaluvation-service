const mongoose = require('mongoose');
const chatHistorySchema = require('./chat-history.model');

chatHistorySchema.statics = {
    create : function(data, cb) {
      var user = new this(data);
      user.save(cb);
    },
    getById: function(query, cb) {
      this.find(query, cb);
    },
    update: function(query, updateData, cb) { 
      this.findOneAndUpdate(query, 
           {$set: updateData},{new: true}, cb);
    },
    delete: function(query, cb) {    
      this.findOneAndDelete(query,cb);
    }
}

var chatHistoryModel = mongoose.model('ChatHistory', chatHistorySchema);
module.exports = chatHistoryModel;