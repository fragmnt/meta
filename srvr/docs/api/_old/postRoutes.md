url: `localhost:9080/v1/users/login`

curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "email=jghomeworkllc@gmail.com&password=kookie123" localhost:9080/v1/users/login 

---

url: `localhost:9080/v1/users/register`

curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "email=jghomeworkllc@gmail.com&password=kookie123&username=jghomework&nickname=J.G. Homework" localhost:9080/v1/users/register 


---


url: `localhost:9080/v1/account/info`

curl -X GET -H "Content-Type: application/json" -H "X-Access-Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpnaG9tZXdvcmtsbGNAZ21haWwuY29tIiwiaWF0IjoxNTkwNDIwNTE5LCJleHAiOjE1OTEwMjUzMTl9.CjZIVjfRpaZLK62WrZlLXEgPSjY9-B7l6PwkpA-X5OU" localhost:9080/v1/account/info
