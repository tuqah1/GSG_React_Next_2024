import TaskItem from '@/components/Task-Item/TaskItem';
import { ITask } from '@/type';

async function getTasks() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
}

export default async function HomePage() {
  const tasks = await getTasks();

  return (
    <main className="p-12 max-w-7xl mx-auto bg-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-18 text-gray-800 mt-10">
        Task Tracker
      </h1>
      

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasks.map((task: ITask) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </main>
   
  );
}
