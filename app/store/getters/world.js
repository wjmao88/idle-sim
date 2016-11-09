
export const params = (state) => {
  return state.route.params;
};

export const theme = (state) => {
  const path = state.route.path;
  if (path.match('/technology')) {
    return 'tech';
  } else if (path.match(/\/city\/\d+\/productions/)) {
    return 'prod';
  } else if (path.match(/\/city\/\d+\/consumptions/)) {
    return 'consume';
  } else {
    return 'default';
  }
};

export const money = (state) => {
  return state.world.money;
};

export const world = (state) => {
  return state.world;
};
