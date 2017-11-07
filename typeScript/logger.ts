import { Level } from './levels';

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

	logFunctions = {
		"info":    this.info,
		"warning": this.warning,
		"debug":   this.debug,
		"error":   this.error
	}

	info(strings: string){
		console.log('\x1b[32m%s\x1b[0m', strings);
	}

	warning(strings: string){
		console.log('\x1b[33m%s\x1b[0m', strings);
	}

	debug(strings: string){
		console.log('\x1b[36m%s\x1b[0m', strings);
	}

	error(strings: string){
		console.log('\x1b[31m%s\x1b[0m', strings);
	}

}

var logObj = new Logger("log 1", {console:true, file:false, colors:true, logLevel:true });

logObj.log(Level.error, "Test message");