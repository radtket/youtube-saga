export const createActionTypes = (base, actions = []) => {
  return actions.reduce((acc, type) => {
    return {
      ...acc,
      [type]: `${base}_${type}`,
    };
  }, {});
};

export const createAction = (type, payload = {}) => {
  return { type, payload };
};
