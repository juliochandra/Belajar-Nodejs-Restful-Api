# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

    {
        "username" : "juliochandra",
        "password" : "password1234",
        "name" : "julio chandra"
    }

Response Body Success :

    {
        "success" : true,
        "data" : {
            "username" : "juliochandra",
            "name" : "julio chandra"
        }
    }

Response Body Error

    {
        "errors" : "username already exist"
    }

## Login User API

Endpoint : POST /api/users/login

Request Body :

    {
        "username" : "juliochandra",
        "password" : "password1234",
    }

Response Body Success :

    {
        "success" : true,
        "data" : {
            "token" : "token"
        }
    }

Response Body Error

    {
        "errors" : "username or password wrong"
    }

## Update User API

Endpoint : PATCH /api/users/current

Header :

- Authorization : token

Request Body :

    {
        "name" : "julio chandra pratama",
        "password" : "newpassword1234",
    }

Response Body Success :

    {
        "success" : true,
        "data" : {
            "username" : "juliochandra",
            "name" : "julio chandra pratama"
        }
    }

Response Body Error

    {
        "errors" : "name length max 100"
    }

## Get User API

Endpoint : GET /api/users/current

Header :

- Authorization : token

Response Body Success :

    {
        "success" : true,
        "data" : {
            "username" : "juliochandra",
            "name" : "julio chandra"
        }
    }

Response Body Error

    {
        "errors" : "Unauthorized"
    }

## Logout user API

Endpoint : DELETE /api/users/logout

Header :

- Authorization : token

Response Body Success :

    {
        "success" : true,
        "data" :"ok"
    }

Response Body Error

    {
        "errors" : "Unauthorized"
    }
