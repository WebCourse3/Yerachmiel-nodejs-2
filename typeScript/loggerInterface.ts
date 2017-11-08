import { Level } from './levels';
import { Configuration } from './configuration';

export interface LoggerInterface{
	name: string;
	configuration: Configuration;

	log(level: Level, ...strings: string[]): void;
	info(...strings: string[]): void;
	warning(...strings: string[]): void;
	debug(...strings: string[]): void;
	error(...strings: string[]): void;
}