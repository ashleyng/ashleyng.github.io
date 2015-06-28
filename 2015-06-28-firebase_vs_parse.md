---
layout: post
title: Firebase vs. Parse
category: notable
---

In my last post, I said I was working on a simple Firebase app, well I turned that into a comparison app between Firebase and Parse, to see which was easier to work with. The app is just a simple tableview to view the entries, form to add and edit entries, and then a details view to view all the details of a selected entry (the apps also allow you to upload images). So here's a brief overview of what I thought about each database.

###Firebase
* Pros
    1. Really easy to use
    2. Fast on database calls
    3. Will automatically update everywhere when something is added or altered.
    4. Uses standard data types (NSArray, NSDictionary, etc)
* Cons
    1. Poor image support. I have to encode images myself.
    2. No tables, just a JSON file of all your data (i.e. can't have anything too complicated for your database)

###Parse
* Pros
    1. A lot of documentation and examples
    2. Has better image support
    3. A lot of options to make things asynchronous
* Cons
    1. Doesn't use standard data types (PFObjects and PFQuerys)
    2. A lot of options to make things asynchronous (it's both a pro and a con). I felt like this made my app kind of complicated to code with how I was making calls to the database.

###Free Account Plan
You obviously get a better deal on storage with Parse.
|          | Database Storage | File Storage | Database Transfer | File Transfer |
|----------|------------------|--------------|-------------------|---------------|
| Firebase | 100 MB           | 1 GB         | 5 GB              | 100 GB        |
| Parse    | 20 GB            | 20 GB        |                   | 2 TB          |

###Overall
For simple apps, I think Firebase is the way to go. But if you need to have users or a more complicated database then you should use Parse.
