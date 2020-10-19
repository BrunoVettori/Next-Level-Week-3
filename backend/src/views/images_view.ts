import Images from '../models/Image'

export default {
    render(image: Images){
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`
        } 
    },

    renderMany(images: Images[]){
        return images.map(images => this.render(images))
    }
}