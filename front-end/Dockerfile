# Base image
FROM nginx:stable-alpine

# Copy build artifacts from local machine
COPY /dist /usr/share/nginx/html

# Copy new config for redirect rules
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]