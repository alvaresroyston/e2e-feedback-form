import React, { useEffect, useState } from "react";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
const data = [
  {
    name: "janmenjaya",
    email: "janmnejay@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "sunil",
    email: "sunil@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "shafi",
    email: "shafi@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "roy",
    email: "roy@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "adi",
    email: "adi@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "manav",
    email: "manav@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "boman",
    email: "boman@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "kabir",
    email: "kabir@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "w",
    email: "w@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "w",
    email: "w@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "w",
    email: "w@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "w",
    email: "w@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
  {
    name: "w",
    email: "w@gamail.com",
    contact: "7377617717",
    comment: "khjgkhfs hagkjghkj fkjadsghkja kngdkhadskgh kfhka",
  },
];

function FeedbackDetails() {

  // const [data, setData] = useState([]);

  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //     const newData = await fetch("https://02d9-119-82-111-214.ngrok-free.app/feedbacks");
  //     const parsedData = await newData.json();
  //     console.log("Working", parsedData);
  //   }
  //   fetchData();
  // },[])

  

  return (
    <div>
      <h1 className="card-section">Feedback details</h1>
      <div className="containers">
        <div className="row">
          <div className="d-flex flex-wrap">
            {data.map((item, i) => (
              <div className="col col-sm-6 col-md-4 col-lg-4 col-xl-3" key={i}>
                <ul id="lest-item" className="card p-3 m-2">
                  <h4 className="d-flex justify-content-between  align-items-center">
                    {item.name}
                    <span className="delete-button">
                      <IconButton color="error">
                        <DeleteIcon />
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
                    <span className="p-2">{item.contact}</span>
                  </li>
                  <hr className="m-0" />
                  <li>
                    <samp>
                      <Diversity3RoundedIcon />
                    </samp>
                    <span className="p-2">{item.comment}</span>
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