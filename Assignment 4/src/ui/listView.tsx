import { Link } from "react-router";
import { useDeleteBookMutation, useGetBooksQuery } from "../services/books";
import type { Book } from "../utils/Customtypes";
import ActionButtons from "./ActionButtons";

type Props = {};

function ListView({}: Props) {
  const { data, error, isLoading } = useGetBooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();
  const books = data?.data || [];
  
 async function actionDelete(id: any) {
    try {
      await deleteBook(id).unwrap();
      //TODO: sweet alert toast confirmation
      window.location.reload();
    } catch (error) {
      console.error("Delete failed:",error);
      //TODO: sweet alert toast confirmation
    }
  }
  return (
    <>
    <div className="flex justify-end m-5"><Link className="btn btn-secondary btn-outline rounded-full" to="/create-book">Create Book</Link></div>
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
                {books.map((book: Book, idx) => {
                  return (
                    <tr key={book._id}>
                      <th>{idx}</th>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.genre}</td>
                      <td>{book.isbn}</td>
                      <td>{book.copies}</td>
                      <td>
                        {book.available ? (
                          <div className="badge badge-soft badge-secondary">
                            Available
                          </div>
                        ) : (
                          <div className="badge badge-soft badge-primary">
                            Unavailable
                          </div>
                        )}
                      </td>
                      <td className="flex gap-2">
                        <Link className="btn btn-primary btn-outline rounded-full" to={"/edit-book/" + book._id}>Edit</Link>
                          
                        <ActionButtons
                          name="Borrow"
                          color="btn-success"
                        />
                        <ActionButtons
                          name="Delete"
                          color="btn-accent"
                          action={()=>actionDelete(book._id)}
                        />
                        
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </>
      ) : null}
    </div></>
  );
}

export default ListView;
