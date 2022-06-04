import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editComment,
  deleteComment,
} from "Features/Comments/Commenter.actions";
const Comment = ({ comment, authorName, onDelete }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen(!isOpen);

  console.log(comment)

  return (
    <div className="box comment">
      <p>{comment.text}</p>
      <span>Muallif : {authorName}</span>

      {!isOpen ? (
        <>
          <button style={{ marginLeft: "10px" }} onClick={onToggle}>
            Tahrirlash
          </button>
          <button
            className="ml-10"
            onClick={() =>onDelete(comment.id)}
          >
           O'chirish
          </button>
        </>
      ) : (
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div>
            <button
              onClick={() => {
                dispatch(editComment({ ...comment, text: value }));
                setValue("");
                onToggle();
              }}
            >
              Saqlash
            </button>{" "}
            <button className="ml-10" onClick={onToggle}>
              Orqaga
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
