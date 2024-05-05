import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

export default function NotePage () {

    const [oneNote, setOneNote] = useState({});

    const { id } = useParams();

    function getOneNote () {
        setOneNote(id)
    }

    return(
        <h1>lol</h1>
    )
}