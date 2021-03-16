FROM nginx

# Copy a configuration file from the current directory
#ADD nginx.conf /etc/nginx/
#ADD mime.types /etc/nginx/

ADD dist/ng-generator-cycles /usr/share/nginx/html/

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports
ARG PORT
EXPOSE PORT

# Set the default command to execute
# when creating a new container
CMD service nginx start
