# Kleister: Documentation

[![General Workflow](https://github.com/kleister/kleister-docs/actions/workflows/general.yml/badge.svg)](https://github.com/kleister/kleister-docs/actions/workflows/general.yml) [![Join the Matrix chat at https://matrix.to/#/#kleister:matrix.org](https://img.shields.io/badge/matrix-%23kleister%3Amatrix.org-7bc9a4.svg)](https://matrix.to/#/#kleister:matrix.org) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/21ee27fb731740d79a2bbe36a34c1848)](https://www.codacy.com/gh/kleister/kleister-docs/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kleister/kleister-docs&amp;utm_campaign=Badge_Grade)

Documentation for the Kleister project including the related tools and clients,
you can find this website at [kleister.eu][website].

## Hosting

The website is hosted on [Netlify][netlify], the website gets
automatically updated on every push to the `master` branch.

## Install

This website uses the [Hugo][hugo] static site generator. If you are planning to
contribute you'll want to download and install Hugo on your local machine. The
installation of Hugo is out of the scope of this document, so please take the
[official install instructions][install] to get Hugo up and running.

## Development

To generate the website and serve it on [localhost:1313](http://localhost:1313)
just execute this command and stop it with `Ctrl+C`:

```console
make server
```

When you are done with your changes just create a pull request, after merging
the pull request the website will be updated automatically.

## Security

If you find a security issue please contact
[kleister@webhippie.de](mailto:kleister@webhippie.de) first.

## Contributing

Fork -> Patch -> Push -> Pull Request

## Authors

-   [Thomas Boerger](https://github.com/tboerger)

## License

CC-BY-SA-4.0

## Copyright

```console
Copyright (c) 2018 Thomas Boerger <thomas@webhippie.de>
```

[website]: https://kleister.eu
[netlify]: https://www.netlify.co
[hugo]: https://github.com/spf13/hugo
[install]: https://gohugo.io/overview/installing/
