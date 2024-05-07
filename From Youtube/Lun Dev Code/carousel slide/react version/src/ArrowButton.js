export default function ArrowButton() {
  return (
    <div className="arrow-btn-wrapper">
      <button className="btn-left" data-btn-value="prev">
        {"<"}
      </button>
      <button
        className="btn-right"
        data-btn-value="next"
        onClick={test("next")}
      >
        {">"}
      </button>
    </div>
  );
}
