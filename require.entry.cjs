module.exports = async (...args) => {
  const { default: transform } = await import('./src/index.js');
  return transform(...args);
};
