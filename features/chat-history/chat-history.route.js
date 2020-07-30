
var ChatHistory = require('./chat-history.controller');

module.exports = function(router) {
    router.post('/chatHistory', ChatHistory.createChatHistory);
    router.get('/chatHistory/:sessionId', ChatHistory.getChatHistorybyId);
    // router.delete('/chatHistory/:name', ChatHistory.deleteBugReport);
    router.put('/chatHistory/:sessionId', ChatHistory.updateChatHistory);
}