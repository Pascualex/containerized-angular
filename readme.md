# Containerized Angular

## Setting up the environment

To set up the environment, execute [set-environment.cmd](set-environment.cmd) or use the following command:

```
docker build -t containerized-angular-environment ./environment
```

## Building the project

To build the project, execute [build.cmd](build.cmd) or use the following command:
```
docker build -t containerized-angular .
```

## Running the project

To run the project in the `8080` port, execute [run.cmd](run.cmd) or use the following command:
```
docker run --rm -p 8080:80 containerized-angular
```
