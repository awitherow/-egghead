# learning HTTP

## lesson one

- httpie.org
- install using `brew install httpie`

### example inspection of a get request

```bash
http --print=HB get https://github.com/users/awitherow

GET /users/awitherow HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: github.com
User-Agent: HTTPie/0.9.8
```

### standard options
- get
- put
- post
- delete
