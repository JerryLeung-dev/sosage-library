'use client'
import styles from "./page.module.css";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import BookTable from "@/components/BookTable";
import SosModal from "@/components/SosModal";
import { useState } from 'react';

import INITIAL_BOOKS from '../data/books.json';
//search bar
//pagination
//Table 
// modal 
export default function Home() {
  const [books, setBooks] = useState(INITIAL_BOOKS || []);

  function handleBorrow(id) {
    const updatedBooks = books.map(book => {
      if(book.id === id){
        if(book.availability) {
          return {...book, availability: 0}
        } else {
          alert("The book is currently not avaialble");
        }
      }
      return book;
    })
    setBooks(updatedBooks);
  }

  function handleReturn(id) {
    const updatedBooks = books.map(book => {
      if(book.id === id){
        if(!book.availability) {
          return {...book, availability: 1}
        } else {
          alert("The book has been returned");
        }
      }
      return book;
    })
    setBooks(updatedBooks);
  }

  function handleDelete(id) {
    const isConfirmed = confirm("Do you want to delete the book?");
    if(isConfirmed) {
      const updatedBooks = books.filter(book => book.id !== id);
      setBooks(updatedBooks);
    } 
  }
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.headerBrand}>Sosage Library</h1>
          <div className={styles.flexContainer}>
            <div className={styles.left}>
              <SearchBar/>
            </div>
            <div className={styles.right}>
              <Pagination/>
            </div>
          </div>
          <div className={styles.table}>
            {books && books.length > 0 ? (
              <BookTable books={books} onBorrow={handleBorrow} onReturn={handleReturn} onDelete={handleDelete}/>
            ) : (
              <div>No books available</div>
            )}
          </div>
          <div className={styles.addModal}>
            <SosModal />
          </div>
        </div>
      </main>
    </>
  );
}
