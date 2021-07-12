# compitative-programming-scallable-compilers-with-docker-and-load-balancer


## to spin up all containers
### sudo docker-compose down && sudo docker-compose up --build --force-recreate

## Procedure to make compile post request
### post request url http://localhost:8000/code_executor

### form data with below params
### user_id:3
### execution_type:1
### code_data param will contain buffer of file(for example code.py)

## different execution types
### 1. python3
### 2. javascript
### 3. CPP
### 4. C
### 5. GOLANG
### 6. PHP
### 7. python2



### this nginx load balancer uses round robit to spin up containers and distribute compiled code output to user.