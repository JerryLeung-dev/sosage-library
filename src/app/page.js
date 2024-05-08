'use client'
import styles from "./page.module.css";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import BookTable from "@/components/BookTable";
import SosModal from "@/components/SosModal";
import { useState } from 'react';

import INITIAL_BOOKS from '../data/books.json';

export default function Home() {
  const [books, setBooks] = useState(INITIAL_BOOKS || []);
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
              <BookTable books={books}/>
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
