export default function SectionTitle({ title }) {
   return (
      <div className="title-container py-10 flex items-center text-center flex-col">
         <div className={`w-72 h-px bg-gray-500`}></div>
         <div className={`my-3 uppercase text-gray-300 text-4xl`}>{title}</div>
         <div className={`w-72 h-px bg-gray-500`}></div>
      </div>
   );
}
