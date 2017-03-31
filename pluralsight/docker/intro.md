# docker and containerization

## table of contents

- What is a Container?
- What is Docker?
- how will it impact everything?
- how to prepare?
- concepts in technologies

### What is a Container?

#### Advent of Technology

With the beginning of IT, each applicaiton that was created needed its own server and hardware.

This lead to immense operating costs upfront, with dreadful waste.

#### Hypervisor

With the introduction of Hypervisor, we were able to run multiple applications via a single hardware/server setup.

Hypervisor was not the final solution, for it has flaws.

- Each application had a percentage of performance power of the actual server allocated to it via a Virtual Machine.
- Each VM also had an OS, which consumed performance resource as well as liscensing costs.
- Operational/Adminstrative baggage

#### Containers

Uses a single operating system, which then has X containers that run each application.

The container architecture allows for quick starting and frees up a lot of space for more

- apps
- scaling of existing apps

because

- no extra OS
- no virtual machines
- no overhead


##### Images

Docker images are sort of a template that can be started which will create environment.

### What is Docker?

Tech start up based in San Fran. Started as dotCloud, SaaS around AWS.

They're the stewards of the docker project.

The Open Container Initiative strives to create a strong ecosystem and standards for templating container images.

### Differences between Stateful and Stateless applications and Docker

Docker can handle both Stateful situations as well as Stateless ones, but it excells at handling Stateless situations.

#### Stateless

Does not remember anything, only executes its task at hand.

#### Stateful

Remembers your history.

Docker persist data by default! No need to worry.

### Dockerhub

A registry is similar to a bank for supported templates.

### Orchestration

Proper container orchestration enables deployment and scaling on a nice level. This will be expanded upon in later modules.