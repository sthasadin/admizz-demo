import { GLOBAL_ERROR } from "./const";

export const init = (type) => {
  return {
    type: `${type}_INIT`,
  };
};

export const finish = (type) => {
  return {
    type: `${type}_FINISH`,
  };
};

export const success = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const error = (payload) => {
  return {
    type: GLOBAL_ERROR,
    payload,
  };
};
