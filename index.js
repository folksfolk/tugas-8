var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

function buku() {
    readBooks(10000, books[0], function(x) {
        readBooks(x, books[1], function(x) {
            readBooks(x, books[2], function(x) {
                readBooks(x, books[3], function(x) {

                })
            })
        })    
    }) 
}

//let i = 1
//let a = 0

//function buku(book){
  //  readBooks(10000, book, function(x) {
    //    if(a < 3) {
      //      buku(books[0 + i])
        //    i = i + 1
          //  a = a + 1
        //}
    //})
//}

// buku(books[0])