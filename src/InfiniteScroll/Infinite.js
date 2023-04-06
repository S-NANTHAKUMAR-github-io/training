import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState, useEffect } from 'react';

function Infinite() {
    const [images, setImage] = useState([])
    const [page, setPage] = useState([]);
    // const perPage = 20; 

    useEffect(() => {

        fetchImages()

    }, [page])

    const fetchImages = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
            const data = await response.json();
            setImage(prevImages => [...prevImages, ...data]);
        } catch (error) {
            console.error(error);
        }
    };




    return (
        <div>
            <InfiniteScroll
                dataLength={images.length}
                next={() => setPage(page + 1)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >

                <div className="image-grid">
                    {images.map(image => (
                        <div key={image.id}>
                            <img src={image.url} alt={image.alt_description} width='300' height='250' />
                        </div>
                    ))}
                </div>

            </InfiniteScroll>
        </div>
    )
}

export default Infinite