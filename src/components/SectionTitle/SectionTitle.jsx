export default function SectionTitle({ title, color }) {
   return (
      <div className="title-container py-10 flex items-center flex-col">
         <div className="w-72 h-px bg-white"></div>
         <div className={`my-3 uppercase text-${color} text-4xl`}>{title}</div>
         <div className="w-72 h-px bg-white"></div>
      </div>
   );
}
