import { Mongoose } from 'mongoose';



export interface MongoCacheOptions {
	engine?: 'memory';
}



export declare class MongoCache {
	constructor(mongoose: Mongoose, cacheOptions: MongoCacheOptions, logLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error');
	clearCache(key: string | null, cb?: () => void): void;
	clearCachePromise(key: string | null): Promise<void>;
	get(key: string, cb?: () => void);
	getPromise(key: string): Promise<any>;
	set(key: string, value: any, ttl: number, cb?: () => void);
	setPromise(key: string, value: any, ttl: number): Promise<any>;
}

export default MongoCache;



declare module 'mongoose' {

	interface Query<ResultType, DocType extends Document> {
		cache(ttl: number, customKey?: string): this;
		cache(customKey: string): this;
		setDerivedKey(derivedKey: string): this;
	}

	interface Aggregate<R> {
		cache(ttl: number, customKey?: string): Array<R> | any;
		cache(customKey: string): Array<R> | any;
	}
	
}

