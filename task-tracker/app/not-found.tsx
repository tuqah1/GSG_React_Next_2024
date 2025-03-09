import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Task Not Found</h1>
      <p>The task you're looking for doesn't exist.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Back to Tasks
      </Link>
    </div>
  );

  
}
