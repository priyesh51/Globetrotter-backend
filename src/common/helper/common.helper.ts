import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import moment from 'moment';

/**
 * encrypt password
 * @param textToEncrypt
 * @returns
 */
export const encrypt = async (textToEncrypt: string) => {
  const AES_ENC_KEY_BUFFER = Buffer.from(process.env.AES_ENC_KEY, 'hex');
  const AES_IV_BUFFER = Buffer.from(process.env.AES_IV, 'hex');

  const cipher = createCipheriv(
    'aes-256-cbc',
    AES_ENC_KEY_BUFFER,
    AES_IV_BUFFER,
  );
  let encrypted = cipher.update(textToEncrypt, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

/**
 * decrypt password
 * @param encryptToText
 * @returns
 */
export const decrypt = async (encryptToText: string) => {
  const AES_ENC_KEY_BUFFER = Buffer.from(process.env.AES_ENC_KEY, 'hex');
  const AES_IV_BUFFER = Buffer.from(process.env.AES_IV, 'hex');

  const decipher = createDecipheriv(
    'aes-256-cbc',
    AES_ENC_KEY_BUFFER,
    AES_IV_BUFFER,
  );
  const decrypted = decipher.update(encryptToText, 'base64', 'utf8');
  return decrypted + decipher.final('utf8');
};

/**
 * date to timestamp convert
 * @param date
 * @returns
 */
export const dateToTimestamp = (date: string) => {
  return moment.utc(date).unix();
};

export const dateToOnlyDate = (date: string): string => {
  return moment.utc(date).format('YYYY-MM-DD');
};

/**
 * set date format
 * @param date
 * @param formate
 * @returns
 */
export const formateDate = (date: any, formate = 'DD/MM/YYYY') => {
  return moment.utc(date).format(formate);
};

/**
 * Set number formate
 * @param value
 * @param digit
 * @returns
 */
export const numberFormat = (value: number, digit: number) => {
  if (value === undefined || value === null) return 0;
  return parseFloat(value.toFixed(digit));
};

/**
 * Generate unique ID
 * @param prefix
 * @returns
 */
export const generateUniqueId = async (prefix: string) => {
  return `${prefix}${randomBytes(4).toString('hex')}${moment().unix()}`;
};

/**
 * Check if external url is valid or not
 * @param url
 * @returns
 */
export const isUrlValid = (url: any) => {
  if (typeof url === 'string')
    if (url.indexOf('http') == 0) {
      return true;
    } else {
      return false;
    }
  return false;
};

/**
 * decrypt message
 * @param encryptToText
 * @returns
 */
export const decryptMessage = (encryptToText: string) => {
  try {
    const key = Buffer.from(process.env.AES_ENC_KEY_MESSAGE, 'utf-8');
    const iv = Buffer.from(process.env.AES_IV_MESSAGE, 'utf-8');
    const decipher = createDecipheriv('aes-256-cbc', key, iv);

    let decrypted = decipher.update(encryptToText, 'base64', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
  } catch (e) {
    console.error(e);
  }
};
