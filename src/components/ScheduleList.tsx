import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const ScheduleList = () => {
  const schedules = [
    {
      id: "1",
      title: "Meeting",
      description: "Discuss project updates",
      subject: "Project A",
      frequency: "Weekly",
      repeat: ["Monday", "Wednesday", "Friday"],
      time: "10:00 AM",
    },
    {
      id: "2",
      title: "Training",
      description: "Training session for team members",
      subject: "Training Program",
      frequency: "Monthly",
      repeat: "firstMonday",
      time: "02:30 PM",
    },
    {
      id: "3",
      title: "Daily Report",
      description: "Submit daily progress report",
      subject: "Project B",
      frequency: "Daily",
      time: "04:00 PM",
    },
  ];

  return (
    <div>
      <table className="w-full border">
        <thead>
          <tr className=" bg-purple-200">
            <td className="text-start font-medium p-2">Title</td>
            <td className="text-start font-medium p-2">Description</td>
            <td className="text-start font-medium p-2">Subject</td>
            <td className="text-start font-medium p-2">Schedule</td>
            <td className="text-start font-medium p-2">Action</td>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td className="border-b p-2">{schedule.title}</td>
              <td className="border-b p-2">{schedule.description}</td>
              <td className="border-b p-2">{schedule.subject}</td>
              <td className="border-b p-2">{schedule.time}</td>
              <td className="border-b p-2 flex gap-2">
                {/* Add action buttons here */}
                <span className="">
                  <EditIcon />
                </span>
                <span
                  className=""
                  // onClick={() => handleDelete(schedule.id)}
                >
                  <DeleteOutlineIcon />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleList;
