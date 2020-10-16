import Express from 'express'

const app = Express()

app.get('/users', (request, response) => {
    return response.json({message: 'Hello World'})
})

app.listen(3333)