# :globe_with_meridians: gatsby-plugin-indieweb

> [IndieWeb](https://indieweb.org)-ify your Gatsby site

## Installation

```sh
npm install gatsby-plugin-indieweb
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: {
    resolve: `gatsby-plugin-indieweb`,
    options: {
      auth: {
        twitter: `example`,
        github: `example`,
        email: `email@example.com`,
      },
      webmention: `example.com`,
    },
  },
};
```

In order to set up IndieAuth (for example via https://indielogin.com), add one
or more social accounts and/or email addresses to the `auth` option object. If
you are using a social account, keep in mind you'll have to link back to your
website from the respective profile.

To set up webmentions via https://webmention.io, add your username to the
`webmention` option. To get your username, sign up to https://webmention.io.
Once you are signed in, your username is displayed on the right of the dashboard
navbar. Usually, the username will be your domain name.

Any options can be set to `false` (or simply omitted) in order to disable the
respective feature.

---

## License

[MIT](LICENSE)
