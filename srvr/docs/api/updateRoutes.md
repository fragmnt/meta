reference:

https://github.com/fastify/fastify/blob/master/docs/Request.md

---

url: `localhost:3008/v1`

```
curl localhost:3008/v1
```

---

url: `localhost:3008/v1/users`

```
curl localhost:3008/v1/users
```

---

url: `localhost:3008/v1/users/update/qfetti`

```
curl -X POST -H "Content-Type: application/json" localhost:3008/v1/update/qfetti --data '{"name":"Qu Fetti"}'

```