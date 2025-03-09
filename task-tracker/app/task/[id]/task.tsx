"use client";
import { ITask } from '@/type';
import Link from 'next/link';
import Image from 'next/image';
import complete from '@/public/check.png'
import  pending from '@/public/clock.jpg'


interface TaskDetailsProps {
  task: ITask;
}

const TaskDetails = ({ task }: TaskDetailsProps) => {
    const iconSrc = task.completed ? complete : pending;
      const handleCopy = async () => {
    await navigator.clipboard.writeText(task.title);
    alert('Task title copied to clipboard!');
  };
  return (
    
    <div className="min-h-screen p-6 bg-gray-100 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold">Task Details</h1>
       

        <div className="p-6 rounded-lg">
      <Image
        src={iconSrc}
        alt={task.completed ? 'Completed' : 'Pending'}
        width={64}
        height={64}
        className=""
      />
          <h1 className="text-3xl font-bold mb-4 text-gray-800 flex items-center justify-between">
            {task.title}
          </h1>
          <p className="text-lg mb-2 text-gray-700 flex items-center ">
            Status:   {task.completed ? (
                <span className='text-green-500'> comleted</span>
            ) : (
                <span className='text-yellow-500'> Pending</span>
            )}
          </p>
          <p className="text-gray-600 mt-1">Task ID: {task.id}</p>
          <p className="text-lg mb-4 text-gray-700">
            Priority: <span className={`font-medium ${{
              High: 'text-red-600',
              Medium: 'text-yellow-600',
              Low: 'text-green-600',
            }[task.priority]}`}>{task.priority}</span>
          </p>
        </div>
        <div className=''> 
            <Link href="/" className="flex items-center text-white hover:bg-white hover:text-blue-500 mb-6 border rounded w-29 px-1 py-1 bg-blue-500">
          Back to Tasks
        </Link>
        <button
          onClick={handleCopy}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          Copy Title
        </button>
            </div> 
       
      </div>
     
    </div>
  );
};

export default TaskDetails;