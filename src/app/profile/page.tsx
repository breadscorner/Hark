import * as fakeDB from '@/fake-db';
import Image from 'next/image';
import { getPostsForUser, getUser } from '@/fake-db';

export default function Profile() {

  const posts = getPostsForUser('Breadscorner');
  const user = getUser('Breadscorner');

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 w-[65%] mx-auto px-4 rounded-lg shadow-md">


        <div className="col-span-1">
          <h1 className="text-[2.5em] font-bold">{user?.username}</h1>
          <h2 className="text-[1em] font-semibold">{user?.firstName + ' ' + user?.lastName}</h2>
          <p className="pt-8 pb-4 text-[1em] font-semibold">{user?.followers} Followers</p>
        </div>
        <div className="col-span-1 flex justify-end items-start">
          <Image
            src={user?.avatar || "../placeholder.png"}
            alt="User Image"
            width={125}
            height={125}
            className="rounded-full border-slate-500 border-[1px] mt-4"
          />
        </div>
      </div>
      {/* Posts of breadscorner */}
      <div className="w-[65%] mx-auto my-4 rounded-lg shadow-md">
        {posts.map((post) => (
          <div className="w-full mx-auto my-4 p-4 border-b shadow-md rounded-lg" key={post.id}>
            <p>{post.content}</p>

            {/* Images */}
            {post.media?.url === 'image' && (
              <Image
                src={post.media?.url}
                alt="Post Image"
                width={post.media.width}
                height={post.media.height}
                className="mt-4 object-cover"
              />
            )}

            {/* Likes and Replies */}
            <div className='flex mt-4 text-left font-semibold'>
              <p>{post.likes} Likes</p>
              <p className='ml-4'>{post.replies} Replies</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





