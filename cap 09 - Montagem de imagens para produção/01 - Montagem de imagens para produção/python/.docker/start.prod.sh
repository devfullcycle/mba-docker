#!/bin/bash
exec gunicorn my_django.wsgi:application \
              --bind 0.0.0.0:8000 \
              --error-logfile /var/log/gunicorn/error.log \
              --access-logfile /var/log/gunicorn/access.log & \
     nginx -g 'daemon off;'
