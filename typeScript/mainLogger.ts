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
		if (this.configuration.file){
			new FileLogger(this.name, this.configuration).log(...strings);
		}
		if (this.configuration.colors){
			if (this.configuration.colors){
				new ConsoleLogger(this.name, this.configuration).log(level, ...strings);
			}
			else {
				new ConsoleLogger(this.name, this.configuration).log(null, ...strings);
			}
		}
	};

	info(...strings: string[]){
		this.log(Level.info,...strings);
	};

	warning(...strings: string[]){
		this.log(Level.warning,...strings);
	};

	debug(...strings: string[]){
		this.log(Level.debug,...strings);
	};

	error(...strings: string[]){
		this.log(Level.error,...strings);
	};

}

let logObj = new MainLogger("log 1", {console:true, file:false, colors:true, logLevel:true });

logObj.log(Level.info, "Test message", "Test3", "Test4");