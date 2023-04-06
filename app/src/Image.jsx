import React, { useEffect, useState } from 'react';
import items from './Data.json';
import ReactPaginate from 'react-paginate';

function Image() {
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length
        setItemOffset(newOffset);
    };

    return (  
        <>
        <div className='images'>
            {currentItems.map((item, index) => {
                return(
                    <div key={index} className="image">
                        <img src={item.url} alt="pic"/>
                    </div> 
                )
                
            })}
        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={ handlePageClick }
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"

        />
        </>
    );
}

export default Image;