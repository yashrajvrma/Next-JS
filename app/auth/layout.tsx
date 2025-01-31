export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-4 border-b text-center bg-red-600 text-neutral-100">
        20% off on first 100 customers
      </div>
      {children}
    </div>
  );
}
