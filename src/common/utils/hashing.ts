import crypto from 'crypto';

export const hashString = (string = '', rounds = 10) => {
  if (!string) return string;

  const salt = crypto
    .randomBytes(Math.ceil(rounds / 2))
    .toString('hex')
    .slice(0, rounds);
  const hash = crypto
    .createHash('sha256')
    .update(string + salt)
    .digest('hex');

  return hash;
};
