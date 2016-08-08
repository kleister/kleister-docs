#!/usr/bin/env bash

if [[ -n ${KLEISTER_ROOT} ]]
then
  hugo \
    --baseURL ${KLEISTER_ROOT} \
    --source /srv/src \
    --destination /srv/www${KLEISTER_ROOT} \
    --cleanDestinationDir
fi

exec $@
