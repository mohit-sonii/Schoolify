import Link from "next/link"
import Image from "next/image"

const menuItem = [
  {
    title: 'Menu',
    items: [
      {
        icon: '/home.svg',
        href: '/admin',
        label: 'Home',
      },
      {
        icon: '/finance.svg',
        href: '/finance',
        label:'Finance'
      },
      {
        icon: '/expense.svg',
        href: '/expense',
        label: 'Expense'
      },
      {
        icon: '/profit.svg',
        href: '/profit',
        label: 'Profit'
      },
      {
        icon: '/student.svg',
        href: '/students',
        label: 'Student',
      },
      {
        icon: '/teacher.svg',
        href: '/teacher',
        label: 'Teacher',
      },
      {
        icon: '/attendance.svg',
        href: '/attendance',
        label: 'Attendance',
      },
      {
        icon: '/results.svg',
        href: '/result',
        label: 'Result',
      },
      {
        icon: '/class.svg',
        href: '/class',
        label: 'Class',
      },
      {
        icon: '/exam.svg',
        href: '/exams',
        label: 'Exam',
      },
      {
        icon: '/subject.svg',
        href: '/subjects',
        label: 'Subjects',
      },
    ]
  },
  {
    title: 'Others',
    items: [
      {
        icon: '/settings.svg',
        href: '/account/setting',
        label: 'Setting',
      },
      {
        icon: '/logout.svg',
        href: '/logout',
        label: 'Logout',
      },
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