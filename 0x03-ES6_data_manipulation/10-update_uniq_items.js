const updateUniqueItems = (groceries) => {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }
  groceries.forEach((val, key) => {
    if (val === 1) {
      groceries.set(key, 100);
    }
  });
};

export default updateUniqueItems;
