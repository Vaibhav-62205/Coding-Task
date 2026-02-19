export default function Pagination({ page, setPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        className="navBtn"
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
      >
         Previous
      </button>

      <div className="pageNumbers">
        {pages.map((p) => (
          <button
            key={p}
            className={`pageBtn ${page === p ? "active" : ""}`}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        className="navBtn"
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        Next 
      </button>
    </div>
  );
}
