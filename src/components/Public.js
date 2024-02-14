import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public" style={{ margin: '50px'}}>
            <header>
                <h1>Welcome to react-dnd-image-sorter</h1>
            </header>
            <main className="public__main">
                <p>This is a react project to experiment with drag-and-drop functionality for an image sorter. The project is primarily here to support the development of a sub-component for a larger project I am working on at the moment. This sub-component will allow for a user to sort images with a "drag-and-drop" functionality and pressing save will output the updated image order struture to the console.</p>
                <Link to="/image-sorter">Go to image sorter</Link>
            </main>
        </section>
    )
    return content
}
export default Public