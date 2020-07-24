var BugsReport = require('./bugs-report.dao');

exports.createBugReport = function (req, res) {
    var bugReport = {
        user_id: req.body.userId,
        bugReport:JSON.stringify(req.body.bugReport),
    };

    BugsReport.create(bugReport, function (err, user) {
        if (err) {
            res.status(404).json({ err });
            // stop further execution in this callback
            return;
        }
        res.json({
            message: "Bug created successfully"
        })
    });

}

exports.updateBugReport = function (req, res) {
    const conditions = { user_id: req.params.name}
    const updateBugReport = { bugReport: JSON.stringify(req.body.bugReport)}

    BugsReport.update(conditions, updateBugReport, function (err, user) {
        if (err) {
            res.status(404).json({ err });
            // stop further execution in this callback
            return;
        }
        res.json({
            message: "Bug updated successfully"
        })
    });

}
exports.getBugReportbyId = function(req, res, next) {
    BugsReport.getById({user_id: req.params.name }, function(err, bugReport) {
        if(err) {
            res.json({
                error: err
            })
        }
        if(bugReport.length !== 0){
            res.json({
                userId: bugReport[0].user_id,
                bugReport:JSON.parse(bugReport[0].bugReport)
            })
        } else {
            res.json({
                userId: req.params.name,
                bugReport: []
            })
        }
    })
}

exports.deleteBugReport = function(req, res, next) {

    BugsReport.delete({user_id: req.params.name }, function(err, user) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Bug deleted successfully"
        })
    })
}