import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    
    interface ValidationErrors{
        [key: string]: string[]
    }

    if (error instanceof ValidationError){
        let errors: ValidationErrors = {}

        error.inner.forEach(err => {
            errors[err.path] = err.errors
        })

        return response.status(400).json({ message: 'Valitation failed', errors})

    }

    console.log(error)

    return response.status(500).json({ message: 'Internal server error'} )

}

export default errorHandler 