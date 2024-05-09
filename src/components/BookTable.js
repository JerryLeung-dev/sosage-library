import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

export default function BookTable({ books, onBorrow, onReturn, onDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="books table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Book</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Availability</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow
              key={book.id}
            >
              <TableCell>{book.id}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.owner}</TableCell>
              <TableCell>{book.availability ? "Available" : "Unavailable"}</TableCell>
              <TableCell>
                <ButtonGroup variant="contained" aria-label="Basic button group">
                  <Button color="success" onClick={() => onBorrow(book.id)} disabled={!book.availability}>Borrow</Button>
                  <Button color="primary" onClick={() => onReturn(book.id)} disabled={book.availability}>Return</Button>
                </ButtonGroup>
                <IconButton aria-label="delete" sx={{marginLeft:'10px', color:'red'}} onClick={() => onDelete(book.id)}>
                  <ClearIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}