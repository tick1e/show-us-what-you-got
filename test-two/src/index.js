import Logger from './helpers/logger';
import GitHubService from './services/github';
import Http from './helpers/http';
require('dotenv').config();

var db = require('db')
db.connect({
  key: process.env.DB_KEY,
})


const baseUrl = "https://api.github.com/";
const organisationId = "uber";
const gitHubApiAuthToken = key; //add your GitHub API OAuth key here to increase request limit

let logger = new Logger();
let http = new Http();


let gitHubService = new GitHubService(baseUrl, http, gitHubApiAuthToken);


gitHubService.getUsersForOrganisation(organisationId).then((users) => {
    users.forEach((user) => {
		logger.log(user.login);
			gitHubService.getUserRepos(user.login).then((repos) => {
				repos.forEach((repo) => {
					
				logger.log(user.login + "has worked on: " + repo.name);
				})
			})		
    });
}).catch((error) => {
    logger.log("Error: " + error);
});




