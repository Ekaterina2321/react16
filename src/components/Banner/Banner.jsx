import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark" className='carusel'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://hoff.ru/upload/hoff_resize/upload/medialibrary/a7f/f0gprvsspw4wkp8jtoivzohzbw87tl0b.jpg/1516x512_85.webp?text=First slide&bg=f5f5f5"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://hoff.ru/upload/hoff_resize/upload/medialibrary/72e/cyqwhos2xm5u5cirx7n4e19255keaf63.jpg/1516x512_85.webp?text=Second slide&bg=eee"
                    alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://hoff.ru/upload/hoff_resize/upload/medialibrary/545/rt293tawcdpqauwji6p1xf4a1xj9fdht.jpg/1516x512_85.webp?text=Third slide&bg=e5e5e5"
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;