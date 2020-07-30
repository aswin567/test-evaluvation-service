var ChatHistory = require('./chat-history.dao');

exports.createChatHistory = function (req, res) {
    var messages = {
        sessionId: req.body.sessionId,
        chatHistory:JSON.stringify(req.body.messages),
    };
    ChatHistory.getById({sessionId:messages.sessionId }, function(err, getChatHistory) {
        if(err) {
            res.json({
                error: err
            })
        }
        if(getChatHistory.length !== 0){
            const conditions = { sessionId: messages.sessionId}
            const updateChatHistory = { chatHistory: messages.chatHistory};
        
            ChatHistory.update(conditions, updateChatHistory, function (err, user) {
                if (err) {
                    res.status(404).json({ err });
                    // stop further execution in this callback
                    return;
                }
                res.json({
                    message: "Chat updated successfully"
                })
            });
        } else {

            ChatHistory.create(messages, function (err, user) {
                if (err) {
                    res.status(404).json({ err });
                    // stop further execution in this callback
                    return;
                }
                res.json({
                    message: "Chat created successfully"
                })
            });
        }
    })

}

exports.updateChatHistory = function (req, res) {
    const conditions = { sessionId: req.params.sessionId}
    const updateChatHistory = { chatHistory: JSON.stringify(req.body.chatHistory)}

    ChatHistory.update(conditions, updateChatHistory, function (err, user) {
        if (err) {
            res.status(404).json({ err });
            // stop further execution in this callback
            return;
        }
        res.json({
            message: "Chat updated successfully"
        })
    });

}
exports.getChatHistorybyId = function(req, res, next) {
    ChatHistory.getById({sessionId: req.params.sessionId }, function(err, chatHistory) {
        if(err) {
            res.json({
                error: err
            })
        }
        if(chatHistory.length !== 0){
            res.json({
                userId: chatHistory[0].user_id,
                chatHistory:JSON.parse(chatHistory[0].chatHistory)
            })
        } else {
            res.json({
                userId: req.params.sessionId,
                chatHistory: []
            })
        }
    })
}

// exports.deleteBugReport = function(req, res, next) {

//     BugsReport.delete({user_id: req.params.name }, function(err, user) {
//         if(err) {
//             res.json({
//                 error: err
//             })
//         }
//         res.json({
//             message: "Bug deleted successfully"
//         })
//     })
// }