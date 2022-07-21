import React, {useContext, useState} from 'react';
import {productsContext} from "../../Contexts/ProductsContext";
import {useNavigate} from "react-router-dom";

const AddComment = () => {

    const navigate = useNavigate()

    const {createComment} = useContext(productsContext)

    const [text,setText] = useState("")

    function handleSave() {
        let newComment = new FormData();
        newComment.append("text", text)
        createComment(newComment,navigate)
    }

    return (
        <div>
            <div>
                Add comment
            </div>
            <div>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    type="text"/>
                    <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default AddComment;
