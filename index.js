const express = require("express")
const app = express()
const port = 5000

const authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK",
    books: ["Beowulf"]
  },
  {
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
  },
  {
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"]
  },
  {
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
  }
]

app.get('/', (req, res) => {
  res.send('Authors API')
})

app.get('/authors/:id', (req, res) => {
  const { id } = req.params
  const author = authors[id - 1]

  if (author) {
    res.send(`${author.name}, ${author.nationality}`)
  } else {
    res.status(404).send("Not found")
  }
})

app.get('/authors/:id/books', (req, res) => {
  const { id } = req.params
  const author = authors[id - 1]

  if (author) {
    res.send(`${author.books.join(', ')}`)
  } else {
    res.status(404).send("Not found")
  }
})

app.get('/json/authors/:id', (req, res) => {
  const { id } = req.params
  const author = authors[id - 1]
  
  if (author) {
    res.json({
      name: author.name,
      nationality: author.nationality
    })
  } else {
    res.status(404).send("Not found")
  }
})

app.get('/json/authors/:id/books', (req, res) => {
  const { id } = req.params
  const author = authors[id - 1]

  if (author) {
    res.json({
      books: author.books
    })
  } else {
    res.status(404).send("Not found")
  }
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
