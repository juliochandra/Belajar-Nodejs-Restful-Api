# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Header :

- Authorization : token

Request Body :

    {
        "first_name" : "julio",
        "last_name" : "chandra",
        "email" : "juliochandra@gmail.com",
        "phone" : "081321654987"
    }

Respone Body Success :

    {
        "data" : {
            "id" : 1,
            "first_name" : "julio",
            "last_name" : "chandra",
            "email" : "juliochandra@gmail.com",
            "phone" : "081321654987",
        }
    }

Respone Body Error

    {
        "errors" : "email is not valid format"
    }

## Update Contact API

Endpoint : PUT /api/contacts/:id

Header :

- Authorization : token

Request Body :

    {
        "first_name" : "julio",
        "last_name" : "chandra",
        "email" : "juliochandra@gmail.com",
        "phone" : "081321654987"
    }

Respone Body Success :

    {
        "data" : {
            "id" : 1,
            "first_name" : "julio",
            "last_name" : "chandra",
            "email" : "juliochandra@gmail.com",
            "phone" : "081321654987",
        }
    }

Respone Body Error

    {
        "errors" : "email is not valid format"
    }

## Get Contact API

Endpoint : PUT /api/contacts/:id

Header :

- Authorization : token

Respone Body Success :

    {
        "data" : {
            "id" : 1,
            "first_name" : "julio",
            "last_name" : "chandra",
            "email" : "juliochandra@gmail.com",
            "phone" : "081321654987",
        }
    }

Respone Body Error

    {
        "errors" : "contact id not found"
    }

## Search Contact API

Endpoint : GET /api/contacts/:id

Header :

- Authorization : token

Query params :

- name : Search by first_name or last_name, using like, opsional
- email : Search by email using like, opsional
- phone : Search by phone using like, opsional
- page : number of page, default 1
- size : size per page, default 10

Respone Body Success :

    {
        "data" : [
            {
                "id" : 1,
                "first_name" : "julio",
                "last_name" : "chandra",
                "email" : "juliochandra@gmail.com",
                "phone" : "081321654987",
            },
            {
                "id" : 2,
                "first_name" : "xander",
                "last_name" : "xenon",
                "email" : "xanderxenon@gmail.com",
                "phone" : "081321654987",
            }
        ],
        "paging" : {
            "page" : 1,
            "total_page" : 3,
            "total_item" : 30,
        }
    }

Respone Body Error

    {
        "errors" : "email is not valid format"
    }

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Header :

- Authorization : token

Respone Body Success :

    {
        "data" : "ok"
    }

Respone Body Error

    {
        "errors" : "contact is not found"
    }
