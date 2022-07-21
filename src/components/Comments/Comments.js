import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {commentContext} from "../../Contexts/CommentContext";
import {authContext} from "../../Contexts/AuthContext";

const Comments = () => {
    const {currentUser} = useContext(authContext)
    const navigate = useNavigate()
    const {getComments,comments,createComment,deleteComment} = useContext(commentContext)

    const [text,setText] = useState("")

    useEffect(() =>{
        getComments()
    },[])

    function handleSave() {
        let newComment = new FormData();
        newComment.append("text", text)
        createComment(newComment,navigate);
    }
    return (
        <div>
            <div>

                {comments.map(item => (
                    <div>{item.text}{item.product}</div>
                    )

                )}
            </div>
            <div>
                Add comment
            </div>
            <div>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="leave comment"
                    type="text"/>
                    <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default Comments;
