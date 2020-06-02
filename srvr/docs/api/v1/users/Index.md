### User API Routes

`{api-url}/v1/users`

---

##### GET `/`

###### Headers: `-H "Content-Type: application/json" -H "X-Access-Token"`

###### Body Data: `NULL`

###### Parameter Data: `NULL`

if 200, return: 

```
{
    meta_identity_api: { 
        users: [] 
    }
} 
```

##### POST `/login`

###### Headers: `-H "Content-Type: application/json" -H "X-Access-Token"`

###### Body Data: `NULL`

###### Parameter Data: `NULL`

if 200, return:

```
{ 
    status,
	user: {
		email
	}, 
	exists,
	accessToken
}
```

##### POST `/register`

###### Headers: `-H "Content-Type: application/json" -H "X-Access-Token"`

###### Body Data: `NULL`

###### Parameter Data: `NULL`

if 201, return

```
{
	status, 
	user: {
		id,
		username,
		email
	}, 
	accessToken
}
```