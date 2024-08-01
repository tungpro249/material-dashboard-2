const axiosConfig = (jwtToken: string) => ({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    token: jwtToken,
  },
});
const axiosConfigMultipart = (jwtToken: string) => ({
  headers: {
    "Content-Type": "multipart/formdata",
    "Access-Control-Allow-Origin": "*",
    token: jwtToken,
  },
});

// eslint-disable-next-line import/prefer-default-export
export { axiosConfig,axiosConfigMultipart };
