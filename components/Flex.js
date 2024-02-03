export default function Flex({ children, className }) {
  return <div className={`flex ${className}`}>{children}</div>;
}
