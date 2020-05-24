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

With auth:
```
curl -X GET -H "Content-Type: application/json" -H "X-Access-Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFmZXR0aSIsImlhdCI6MTU5MDI5ODYwNSwiZXhwIjoxNTkwOTAzNDA1fQ.91aYTTG3O7tJixo3zIR9_IsGTcOIS-KvfcDXNt_DN1Q" localhost:9080/v1/users
```

---

url: `localhost:3008/v1/users/update/qfetti`

code: ``` const updatedInfo = await route.knex.select('nickname')
					.from('users')
					.where({ username: result.id });
					return res
					.code(200)
					.send({ 
						msg: "The user account was updated!",
						data: updatedInfo 
					})```

```
curl -X POST -H "Content-Type: application/json" localhost:3008/v1/update/qfetti --data '{"name":"Qu Fetti"}'

```

With auth:
```
 curl -X POST -H "Content-Type: application/json" -H "X-Access-Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFmZXR0aSIsImlhdCI6MTU5MDI5ODYwNSwiZXhwIjoxNTkwOTAzNDA1fQ.91aYTTG3O7tJixo3zIR9_IsGTcOIS-KvfcDXNt_DN1Q" localhost:3008/v1/users/update/username --data '{"name": "Qu Fetti"}'


```
