
const Create = ({ innerText }: { innerText: string }) => {
  return (
    <>
      <button className="h-max px-4 py-2 bg-sky font-medium text-xs rounded-md ">
        {`Create ${innerText}`}
      </button>
    </>
  )
}

export default Create;