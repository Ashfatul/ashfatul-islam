export default function SingleSkill({ skill }) {
   return (
      <div>
         <div className="skill-item flex gap-5 items-center bg-gray-800 p-5 rounded-lg shadow-xl">
            <div className="skill-img">
               <img
                  src={skill.image}
                  alt={skill.skillName}
                  className="h-12 w-12 object-cover object-center"
               />
            </div>
            <div className="skill-details flex-grow">
               <div className="name text-xl mb-3">
                  {skill.skillName} - ({skill.skillParentage}%)
               </div>
               <div className="flex">
                  <progress
                     className="progress progress-success w-full h-3 bg-black"
                     value={skill.skillParentage}
                     max="100"
                  ></progress>
               </div>
            </div>
         </div>
      </div>
   );
}
