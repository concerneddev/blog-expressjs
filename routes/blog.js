const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')
const router = express.Router()

// referencing the templates
router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '../views/index.html'))
    res.render('home') //using handlebars
})

// routing the ../data/blogs object
router.get('/blog', (req, res) => {
    /*
    blogs.forEach(e => {
        console.log(e.title)
    })
    */
    //res.sendFile(path.join(__dirname, '../views/blog.html'))
    res.render('blogHome', {
        blogs: blogs
    })
})

// geting the blog post
router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    })
    //res.sendFile(path.join(__dirname, '../templates/blogpage.html'))
})


// responding with parameters
/*
router.get('/:name', (req, res) => {
    res.send(`<h1>Hello ${req.params.name}! <\h1>`)
})
*/

// this makes these routes usable
module.exports = router