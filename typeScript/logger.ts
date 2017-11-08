import { Level } from './levels';
var fs = require('fs');

class Logger{
	name: string;
	configuration: Configuration;

	constructor(name: string, configuration: Configuration){
		this.name = name;
		this.configuration = configuration;
	}

	log(level: Level, strings: string){
		this.logFunctions[level](strings);
	}

	logFunctions :any = {
		"info":    this.info,
		"warning": this.warning,
		"debug":   this.debug,
		"error":   this.error
	}

	private info(strings: string):void{
		console.log('\x1b[32m%s\x1b[0m', strings);
		 this.writeToFile(strings);
	}

	private warning(strings: string):void{
		console.log('\x1b[33m%s\x1b[0m', strings);
	}

	private debug(strings: string):void{
		console.log('\x1b[36m%s\x1b[0m', strings);
	}

	private error(strings: string):void{
		console.log('\x1b[31m%s\x1b[0m', strings);
	}

	private writeToFile(strings: string):void{
		// fs.writeFile("/logs/log file", strings, function(err:any) {
		// 	if(err) {
		// 		return console.log(err);
		// 	}
		//
		// 	console.log("The file was saved!");
		// });
		console.log('\x1b[33m%s\x1b[0m', strings);
	}
}

var logObj = new Logger("log 1", {console:true, file:false, colors:true, logLevel:true });

logObj.log(Level.info, "Test message");