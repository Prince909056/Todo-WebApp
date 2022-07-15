import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const colors = [
    {
      primaryColor: "#5d93e1",
      secondaryColor: "#ecf3fc",
    },
    {
      primaryColor: "#f9d288",
      secondaryColor: "#fefaf1",
    },
    {
      primaryColor: "#5dc250",
      secondaryColor: "#f2faf1",
    },
    {
      primaryColor: "#f48687",
      secondaryColor: "#fdf1f1",
    },
    {
      primaryColor: "#b964f7",
      secondaryColor: "#f3f0fd",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index)
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div class="card-wrapper mr-5">
      <div
        class="card-top"
        style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            "background-color": colors[index % 5].secondaryColor,
            "border-radius": "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit mr-3"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={() => setModal(true)}
          ></i>
          <i
            class="far fa-trash-alt "
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
    </div>
  );
};

export default Card;
