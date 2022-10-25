import Settings from '../js/settings.js';

test('testing User settings', () => {
  const settings = new Settings('theme', 'light');
  const resultObj = new Map().set('theme', 'light');
  expect(settings.userSettings).toEqual(resultObj);
});

test('testing Default settings', () => {
  const settings = new Settings('tmusic', 'asddddd');
  const resultObj = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(settings.userSettings).toEqual(resultObj);
});
