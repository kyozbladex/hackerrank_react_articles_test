import React, {useState, forwardRef, useImperativeHandle} from 'react';

const Articles = forwardRef(({articles}, ref) => {


    useImperativeHandle(
        ref,
        () => (
            {orderUpvotes, orderDate}
         ),
     )

    const arrayArticles = articles;

    const [listData, setListData] = useState(arrayArticles);
    const [state, setstate] = useState(true);
    
    function orderUpvotes() {
       if (state) {
           setListData([...listData].sort((a, b) => b.upvotes - a.upvotes ));
       } else { 
       setListData([...listData].sort((a, b) => a.upvotes - b.upvotes ));
        }
        setstate(!state);                                            
    }

    function orderDate() {
        if (state) {
        setListData([...listData].sort((a, b) => new Date(b.date) - new Date(a.date)));
        } else { 
            setListData([...listData].sort((a, b) => new Date(a.date) - new Date(b.date)));
        }
        setstate(!state); 
    }

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
               
                {listData.map((array, index) => 
                <tr data-testid="article" key={"article-index", index}>
                    <td data-testid="article-title">{array.title}</td>
                    <td data-testid="article-upvotes">{array.upvotes}</td>
                    <td data-testid="article-date">{array.date}</td>
                </tr>
                )}


                </tbody>
            </table>
        </div>
    );

})

export default Articles;
