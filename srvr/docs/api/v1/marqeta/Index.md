### Marqeta Integration API Routes

`{api-url}/v1/mrq`

---

##### GET `/users`

###### Headers: `-H "Content-Type: application/json" -H "X-Access-Token"`

###### Body Data: `NULL`

###### Parameter Data: `NULL`

if 200, return:

```
{ 
    status, 
	data: [], 
}
```

if 500, return:

```
{ 
	status, 
	msg, 
	error, 
}
```