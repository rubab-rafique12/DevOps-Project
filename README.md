# DevOps-Project

Git Workflow, Team Collaboration and Dockerization

# Git Collaboration Assignment

## Group Members

| Name            | ID    | Role        |
| --------------- | ----- | ----------- |
| Rubab Rafique   | 55565 | Team Leader |
| Salma Rani      | 54194 | Team Member |
| Momna Khurram   | 55430 | Team Member |
| Ayesha Tassawar | 55421 | Team Member |
| Amna Tassawar   | 55420 | Team Member |

## Project Description

This repository demonstrates Git and GitHub collaboration and Dockerization of the application.

The project includes:

* Git and GitHub collaboration
* Repository creation and project code management
* Cloning and pulling the project
* Branching, committing, and pushing changes
* Pull requests, code review, and merging
* Dockerfile creation
* Docker image building and container execution
* Docker Hub image publishing

# Git and GitHub Collaboration

The project repository was created on GitHub and the application code was added and pushed to the repository.

Team members cloned the repository and pulled the latest project code. Git branches were used for individual team members' work. Changes were committed and pushed to GitHub, followed by pull requests, code review, and merging into the main branch.

# Dockerization

The application was containerized using Docker with the Nginx Alpine base image.

A Dockerfile was created to copy the application files into the Nginx web server directory, expose port 80, and start the Nginx server.

The Docker image was built and tested locally. A Docker container was run with port 8080 mapped to port 80, and the application was accessed through `http://localhost:8080`.

The Docker image was then tagged and pushed to Docker Hub.

## Docker Hub Repository

**Repository:** `rubabrafique12/devops-project`

**Docker Hub:** https://hub.docker.com/r/rubabrafique12/devops-project

# Docker Commands

```bash
docker build -t devops-project .
docker images
docker run -d -p 8080:80 --name devops-container devops-project
docker ps
docker tag devops-project:latest rubabrafique12/devops-project:latest
docker login
docker push rubabrafique12/devops-project:latest
```

# Resources Used

* Docker Documentation
* Docker Hub
* Nginx Docker Image Documentation
* Git Documentation
* GitHub Documentation

# Screenshots

## Git and GitHub

* GitHub Repository
* Project Code
* Clone and Pull
* Branching
* Commit and Push
* Pull Request
* Code Review
* Merge

## Docker

* Dockerfile
* Docker Image
* Running Container
* Application Output
* Docker Hub Repository
* Docker Image Push

# Conclusion

This project demonstrates Git and GitHub based team collaboration along with Docker-based application containerization. The application was successfully managed using GitHub, containerized using Docker, tested locally, and pushed to Docker Hub.
