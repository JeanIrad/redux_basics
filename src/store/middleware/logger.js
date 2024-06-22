const logger = (param) => (store) => (next) => (action) => {
  console.log("store", store);
  console.log("next", next);
  console.log("action", action);
  console.log("called with a param", param);
  next(action);
};

export default logger;
