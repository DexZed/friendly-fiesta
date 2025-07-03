import { useGetBooksQuery } from "../services/books";
import type { Books } from "../utils/Customtypes";

type Props = {};

function ListView({}: Props) {
  const { data, error, isLoading } = useGetBooksQuery(undefined);
  const books = data?.data || [];
 console.log("data: ", books);
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Genre</th>
                  <th>ISBN</th>
                  <th>Copies</th>
                  <th>Availability</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book: Books, idx) => {
                  return (
                    <tr key={book._id}>
                      <th>{idx}</th>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.genre}</td>
                      <td>{book.isbn}</td>
                      <td>{book.copies}</td>
                      <td>{book.available ? <div className="badge badge-soft badge-primary">Available</div> : <div className="badge badge-soft badge-secondary">Unavailable</div>}</td>
                      <td>Action : Something needs to added here</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ListView;
