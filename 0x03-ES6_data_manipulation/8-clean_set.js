const cleanSet = (set, startString) => {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') {
    return '';
  }
  const cleanedset = Array.from(set).filter((value) => value.startsWith(startString));
  const cleaned = cleanedset.map((value) => value.slice(startString.length));

  return cleaned.join('-');
};

export default cleanSet;
