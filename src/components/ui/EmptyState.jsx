export default function EmptyState({ icon, title, subtitle }) {
  return (
    <div className="empty-center">
      <div className="empty-icon">{icon}</div>
      <div className="empty-title">{title}</div>
      {subtitle && <div className="empty-sub">{subtitle}</div>}
    </div>
  );
}
