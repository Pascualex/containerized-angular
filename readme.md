# Containerized Angular

## Setting up the environment

To set up the environment, execute [set-environment.cmd](set-environment.cmd) or use the following command:

```
docker build -t containerized-angular-environment ./environment
```

## Working in Visual Studio Code

With the `Remote - Containers` extension you can reopen the project inside the development environment container. The configuration file [devcontainer.json](.devcontainer/devcontainer.json) is already provided.

> :warning: **If you are using Windows**: raw performance through the Linux VM is unusable because of the I/O latency. The use of WSL 2 is recommended and the project should be placed inside its filesystem.

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
