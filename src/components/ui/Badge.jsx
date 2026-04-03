export default function Badge({ children, variant = 'default' }) {
  const cls = {
    default: 'badge',
    accent:  'badge badge-accent',
    green:   'badge badge-green',
  }[variant] ?? 'badge';

  return <span className={cls}>{children}</span>;
}
