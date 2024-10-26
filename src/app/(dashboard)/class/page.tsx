import Create from "@/components/buttons/Create";
import ClassForm from "@/components/Forms/ClassForm";

const page = () => {
  
  return (
    <>
      <div className="bg-red-400">
        <Create innerText='Class'/>
        {/* <ClassForm type="create"/> */}
      </div>
    </>
  )
}

export default page;