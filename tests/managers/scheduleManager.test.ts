import Logger from '../../src/managers/logger';
import { ScheduledJob } from '../../src/managers/scheduleManager';
describe('ScheduleManager', () =>
{
	describe('ScheduledJob', () =>
	{
		test('should be called on #fire', async () =>
		{
			Logger.info = jest.fn();
			const job = await new ScheduledJob('* * * * *', 'Test', async () =>
			{
				Promise.resolve();
			}, false).fire();
			expect(Logger.info).toHaveBeenCalledWith('Successfully executed \'Test\' job');
		});

		test('should catch errors', () =>
		{
			Logger.error = jest.fn();
			new ScheduledJob('* * * * *', 'Test', () =>
			{
				throw Error('Test');
			}, false).fire();
			expect(Logger.error).toHaveBeenCalledWith('System encountered error while executing "Test" Job: Error: Test');
		});

		test('should catch rejections', async () =>
		{
			Logger.error = jest.fn();
			await new ScheduledJob('* * * * *', 'Test', () =>
			{
				return Promise.reject(new Error('Test'));
			}, false).fire();
			expect(Logger.error).toHaveBeenCalledWith('Job failed "Test" reason: Test');
		});
	});
	describe('ScheduleManager', () =>
	{
		test.todo('Place for tests from #52');
	});
});
