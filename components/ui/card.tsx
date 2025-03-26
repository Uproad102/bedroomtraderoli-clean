export function Card({ children, className }: any) {
  return <div className={`rounded-xl p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: any) {
  return <div className={className}>{children}</div>;
}
