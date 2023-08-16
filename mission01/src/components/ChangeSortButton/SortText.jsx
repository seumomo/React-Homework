import {} from '/src/style/SortText.css';

function SortText({ method }) {
  return (
    <div className="sortText">{method === 'new' ? '최신순' : '조회순'}</div>
  );
}

export default SortText;
