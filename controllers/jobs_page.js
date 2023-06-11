// const fetch = require('node-fetch');
module.exports.jobPage = async function (req, res) {
    const response = await fetch(`https://remotive.com/api/remote-jobs`);
    const jobsData = await response.json();
    return res.render('companies', {
        title: "Jobs Page",
        body: jobsData.jobs
    });
};
