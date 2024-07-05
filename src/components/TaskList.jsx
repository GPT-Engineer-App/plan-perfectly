import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sample Task 1", completed: false },
    { id: 2, name: "Sample Task 2", completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between p-2 border rounded">
          <div className="flex items-center space-x-2">
            <Checkbox checked={task.completed} onCheckedChange={() => toggleTaskCompletion(task.id)} />
            <span className={task.completed ? "line-through" : ""}>{task.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">Edit</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Task</DialogTitle>
                </DialogHeader>
                {/* Add form for editing task details here */}
              </DialogContent>
            </Dialog>
            <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;