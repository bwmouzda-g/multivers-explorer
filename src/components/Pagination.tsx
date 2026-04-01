// src/components/Pagination.tsx
type Props = {
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  loading: boolean;
};

function Pagination({ onPrev, onNext, hasPrev, hasNext, loading }: Props) {
  return (
    <div className="pagination">
      <button onClick={onPrev} disabled={!hasPrev || loading}>← Précédent</button>
      <button onClick={onNext} disabled={!hasNext || loading}>Suivant →</button>
    </div>
  );
}

export default Pagination;
