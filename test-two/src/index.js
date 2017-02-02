import Logger from './helpers/logger';
import GitHubService from './services/github';
import Http from './helpers/http';

const baseUrl = "https://api.github.com/";
const organisationId = "uber";
const gitHubApiAuthToken = "fa9291db784c97e77e68b85f9a74caf85bd3606d"; //add your GitHub API OAuth key here to increase request limit

let logger = new Logger();
let http = new Http();

let gitHubService = new GitHubService(baseUrl, http, gitHubApiAuthToken);

gitHubService.getUsersForOrganisation(organisationId).then((users) => {
    users.forEach((user) => {
        logger.log("Username: " + user.login);
		
		users.forEach((user) => {
			logger.log("Repos: " + user.login.repos);
			});
    });
}).catch((error) => {
    logger.log("Error: " + error);
});

