import TextField from '@mui/material/TextField';
import styles from "./component.module.css"

export default function SearchBar() {
    return (
        <TextField id="standard-basic" label="Search a book" variant="standard" className={styles.searchBar} />
    )
}