### Root API Routes

`{api-url}/v1/`

---

##### GET `/`

###### Headers: `-H "Content-Type: application/json" -H "X-Access-Token"`

###### Body Data: `NULL`

###### Parameter Data: `NULL`

if 200, return:
```
    {
        msg
    }
```

##### GET `/v1`

###### Headers: `-H "Content-Type: application/json" -H "X-Access-Token"`

###### Body Data: `NULL`

###### Parameter Data: `NULL`

if 200, return: 
```
    {
        status, 
		msg,
		client_ip_address
    }
```