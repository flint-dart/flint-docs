### REST API Example

Example user endpoints using `QueryBuilder.paginate()` and validation helpers:

GET

/api/users

Get all users with pagination

                Parameter
                Type
                Required
                Description

                `page`

int

                No
                Page number (default: 1)

                `per_page`

int

                No
                Items per page (default: 15)

#### Response:

```json
{
  "data": [
    {
      "id": "3a4b8e1f",
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00.000Z"
    }
  ],
  "current_page": 1,
  "per_page": 15,
  "total": 42,
  "last_page": 3
}
```

POST

/api/users

Create a new user

                Parameter
                Type
                Required
                Description

                `name`

string

                Yes
                User's full name

                `email`

string

                Yes
                User's email address (must be unique)

                `password`

string

                Yes
                User's password (min length defined in config)

#### Response (201 Created):

```json
{
  "id": "a1b2c3d4",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "created_at": "2024-01-15T11:00:00.000Z"
}
```
