module.exports = {
  extends: 'google',
  rules: {
    'linebreak-style':
      ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  },
};
