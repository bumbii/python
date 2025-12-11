const React = require('react');

function useMDXComponents() {
  return {};
}

function MDXProvider({ components, children }) {
  return children;
}

module.exports = {
  useMDXComponents,
  MDXProvider
};
