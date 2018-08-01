# Kleister: Documentation

[![Build Status](http://drone.kleister.tech/api/badges/kleister/kleister-docs/status.svg)](http://drone.kleister.tech/kleister/kleister-docs)
[![Stories in Ready](https://badge.waffle.io/kleister/kleister-api.svg?label=ready&title=Ready)](http://waffle.io/kleister/kleister-api)
[![Join the Matrix chat at https://matrix.to/#/#kleister:matrix.org](https://img.shields.io/badge/matrix-%23kleister%3Amatrix.org-7bc9a4.svg)](https://matrix.to/#/#kleister:matrix.org)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3b314b2be7ca4855978df1637bd61676)](https://www.codacy.com/app/kleister/kleister-docs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kleister/kleister-docs&amp;utm_campaign=Badge_Grade)

**This project is under heavy development, it's not in a working state yet!**

Where does this name come from or what does it mean? It's quite simple, it's one german word for paste/glue, I thought it's a good match as it glues together the modpacks for Minecraft.

Documentation for the Kleister API and the command line client, you can find this website at [kleister.tech](https://kleister.tech).


## Hosting

The website is hosted on [Netlify](https://www.netlify.com/), the website gets automatically updated on every push to the `master` branch.


## Install

This website uses the [Hugo](https://github.com/spf13/hugo) static site generator. If you are planning to contribute you'll want to download and install Hugo on your local machine. The installation of Hugo is out of the scope of this document, so please take the [official install instructions](https://gohugo.io/overview/installing/) to get Hugo up and running.


## Development

To generate the website and serve it on [localhost:1313](http://localhost:1313) just execute this command and stop it with `Ctrl+C`:

```bash
make server
```

When you are done with your changes just create a pull request, after merging the pull request the website will be updated automatically.


## Security

If you find a security issue please contact kleister@webhippie.de first.


## Contributing

Fork -> Patch -> Push -> Pull Request


## Authors

* [Thomas Boerger](https://github.com/tboerger)


## License

CC-BY-SA-4.0


## Copyright

```
Copyright (c) 2018 Thomas Boerger <thomas@webhippie.de>
```
