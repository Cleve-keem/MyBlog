export default function SearchBar() {
  return (
    <div className="w-1/2 flex border border-grey-400 rounded">
      <input type="text" className="w-full py-2 px-3 text-[18px] outline-none" />
      <span className="px-4 py-2 border-l">S</span>
    </div>
  );
}
