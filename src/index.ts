import dotenv from 'dotenv-safe';
import add from '@src/math/add';

dotenv.config();

console.log(add(2, 2));
console.log(process.env.MY_NAME);
