const BlogDetails = ({ params }) => {
  return (
    <main className="blog-details">
      <h1>Blog details: {params.slug}</h1>
    </main>
  );
};

export default BlogDetails;
