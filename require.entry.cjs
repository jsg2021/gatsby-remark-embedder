module.exports = async (...args) => {
  const {
    // node's own commonjs wrapper adds a second `default` layer
    default: { default: transform },
  } = await import('./dist/index.js');
  return transform(...args);
};
