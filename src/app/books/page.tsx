import React from 'react'

export default async function Books() {
    const data = await getBooks();
    console.log(data);
  return (
    <ul>{data.map((item:any) => (<li>{item.name}</li>))}</ul>
  )
}


async function getBooks() {
    const res = await fetch('https://simple-books-api.glitch.me/books');
    if(!res.ok) {
        throw new Error("error in fetching data");
    }
    return res.json();
}

