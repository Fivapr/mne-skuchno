import axios, { AxiosResponse } from 'axios'

const LOGIN_URL = 'http://lingualeo.com/api/login';
const ADD_WORD_URL = 'http://api.lingualeo.com/addword';
// const GET_TRANSLATES_URL = 'http://api.lingualeo.com/gettranslates';
// const ADD_WORD_SET = 'http://lingualeo.com/userdict3/createWordSet';

// declare global {
//   interface Window {
//     _login: (data: LoginArgs) => Promise<AxiosResponse<any>>;
//     _addWord: (data: any) => Promise<AxiosResponse<any>>;
//   }
// }

const client = axios.create({});

interface LoginArgs {
  login: string
  password: string
}
export const addWord = (word: string) => fetch(`https://api.lingualeo.com/addword?word=${word}`, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "Set-Cookie": "SameSite=None"
  },
  "referrer": "http://localhost:3000",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "no-cors",
  "credentials": "include"
});


document.cookie = 'Cookie: lang=ru; _ym_uid=1584978695699343053; _ym_d=1589997265; _gac_UA-13253747-1=1.1589997266.CjwKCAjwqpP2BRBTEiwAfpiD-5MihI7OHojGghJjYuF4KC7ggAfHfxRLdSJhBowvKXLoU4r2xEeyyRoCFV4QAvD_BwE; lingualeouid=1590006057574584; _gid=GA1.2.612203912.1591421789; _ym_wasSynced=%7B%22time%22%3A1591421789639%2C%22params%22%3A%7B%22eu%22%3A0%7D%2C%22bkParams%22%3A%7B%7D%7D; _ym_isad=2; _ym_visorc_837359=w; __utm=eyJ1dG1fcmVmZXJlciI6IiJ9; browser-plugins-msg-hide=1; iface=ru; userid=19682544; remember=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE5NjgyNTQ0LCJleHAiOjE1OTk0NjA0NTYsInR5cCI6ImEifQ.irxoK9h3dXDpx0h6Y3Ww6BuYBTfb9Pc4rTp_VJrYRZk; userid=19682544; servid=2734b45e496402d783f15a2f5b1344e6debabb53b81332197d5d2db5e18764396517e400d338886b; _ga=GA1.1.750546940.1589997266; _ga_3GJ88TMKR4=GS1.1.1591421789.7.1.1591425773.0'

// export const addWord = ({ word = '', tword = '', context = '' }) =>
//   client.get(ADD_WORD_URL, {
//     withCredentials: true,
//     data: {
//       word,
//       tword,
//       context,
//     }
//   })

// window._addWord = addWord

// const translate = (word, sourceLang = 'en', targetLang = 'ru') =>
//   agent
//     .get(
//       `https://lingualeo.com/translate.php?q=${encodeURIComponent(
//         word,
//       )}&from=&source=${sourceLang}&target=${targetLang}`,
//     )
//     .then(res => res.body.translation);

// const addWordSet = title => {
//   return agent
//     .get(ADD_WORD_SET)
//     .query({ 'wordSet[name]': title })
//     .then(res => res.body)
//     .then(result => {
//       if (result.error_msg) {
//         throw new Error(result.error_msg);
//       }
//       if (!result.result || !result.result.id) {
//         throw new Error(result);
//       }
//       return result.result;
//     });
// };