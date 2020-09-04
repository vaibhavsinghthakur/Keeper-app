import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [expanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault(); //Adding this to prevent default behaviour of button to refresh page
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded ? (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        ) : null}

        <textarea
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
          rows={expanded ? 3 : 1}
        />
        <Zoom in={expanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
