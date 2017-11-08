import { Level } from './levels';
import { Configuration } from './configuration';
var fs = require('fs');

export class FileLogger {
	name: string;
	configuration: Configuration;

	constructor(name: string, configuration: Configuration){
		this.name = name;
		this.configuration = configuration;
	};

	log(...strings: string[]){
		fs.writeFile("./logs/log file.txt", strings, function(err:any) {
			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		});
	};
}

var logObj = new FileLogger("log 1", {console:true, file:false, colors:true, logLevel:true });

logObj.log(Level.info, "Test message", "Test2", "Test3");