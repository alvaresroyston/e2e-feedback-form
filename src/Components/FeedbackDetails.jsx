import React, { useEffect, useState } from "react";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function FeedbackDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://zany-gold-ladybug-hat.cyclic.app/feedbacks"
        );
        const fetchedData = await response.json();
        setData(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://zany-gold-ladybug-hat.cyclic.app/feedbacks/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // If deletion is successful, update the state to remove the deleted feedback
        setData(data.filter((item) => item._id !== id));
        console.log("Feedback deleted successfully");
      } else {
        console.error("Failed to delete feedback");
      }
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  return (
    <div>
      <h1 className="card-section">Feedbacks</h1>
      <div className="containers">
        <div className="row">
          <div className="d-flex flex-wrap">
            {data.map((item, i) => (
              <div className="col col-sm-6 col-md-4 col-lg-4 col-xl-3" key={i}>
                <ul id="lest-item" className="card p-3 m-2">
                  <h4 className="d-flex justify-content-between  align-items-center">
                    {item.name}
                    <span className="delete-button">
                      <IconButton
                        color="error"
                      >
                        <DeleteIcon onClick={() => handleDelete(item._id)} />
                      </IconButton>
                    </span>
                  </h4>
                  <hr className="m-0" />
                  <li>
                    <span className="icons">
                      <MarkEmailReadRoundedIcon />
                    </span>
                    <span className="p-2">{item.email}</span>
                  </li>
                  <li>
                    <span>
                      <PhoneCallbackRoundedIcon />
                    </span>
                    <span className="p-2">{item.phone}</span>
                  </li>
                  <hr className="m-0" />
                  <li>
                    <samp>
                      <Diversity3RoundedIcon />
                    </samp>
                    <span className="p-2">{item.message}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDetails;
