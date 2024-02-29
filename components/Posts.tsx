// ./components/Posts.tsx

import { SanityDocument } from "next-sanity";
import Link from "next/link";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <h2 key={post._id}>
            <Link href={post.slug.current} className="block p-4">
              {post.title}
            </Link>
          </h2>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </main>
  );
}
