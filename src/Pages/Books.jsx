import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import get from "lodash.get";
import { selectTotalBooks } from "../Features/Books/Books.slice";
import { fetchBooksList } from "../Features/Books/Books.slice";
import { deleteComment } from "../Features/Books/Books.slice";
import Comment from "../Components/Molecules/Comment";

const Books = () => {
  const dispatch = useDispatch();
  const booksTotalCount = useSelector(selectTotalBooks);
  const { entities: books } = useSelector((state) => state.books);
  const { entities: users } = useSelector((state) => state.users);
  const { entities: comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchBooksList());
  }, []);

  const onDeleteComment = useCallback(
    (book, id) => {
      let newBook = {
        ...book,
        comments: book.comments.filter((commentId) => commentId !== id),
      };

      dispatch(deleteComment({ book: newBook, commentId: id }));
    },
    [books]
  );

  return (
    <div className="container">
      <h1>
        Total: <>{booksTotalCount}</>
      </h1>
      {Object.values(books).map((book, i) => (
        <div>
          <article className="box">
            <h3>
              {i + 1}.{book.title}
            </h3>

            <p>
              <b>Qisqacha ta'rif:</b> {book.description}
            </p>

            <p>
              <b>Muallif:</b> {users[book.author].name}
            </p>
          </article>

          <div className="comments__list">
            {book.comments.map((commentId) => {
              let comment = get(comments, `${commentId}`, { id: 3 });

              return (
                <Comment
                  authorName={users[comment.commenter].name}
                  comment={comment}
                  onDelete={(id) => onDeleteComment(book, id)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
