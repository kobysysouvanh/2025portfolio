
interface BadgeProps {
    children: React.ReactNode
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <div className="rounded-full border px-2 border-neutral-400 text-neutral-400 text-sm">
        {children}
    </div>
  )
}
export default Badge