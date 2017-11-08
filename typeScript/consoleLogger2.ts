import { Level } from './levels';
import { LoggerInterface } from './loggerInterface';
import { Configuration } from './configuration';

export class ConsoleLogger implements LoggerInterface{
	name: string;
	configuration: Configuration;

	constructor(name: string, configuration: Configuration){
		this.name = name;
		this.configuration = configuration;
	};

	log(level: Level, ...strings: string[]){
		if (level === null){
			this.noneColors(...strings);
		}
		else {
			this.logFunctions[level](...strings);
		}
	};

	private logFunctions: {[key: string]: (...strings: string[])=>void; } = {
		"info":    this.info,
		"warning": this.warning,
		"debug":   this.debug,
		"error":   this.error
	};

	info(...strings: string[]){
		console.log('\x1b[32m%s\x1b[0m', strings);
	};

	warning(...strings: string[]){
		console.log('\x1b[33m%s\x1b[0m', strings);
	};

	debug(...strings: string[]){
		console.log('\x1b[36m%s\x1b[0m', strings);
	};

	error(...strings: string[]){
		console.log('\x1b[31m%s\x1b[0m', strings);
	};

	noneColors(...strings: string[]){
		console.log(...strings);
	};

}

let logObj = new ConsoleLogger("log 1", {console:true, file:false, colors:true, logLevel:true });

logObj.log(Level.error, "Test message", "Test2", "Test3");
logObj.noneColors("2");