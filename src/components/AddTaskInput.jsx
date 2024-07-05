import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddTaskInput = () => {
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    // Logic to add task
    console.log("Task added:", taskName);
    setTaskName("");
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <Input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={addTask}>Add</Button>
    </div>
  );
};

export default AddTaskInput;