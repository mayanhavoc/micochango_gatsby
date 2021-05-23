---
title: "Making local authentication work"
date: "2021-05-22"
---


![Roberto Mayen-Hess](./images/Profile-pic.png)

### What modules do we need to make authentication work? 
- passport -> this is the most important
- mongoose -> we'll build our models and mongo will let us talk to our database. 

---

### What important aspect of using passport changes when doing _local authentication_? 
Because we are doing _local authentication_, we will need a different **strategy**

---

### Where can we find information about the strategy that we are using? 
In the `package.json` file under dependencies. 
```Javascript
"passport-local": "^1.0.0",
```

---

### How do you use a _local strategy_ in our `passport.js` file? 
By requiring `'passport-local'` with a class of `Strategy`
```Javascript
const localStrategy = require('passport-local').Strategy
```

---

### How do you code a _strategy_? 
You don't. Every time you use a _strategy_ you copy/paste the code that goes along with that strategy. 

---

### Broadly explain how a _strategy_ works? 
1. Whenever we use a strategy the first thing it does is look for a `user` that has an `email` => 
```Javascript
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done ) => { 
	User.findOne({ email: email.toLowerCase() }, ( err, user ) => {...})
	// 👆 looking for the user
}))
```
2. If we don't find a `user` with that `email`, the function will tell us that it didn't find one => 
```Javascript
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done ) => { 
	User.findOne({ email: email.toLowerCase() }, ( err, user ) => {
	if (err) { return done(err) }
	if (!user) {
		return donde(null, false, { msg: `Email ${email} not fouind.`})	
	}	// 👆 Checks for user/email and returns if not found
	})
```
3. Our function is also set up so that we might add some other authentication methods, so it's designed to alert you if the account you are trying to log in with needs another way to sign in
```Javascript
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done ) => { 
	User.findOne({ email: email.toLowerCase() }, ( err, user ) => {
	if (err) { return done(err) }
	if (!user) {
		return donde(null, false, { msg: `Email ${email} not fouind.`})	
	}	
	if (!user.password) {
		return done(null, false, { msg: `Your account was registered using a 			
		sign-in provider. To enable password login, sign in using a provider, 
		and then set a password under your user profile.`})
	}	// 👆 Handles other forms of authentication
)
```
5. Finally we are comparing the passwords that the user is entering
```Javascript
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done ) => { 
	User.findOne({ email: email.toLowerCase() }, ( err, user ) => {
	if (err) { return done(err) }
	if (!user) {
		return donde(null, false, { msg: `Email ${email} not fouind.`})	
	}	
	if (!user.password) {
		return done(null, false, { msg: `Your account was registered using a 			
		sign-in provider. To enable password login, sign in using a provider, 
		and then set a password under your user profile.`})
	}	
	user.comparePassword(password, (err, isMatch) => {
		if (err) { return done(err) }
		if (isMatch) {
			return done(null, user)
		}
		return done(null, false, { msg: 'Invalid email or password' })
		}) // 👆 Compares passwords
	})
})
```

---

### How do  you set up a sign up page with `EJS`? 
We create a `form` with a route of `"/signup"` and a method of `POST` , an input with the name `userName` an input with the name `email` , an input with the name `password` and an input with the name of `confirmPassword`. 
```Javascript
<body>
	<% if ( locals.messages.errors) { %>
		<% messages.errors.forEach( el => { %> 
			<div class="alert alert-danger"><%= el.msg %></div>
		<% }) %>
	<% } %>
	// 👆 EJS
	<form action="/signup" method="POST">
		<input type="text" name="userName" placeholder="User Name">
		<input type="email" name="email" placeholder="Email">
		<input type="password" name="password" placeholder="Password">
		<input type="password" name="confirmPassword" placeholder="Confirm Password">
		<input type="submit">
	</form>
	// 👆 Sign up form
</body>
```


### What needs to happen in order for the browser to render an `EJS` file? 
A `GET` request needs to happen on the client side to a `route`. 

### Briefly provide an example of a route 'flow'? 
1. On the client side, the user clicked on the `login`, `signup` , to take them to the login/sign-up page => that is a `GET` request.
2. Our server, i.e. =>  `server.js` _hears_ the request, and goes to the route requested. In this case, the `login` and `signup` routes are on the `main.js` file in the `routes` folder. We bring them into our `server.js` by declaring a variable `mainRoutes` and assigning the path `/routes/main` to that variable.
	```Javascript
	const mainRoutes = require('./routes/main')
	```
	We 'use' our `mainRoutes` variable to direct our `server.js` to the `main.js` file in the `routes` folder where our routes are contained (e.g. `login`, `sign-up`). 
	```Javascript
	app.use('/', mainRoutes) 👈 calls the 'mainRoutes'
	```
3. Inside our `./routes/main` file, 
```Javascript
router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
// our server hears the GET request to the sign-up/login page
router.post('/signup', authController.postSignup)
```
4. The `router.get` of the `/sign-up`  route sends us to the `authController` 
🙄 An 'Authentication controller' is a controller that handles all of my authentication. 	
5. Once we get to the `authController` file, we're going to look for `getSignup`.
6. This `authController` has been previously required at the start of our `main` file as: 
```Javascript
const authController = require('../controllers/auth')
```
7. In the `controllers` folder we will find the `auth` file were we can find our `getSignup` method. 
```Javascript
exports.getSignup = (req, res) => {
	if (req.user) {
		return res.redirect('/todos')
	}
	res.render('signup', {
		title: 'Create Account'
	})
}
```
8. Our `getSignup` method does two things: 
	1. It checks if the `user` is already logged in.
	```Javascript
	exports.getSignup = (req, res) => {
	if (req.user) { // 👈 checks if the user is already logged in
		return res.redirect('/todos')// 👈 if you're already logged in, it inmmediately redirects you.
	}
	```
	2. If we're **not** already logged in however and we've made a request to the sign-up page, we **render** the sign up page. 
	```Javascript
	exports.getSignup = (req, res) => {
	if (req.user) {
		return res.redirect('/todos')
	}
	res.render('signup', { // 👈 render the 'signup' page
		title: 'Create Account'
	})
	}
	```
9. Finally, our sign-up page is rendered to the browser. 




