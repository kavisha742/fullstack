import React from "react";
import Home from "../Assets/home.png";
import Click from "../Assets/click.png";
import Document from "../Assets/document.png";
import Award from "../Assets/award.png";
import Customer from "../Assets/customer.png";
import Settings from "../Assets/settings.png";

const Work = () => {
  const workInfoData = [
    {
      image:Home,
      title: "Install the Project Management Software",
      text: "Download and install the software on your computer or access it through a web browser.",
    },
    {
      image: Click,
      title: "Create a New Project",
      text: "Open the software and start a new project and Define the project's name, start date, end date, and any other relevant details.",
    },
    {
      image: Document,
      title: "Define Tasks and Subtasks",
      text: "Break down the project into tasks and subtask and Assign specific responsibilities to team members for each task,Set deadlines for tasks to keep the project on schedule",
    },
    {
      image: Award,
      title: "Set Your Milestones and Goals",
      text: "Identify key milestones that mark significant progress points in the project and Set goals and objectives for each milestone to ensure alignment with the project's overall purpose.",
    },
    {
      image: Customer,
      title: "Collaborate and Communicate",
      text: "Use the software's collaboration features to communicate with team members,Share files, updates, and relevant information within the platform and Utilize commenting and messaging functions to maintain clear communication.",
    },
    {
      image: Settings,
      title: "Monitor Progress and Make Adjustments",
      text: "Regularly review the project dashboard or timeline to track progress,Identify any delays or issues and make necessary adjustments to the timeline or task assignments and Use reporting and analytics features to gain insights into project performance.",
    },

  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works?</h1>
        <p className="primary-text">
         there are six step by step you can follow to use our software.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;