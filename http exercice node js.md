# Exercise: Create an HTTP Server with Node.js

## 🎯 Objective

Create a simple HTTP server using Node.js's built-in `http` module.

Your server will have multiple pages and should return different HTML content depending on the URL requested by the user.

---

## Requirements

Your server must:

1. Use the Node.js **`http` module**.
2. Create an HTTP server.
3. Make the server listen on port **3000**.
4. Handle **GET** requests.
5. Return an HTML **Home page** when the user visits:

`GET /`

6. Return an HTML **About page** when the user visits:

`GET /about`

7. Return a **404 Page Not Found** response for any unknown URL.

---

## 📁 Project Structure

Create a simple project:

```text
my-http-server/
│
├── package.json
└── server.js
```

---

## 📝 Steps

### Step 1 — Create the project

Create a new Node.js project.

Create a file called:

`server.js`

---

### Step 2 — Import the HTTP module

Use Node.js's built-in `http` module.

💡 **Hint:** You don't need to install anything with npm because `http` is included with Node.js.

---

### Step 3 — Create the HTTP server

Create an HTTP server.

The server should receive two important objects:

- `request`
- `response`

---

### Step 4 — Check the HTTP Method and URL

You need to know:

- What HTTP method did the client use?
- Which URL did the client request?

💡 **Hint:**

The `request` object contains:

```text
request.method
request.url
```

For example, to check if the user requested the Home page using GET:

```js
if (request.method === "GET" && request.url === "/") {
  // Your code here
}
```

For the About page, check:

```text
GET /about
```

💡 **Think about:**
How can you combine `request.method` and `request.url` to detect this request?

---

### Step 5 — Create the Home Page

When the user sends:

```text
GET /
```

Return an HTML page containing:
u

- `<html>`
- `<head>`
- A title: **Home**
- `<body>`
- A heading: **Welcome to My Website**
- A short paragraph

---

### Step 6 — Create the About Page

When the user sends:

```text
GET /about
```

Return another HTML page containing:

- `<html>`
- `<head>`
- A title: **About**
- `<body>`
- A heading: **About Us**
- A short paragraph about the website or developer

---

### Step 7 — Set the Response Headers

Since you are returning HTML, tell the browser that the response contains HTML.

💡 **Hint:**

You need to use the response object to send:

```text
Content-Type: text/html
```

You should also send the appropriate HTTP status code.

---

### Step 8 — Handle Unknown URLs

What should happen if the user visits:

```text
/contact
```

or:

```text
/test
```

or any other URL that you didn't create?

Return:

```text
404
```

with an HTML message:

```text
Page Not Found
```

---

### Step 9 — Start the Server

Make your server listen on port:

```text
3000
```

Then start your server from the terminal.

---

## 🧪 Test Your Server

Open your browser and test:

### Home

```text
http://localhost:3000/
```

Expected result:

**Welcome to My Website**

### About

```text
http://localhost:3000/about
```

Expected result:

**About Us**

### Unknown page

```text
http://localhost:3000/contact
```

Expected result:

**Page Not Found**

with status code **404**.

---

## 💡 Important Hint

Inside your server, think about the request like this:

```text
request
 ├── method → GET
 └── url    → /about
```

Your job is to use these two values to decide which response to send.

For example:

```js
request.method === "GET";
request.url === "/";
```

Combine them to identify the requested page.

---

## ⭐ Bonus Challenge

Add a third page:

```text
GET /contact
```

The Contact page should contain:

- A title
- A heading
- An email address
- A phone number

Also make sure that all other URLs still return **404 Page Not Found**.
