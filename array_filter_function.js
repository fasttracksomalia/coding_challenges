// using the array blow and filter function, print the books with "Title 3" on the console.log
// in both Arrow function version and non-arrow function version 
let posts = [
    { title: 'Title 1', author: 'Noel' },
    { title: 'Title 2', author: 'Noel' },
    { title: 'Title 3', author: 'Leon' },
    { title: 'Title 3', author: 'Leon' },
  ];

  
  // let allTheTitle3 = posts.filter(
  //   function (pst) {
  //     return pst.title == "Title 3"
  //   }
  // )


  let allTheTitle3 = posts.filter(
     pst =>  pst.title == "Title 3"
  )

  console.log(allTheTitle3)
 

