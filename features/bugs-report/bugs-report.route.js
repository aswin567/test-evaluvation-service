
var BugReport = require('./bugs-report.controller');

module.exports = function(router) {
    router.post('/bugReport', BugReport.createBugReport);
    router.get('/bugReport/:name', BugReport.getBugReportbyId);
    router.delete('/bugReport/:name', BugReport.deleteBugReport);
    router.put('/bugReport/:name', BugReport.updateBugReport);
}