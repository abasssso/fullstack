import React, {useReducer, useState} from "react";
import axios from "axios";

export const commentContext = React.createContext();

const INIT_STATE = {
    comments: [],
    oneComment:null,
}

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_COMMENTS":
            return {
                ...state,
                comments: action.payload.results,
            };
        case "GET_ONE_COMMENT":
            return {...state, oneComment: action.payload};
        default:
            return state;
    }
}

const API = "http://18.197.23.213"

const CommentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function getComments() {
        try {
            const tokens = JSON.parse(localStorage.getItem("tokens"));
            const Authorization = `Bearer ${tokens.access}`;
            const config = {
                header: {
                    Authorization,
                },
            };
            const res = await axios(`${API}/comment/${window.location.search}`, config);
            dispatch({
                type: "GET_COMMENTS",
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    }

    async function createComment(newComment, navigate) {
        try {
            const tokens = JSON.parse(localStorage.getItem("tokens"));
            const Authorization = `Bearer ${tokens.access}`;
            const config = {
                headers: {
                    Authorization,
                },
            };
            const res = await axios.post(`${API}/comment/`, newComment, config);
            navigate("/comments")
            getComments();
        } catch (err) {
            console.log(err)
        }
    }

    async function deleteComment(id) {
        try {
            const tokens = JSON.parse(localStorage.getItem("tokens"));
            //config
            const Authorization = `Bearer ${tokens.access}`;
            const config = {
                headers: {
                    Authorization,
                },
            };
            await axios.delete(`${API}/comment/${id}/`, config);
            getComments();
        } catch (err) {
            console.log(err);
        }
    }

    async function getOneComment(id) {
        try {
            const tokens = JSON.parse(localStorage.getItem("tokens"));
            const Authorization = `Bearer ${tokens.access}`;
            const config = {
                header: {
                    Authorization,
                },
            };
            const res = await axios(`${API}/comment/${id}`, config);
            dispatch({
                type: "GET_ONE_COMMENT",
                payload:res.data,
            })
        }catch (err){
            console.log(err)
        }
    }

    async function updateComment(id,editedComment,navigate) {
        try{
            const tokens = JSON.parse(localStorage.getItem("tokens"));
            const Authorization = `Bearer ${tokens.access}`;
            const config = {
                headers:{
                    Authorization,
                },
            };
            const res = await axios.patch(`${API}/comment/${id}`,editedComment,config);
            navigate('/comments');
            getComments();
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <commentContext.Provider
        value={{
            comments:state.comments,
            oneComment:state.oneComment,
            getComments,
            deleteComment,
            updateComment,
            getOneComment,
            createComment,
        }}>
            {children}
        </commentContext.Provider>
    )
}

export default CommentContextProvider;
