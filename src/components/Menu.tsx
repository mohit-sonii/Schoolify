import Link from "next/link"
import Image from "next/image"

const menuItem = [
  {
    title: 'Menu',
    items: [
      {
        icon: '/home.svg',
        href: '/dashboard/home',
        label: 'Home',
      },
      {
        icon: '/finance.svg',
        href: '/dashboard/finance',
        label:'Finance'
      },
      {
        icon: '/expense.svg',
        href: '/dashboard/expense',
        label: 'Expense'
      },
      {
        icon: '/profit.svg',
        href: '/dashboard/profit',
        label: 'Profit'
      },
      {
        icon: '/student.svg',
        href: '/dashboard/students',
        label: 'Student',
      },
      {
        icon: '/teacher.svg',
        href: '/dashboard/teachers',
        label: 'Teacher',
      },
      // {
      //   icon: '/results.svg',
      //   href: '/result',
      //   label: 'Result',
      // },
      {
        icon: '/class.svg',
        href: '/dashboard/classes',
        label: 'Class',
      },
      {
        icon: '/subjects.svg',
        href: '/dashboard/subjects',
        label: 'Subjects',
      },
      // {
      //   icon: '/exam.svg',
      //   href: '/exams',
      //   label: 'Exam',
      // }
    ]
  }
]
export const Menu = () => {
  return (
    <>
      <div className="flex h-screen flex-col gap-4 p-2">
        {menuItem.map((i) => (
          <div key={i.title} className="flex flex-col gap-4 w-full  ">
            <span className="font-semibold text-gray-700 hidden lg:block">{i.title}</span>
            {i.items.map((item) => {
              return (
                <Link href={item.href} key={item.label} className="flex gap-2 items-center w-full">
                  <Image src={item.icon} alt="" width={14} height={14} className="w-max h-max " />
                  <span className="text-xs font-light text-gray-500 hidden lg:block hover:font-semibold transition-all ease-in-out hover:text-gray-700">{item.label}</span>
                </Link>
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}