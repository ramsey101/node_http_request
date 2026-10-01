## ⭐ Extra Challenge — Get the User's Name

Add a simple form to your **Contact page**.

### Requirements

When the user visits:

```text
GET /contact
```

Display an HTML page containing:

* A heading: **Contact Us**
* An input field for the user's **name**
* A **Submit** button

For example:

```text
Name: [________________] [Submit]
```

### What should happen?

When the user enters their name and clicks **Submit**:

1. The browser should send the name to the server.
2. The server should receive the user's name.
3. The server should display a response containing the name.

For example, if the user enters:

```text
Mohamed
```

The server should respond with:

```text
Hello Mohamed!
```

### 💡 Hints

The form should use:

```text
POST /contact
```

On the server, you need to check:

```text
request.method
request.url
```

For the POST request, remember that the data is received through:

```text
request.on("data", ...)
```

and you know that all the data has arrived when:

```text
request.on("end", ...)
```

### 🎯 Goal

You should be able to:

```text
GET /contact
      ↓
Display form
      ↓
User enters name
      ↓
Click Submit
      ↓
POST /contact
      ↓
Server receives name
      ↓
Server responds: "Hello Mohamed!"
```
