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

