const extractArguments = require('./extractArguments');

module.exports = () => {
  return {
    visitor: {
      CallExpression: ({ node }) => {
        if (
          node.callee.type === 'Identifier' &&
          (node.callee.name === 'clsx' || node.callee.name === 'classNames')
        ) {
          node.arguments = extractArguments(node.arguments);
        }
      },
    },
  };
};