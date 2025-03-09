'use client';

import Image from 'next/image';
import Link from 'next/link';
import complete from '@/public/check.png'
import  pending from '@/public/clock.jpg'
import { ITask } from '@/type';

export default function TaskItem({ task }: { task: ITask }) {
  const iconSrc = task.completed ? complete : pending;

  return (
    <li className="w-full flex flex-col items-start p-6 border rounded-xl shadow-md hover:shadow-xl transition bg-white">
      <div className="flex items-center space-x-4">
        <Image
          src={iconSrc}
          alt={task.completed ? 'Completed' : 'Pending'}
          width={30}
          height={30}
        />
        <div>
          <p className="text-lg font-semibold text-gray-700">{task.title}</p>
          <p className={`text-sm ${task.completed ? 'text-green-500' : 'text-yellow-500'}`}>
            {task.completed ? 'Completed' : 'Pending'}
          </p>
        </div>
        <span
        className={`ml-auto font-semibold ${
          task.priority === "High"
            ? "text-red-500"
            : task.priority === "Medium"
            ? "text-yellow-500"
            : "text-green-500"
        }`}
      >
        {task.priority}
      </span>
      </div>
      <Link
        href={`/task/${task.id}` }
        className="text-blue-600 hover:underline text-sm mt-2"
      >
        View Details
      </Link>
    </li>
  );
}
