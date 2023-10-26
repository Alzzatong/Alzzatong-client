import {
    PencilSquareIcon,
    MagnifyingGlassIcon,
  } from '@heroicons/react/24/outline'
  
  const navigation = [
    { name: '조회', href: '#', icon: MagnifyingGlassIcon,  current: true },
    { name: '등록', href: '#', icon: PencilSquareIcon, current: false },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function SidebarNav() {
    return (
      <div className="h-full flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-300 bg-white px-6">
        <div className="flex h-16 shrink-0 items-center">
           {/* 공백인 공간 */}
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-50 text-blue-600'
                          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name} 
                     
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
  