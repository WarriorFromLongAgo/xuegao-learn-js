
export let BASE_URL = '';
const apiUrl = process.env.VUE_APP_API_HOST;

switch (process.env.NODE_ENV) {
  case "development":
    if (apiUrl === undefined) {
      throw new Error('apiUrl === undefined');
    }
    BASE_URL = apiUrl
    console.log('BASE_URL ====', BASE_URL);
    break;
  // case "test":
  //   BASE_URL = "127.0.0.1:8080";
  //   break;
  // case "production":
  //   BASE_URL = "//api.mumuyun2.com";
  //   break;
}