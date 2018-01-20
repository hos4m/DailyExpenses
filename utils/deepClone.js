const deepClone = o => {
  let output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
    v = o[key];
    output[key] = typeof v === 'object' ? deepClone(v) : v;
  }
  return output;
};

export default deepClone;
