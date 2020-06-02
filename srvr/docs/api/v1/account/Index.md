### Account API Routes

`{api-url}/v1/account`

---

##### GET `/v1/account`

...

##### GET `/v1/account/info`

###### Headers: `-H "Content-Type: application/json" -H "X-Access-Token"`

###### Body Data: `NULL`

###### Parameter Data: `NULL`



if 401, return:

```
{
    status,
    msg
}
```

if 500, return:

```
{
    status,
    msg
}
```

if 200, return:

```
{
    user: {
        id,
        username,
        nickname,
        email,
        profile_photo_url
    }
}
```

##### POST `/v1/account/update`

...

##### POST `/v1/account/update/username`

###### Headers: `-H "Content-Type: application/json" -H "X-Access-Token"`

###### Body Data: `{name}`

###### Parameter Data: `NULL`

if 200, return:

```
{
    status, 
    success, 
    msg, 
    data: {
        username
    } 
}
```