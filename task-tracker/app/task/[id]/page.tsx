'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { ITask } from '@/type';
import NotFound from '@/app/not-found';
import TaskDetails from './task';

const TaskDetailPage = ()=> {
  const { id } = useParams();
  const [task, setTask] = useState<ITask | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTask() {
        try{
         const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
         if (!res.ok) {
         notFound();
         return;
      }
      const data: ITask = await res.json();
      data.priority = ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)];
      if (!data.id) notFound();
      setTask(data);   
        } catch(error) {
          console.error('Failed to fetch task:', error);
        } finally {
          setLoading(false);
        }
      
      
    }

    fetchTask();
  }, [id]);

  if (loading) return <p className="p-8 text-center">Loading...</p>;


if (!task) return <NotFound/>;

return <TaskDetails task={task} />;
}

export default TaskDetailPage;
