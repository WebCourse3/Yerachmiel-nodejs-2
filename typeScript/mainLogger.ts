import { Level } from './levels';
import { LoggerInterface } from './loggerInterface';
import { Configuration } from './configuration';
import { ConsoleLogger } from './consoleLogger2';
import { FileLogger } from './fileLogger';

class MainLogger implements LoggerInterface{
	name: string;
	configuration: Configuration;

	constructor(name: string, configuration: Configuration){
		this.name = name;
		this.configuration = configuration;

	};

	log(level: Level, ...strings: string[]){
		this.logFunctions[level](...strings);
	};

	private logFunctions: {[key: string]: (...strings: string[])=>void; } = {
		"info":    this.info,
		"warning": this.warning,
		"debug":   this.debug,
		"error":   this.error
	};

	info(...strings: string[]){
		if (this.configuration.file === true){
			new FileLogger(this.name, this.configuration).log(...strings);
		}
		if (this.configuration.colors === true){
			if (this.configuration.colors === true){
				new ConsoleLogger(this.name, this.configuration).log(Level.info, ...strings);
			}
			else {
				new ConsoleLogger(this.name, this.configuration).log(null, ...strings);
			}
		}
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

}

let logObj = new MainLogger("log 1", {console:true, file:false, colors:true, logLevel:true });

logObj.log(Level.error, "Test message", "Test2", "Test3");