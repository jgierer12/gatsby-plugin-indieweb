const React = require(`react`);
const merge = require(`lodash.merge`);

const getKey = (scope, key) => `gatsby-plugin-indieweb_${scope}_${key}`;

const getAuthUrl = (provider, login) => {
  switch (provider) {
    case `twitter`:
      return `https://twitter.com/${login}`;
    case `github`:
      return `https://github.com/${login}`;
    case `email`:
      return `mailto:${login}`;
    default:
      throw new Error(`Invalid auth provider: ${provider}`);
  }
};

const getWebmentionUrl = (type, username) => {
  const base = `https://webmention.io/${username}`;
  switch (type) {
    case `webmention`:
      return `${base}/webmention`;
    case `pingback`:
      return `${base}/xmlrpc`;
  }
};

const defaultOptions = {
  auth: {
    twitter: false,
    github: false,
    email: false,
  },
  webmention: false,
};

module.exports.onRenderBody = ({ setHeadComponents }, userOptions = {}) => {
  const options = merge(defaultOptions, userOptions);

  let headComponents = [];

  if (options.auth) {
    Object.entries(options.auth).forEach(([provider, login], i) => {
      if (!login) return;

      const url = getAuthUrl(provider, login);
      headComponents.push(
        React.createElement(
          `link`,
          {
            href: url,
            rel: `me`,
            key: getKey(`auth`, i),
          },
          null
        )
      );
    });
  }

  if (options.webmention) {
    headComponents.push(
      ...[`webmention`, `pingback`].map((type, i) =>
        React.createElement(`link`, {
          href: getWebmentionUrl(type, options.webmention),
          rel: type,
          key: getKey(`webmention`, i),
        })
      )
    );
  }

  setHeadComponents(headComponents);
};
