const { addBookHandler, getAllBooksHandler, GetIdBooksHandler, updateBooksHandler, deleteBooksHandler } = require('./handler')

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: GetIdBooksHandler
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBooksHandler
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooksHandler
    },
    
];

module.exports = routes;