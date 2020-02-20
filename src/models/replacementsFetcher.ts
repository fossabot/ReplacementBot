import ReplacementDay from './replacementDay';
import moment = require('moment');
import Replacement from './replacement';

export class FetchError extends Error
{
	constructor(message: any)
	{
		super(message);
	}
}

export class ResponseParseError extends Error
{
	constructor(message: any)
	{
		super(message);
	}
}

export interface ReplacementsFetcher
{
	fetchReplacements(date?: moment.Moment): Promise<ReplacementDay | FetchError | ResponseParseError>;
}
