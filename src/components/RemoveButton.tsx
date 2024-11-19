import Image from 'next/image'

const RemoveButton = ({ innerText }: { innerText: string }) => {
  return (
    <button className='px-4 py-2 border-none shadow-lg outline-none text-xs font-medium text-gray-700 rounded-lg bg-red-300 transition-all ease-in-out hover:text-black flex gap-2 flex-row items-center justify-center w-max'>
      <Image src="/remove.svg" alt="" width={15} height={15} />
      <span>{innerText}</span>
    </button>
  )
}
export default RemoveButton