import Logger from './helpers/logger';
import GitHubService from './services/github';
import Http from './helpers/http';

const baseUrl = "https://api.github.com/";
const organisationId = "uber";
const gitHubApiAuthToken = ""; //add your GitHub API OAuth key here to increase request limit

let logger = new Logger();
let http = new Http();

let gitHubService = new GitHubService(baseUrl, http, gitHubApiAuthToken);

logger.log(gitHubService.getUsersForOrganisation(organisationId));

gitHubService.getUsersForOrganisation(organisationId).then((users) => {
    users.forEach((user) => {
        logger.log("Username: " + user.login);
		
		gitHubService.getUser(user.login).then((repos) => {
			repos.forEach((repo) => {
			logger.log("Repos: " + repos.name);
		})
		})		
    });
}).catch((error) => {
    logger.log("Error: " + error);
});

