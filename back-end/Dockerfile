# Use an official Python runtime as a parent image
FROM python:3.10-slim-buster

# Set the working directory in the container to /app
WORKDIR /app

# Add the current directory contents into the container at /app
ADD . /app

# Install pipenv
RUN pip install pipenv

# Install any needed packages specified in Pipfile
RUN pipenv install --system --deploy

# Make port 80 available to the world outside this container
EXPOSE 80

# Run the application when the container launches
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]