export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="40" fill="#121212" />
      <path d="M60 60V140M140 60V140M60 100H140" stroke="#007FFF" strokeWidth="20" strokeLinecap="round" />
      <circle cx="100" cy="100" r="15" fill="#FFD700" />
      <path d="M100 40V70M100 130V160M40 100H70M130 100H160" stroke="#FFD700" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}