FROM webhippie/caddy:latest

EXPOSE 8080

COPY docker/caddyfile.tmpl /etc/templates/
COPY public /srv/www

RUN chown -R caddy:caddy /srv/www

ARG VERSION
LABEL maintainer="Thomas Boerger <thomas@webhippie.de>"
LABEL org.label-schema.version=$VERSION
LABEL org.label-schema.name="Kleister Docs"
LABEL org.label-schema.vendor="Thomas Boerger"
LABEL org.label-schema.schema-version="1.0"
