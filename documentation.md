<!-- Back to Top Navigation Anchor -->

<a name="readme-top"></a>

#### Install project dependencies

```sh
npm install
```

#### Update .env with 
- MONGODB_URI
- PORT

#### Run a development server

```sh
nodemon server
```

#### For testing, run

```sh
npm run test
```

### Models

#### User

| field      | data_type     | constraints      |
| ---------  | ------------- | ---------------- |
| name       | string        | required         |
| email      | string        |                  |



## Usage

### Base URL


### Creating a user

- Route: /api
- Method: POST

:point_down: Body

```json
{
    "name": "dream",
}
```

:point_down: Response

```json
{
  "message": "User added successfully",
  "response": {
    "username": "dream",
    "onBoard": {
      "createdAccount": false,
      "hasRegistered": false,
      "hasKyc": false,
      "hasFunded": false
    },
    "_id": "7a89e960-3c5b-4ff2-8909-905a8a23d20a",
    "createdAt": "2023-09-16T04:57:58.289Z",
    "updatedAt": "2023-09-16T04:57:58.289Z",
    "__v": 0
  }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Get All Users

- Route: /
- Method: GET

:point_down: Request url

```json
    https://hngcrud.onrender.com/api
```

:point_down: Response

```json
    {
    "success": true,
    "users": [
        {
        "_id": "650476d366025507ea61cb5f",
        "username": "junior"
        },
        {
        "_id": "650488049d2626f524c71b67",
        "username": "John Doe"
        }
    ]
    }
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Get User By Id

- Route: /api/:id
- Method: GET

:point_down: Sample request url

```json
    https://hngcrud.onrender.com/api/650488049d2626f524c71b67
```

:point_down: Response

```json
    {
        "success": true,
        "user": {
            "_id": "650488049d2626f524c71b67",
            "username": "John Doe"
        }
    }
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Update User By Id

- Route: /api/:id
- Method: PUT

:point_down: Sample Request url

```json
    https://hngcrud.onrender.com/650488049d2626f524c71b67
```

:point_down: Body

```json
{
    "username": "Steve Doe"
}
```

:point_down: Response

```json
    {
        "success": true,
        "message": "user info successfully updated",
        "user": {
            "_id": "650488049d2626f524c71b67",
            "username": "Steve Doe"
        }
    }
```

### Delete User By Id

- Route: /api/:id
- Method: DELETE

:point_down: Sample Request url

```json
    https://hngcrud.onrender.com/650488049d2626f524c71b67
```

:point_down: Response

```json
    {
        "success": true,
        "message": "user successfully deleted"
    }
```

<p align="right"><a href="#readme-top">back to top</a></p>








<p align="right"><a href="#readme-top">back to top</a></p>







