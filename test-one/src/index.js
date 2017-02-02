import Logger from './helpers/logger';

let logger = new Logger();

//Your code should go here instead of the welcome message below. Create and modify additional files as necessary.

const boss = "Boss";
const hog = "Hog";

for(var i = 1; i <=100; i++)
	if(i%15 == 0 )
	{
		logger.log(boss.concat(hog));
	}
	else if(i%5 == 0 )
	{
		logger.log(hog);
	}
	else if(i%3 == 0 )
	{
		logger.log(boss); 
	}
	else
	{
		logger.log(i);
	}
