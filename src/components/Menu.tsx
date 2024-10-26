import Link from "next/link"
import Image from "next/image"

const menuItem = [
  {
    title: 'Menu',
    items: [
      {
        icon: '/home.png',
        href: '/',
        label: 'Home',
        visible: ['student', 'teacher', 'admin']
      },
      {
        icon: '/student.png',
        href: '/list/students',
        label: 'Student',
        visible: ['teacher', 'admin']
      },
      {
        icon: '/teacher.png',
        href: '/list/teacher',
        label: 'Teacher',
        visible: ['teacher', 'admin']
      },
      {
        icon: '/attendance.png',
        href: '/list/attendance',
        label: 'Attendance',
        visible: ['student', 'teacher', 'admin']
      },
      {
        icon: '/result.png',
        href: '/list/result',
        label: 'Result',
        visible: ['student', 'teacher', 'admin']
      },
      {
        icon: '/class.png',
        href: '/list/class',
        label: 'Class',
        visible: ['student', 'teacher', 'admin']
      },
      {
        icon: '/exam.png',
        href: '/list/exams',
        label: 'Exam',
        visible: ['student', 'teacher', 'admin']
      },
      {
        icon: '/subject.png',
        href: '/list/subjects',
        label: 'Lesson',
        visible: ['student', 'teacher', 'admin']
      },
    ]
  },
  {
    title: 'Others',
    items: [
      {
        icon: '/setting.png',
        href: '/account/setting',
        label: 'Setting',
        visible: ['student', 'teacher', 'admin']
      },
      {
        icon: '/profile.png',
        href: '/account/profile',
        label: 'Profile',
        visible: ['student', 'teacher', 'admin']
      },
      {
        icon: '/logout.png',
        href: '/logout',
        label: 'Logout',
        visible: ['student', 'teacher', 'admin']
      },
    ]
  }
]
export const Menu = () => {
  return (
    <>
      <div className=" bg-gray-600 flex h-screen flex-col gap-4 p-2">
        {menuItem.map((i) => (
          <div key={i.title} className="flex flex-col gap-4 w-full  ">
            <span className="font-semibold text-gray-500 hidden lg:block">{i.title}</span>
            {i.items.map((item) => {
              if (item.visible.includes('admin')) {
                return (
                  <Link href={item.href} key={item.label} className="flex gap-2  items-center w-full hover:bg-gray-300">
                    <Image src={item.icon} alt="" width={14} height={14} className="w-max h-max "/>
                    <span className="text-sm text-gray-400 hidden lg:block">{item.label}</span>
                  </Link>
                )
              }
            })}
          </div>
        ))}
      </div>
    </>
  )
}