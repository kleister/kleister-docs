# Kleister: Documentation

[![Build Status](http://github.dronehippie.de/api/badges/kleister/kleister-docs/status.svg)](http://github.dronehippie.de/kleister/kleister-docs)
[![](https://images.microbadger.com/badges/image/kleister/kleister-docs.svg)](http://microbadger.com/images/kleister/kleister-docs "Get your own image badge on microbadger.com")
[![Join the chat at https://gitter.im/kleister/kleister](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kleister/kleister)
[![Stories in Ready](https://badge.waffle.io/kleister/kleister-api.svg?label=ready&title=Ready)](http://waffle.io/kleister/kleister-api)

**This project is under heavy development, it's not in a working state yet!**

Where does this name come from or what does it mean? It's quite simple, it's one
german word for paste/glue, I thought it's a good match as it glues together the
modpacks for Minecraft.

Documentation for the Kleister API and the command line client, you can find this
website at [kleister.webhippie.de](https://kleister.webhippie.de).


## Hosting

The website is hosted on infrastructure sponsored by
[Webhippie](https://webhippie.de), the Docker container just gets launched on
the Swarm cluster. The website gets automcatically updated on every push to the
`master` branch.

If you want to host the docs on your own you can take our docker image
[kleister/kleister-docs](https://hub.docker.com/r/kleister/kleister-docs/).


## Install

This website uses the [Hugo](https://github.com/spf13/hugo) static site
generator. If you are planning to contribute you'll want to download and install
Hugo on your local machine.

The installation of Hugo is out of the scope of this document, so please take
the [official install instructions](https://gohugo.io/overview/installing/) to
get Hugo up and running.


## Development

To generate the website and serve it on [localhost:1313](http://localhost:1313)
just execute this command and stop it with `Ctrl+C`:

```
hugo server
```

When you are done with your changes just create a pull request, after merging
the pull request the website will be updated automatically.


## Contributing

Fork -> Patch -> Push -> Pull Request


## Authors

* [Thomas Boerger](https://github.com/tboerger)


## License

Apache-2.0


## Copyright

```
Copyright (c) 2016 Thomas Boerger <http://www.webhippie.de>
```
