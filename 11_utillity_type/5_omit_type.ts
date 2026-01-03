/**
 * Omit Type
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

// 해당 타입이나 인터페이스에서 원하지 않는 키값을 넣어주면 된다
function createPost(post: Omit<Post, "createdAt">): Post {
  return { ...post, createdAt: new Date() };
}

createPost({
  title: "요즘 개발자",
  content: "나아아아",
  // createdAt: new Date(),
});
