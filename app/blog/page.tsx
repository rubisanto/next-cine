type Article = {
  id: number;
  title: string;
  content: string;
};

export default async function Blog() {
  // articles du blog
  const res = await fetch("http://localhost:4000/blog");
  const blog: Article[] = await res.json();
  return (
    <div>
      <p>page blog </p>
      <ul>
        {blog.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
