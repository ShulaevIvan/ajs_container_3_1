export default class Settings {
  constructor(userKey, userValue) {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.allSettings = [
      { theme: 'light' },
      { theme: 'gray' },
      { music: 'pop' },
      { music: 'rock' },
      { music: 'chillout' },
      { music: 'off' },
      { difficulty: 'normal' },
      { difficulty: 'hard' },
      { difficulty: 'nightmare' },
    ];

    const userObj = {};
    userObj[userKey] = userValue;

    const check = this.allSettings.filter(
      (item) => Object.keys(userObj).every((key) => item[key] === userObj[key]),
    );

    if (Object.keys(check).length === 0) {
      this.userSettings = this.defaultSettings;
    } else {
      this.userSettings = new Map([
        [`${userKey}`, `${userValue}`],
      ]);
    }
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}

const settings = new Settings('theme', 'light');
const settings2 = new Settings('music', 'test');
console.log(settings.settings);
console.log(settings2.settings);
