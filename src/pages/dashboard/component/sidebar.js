export function SideBar(){
    return (
        <aside id="default-sidebar" className="left-0 z-40 w-1/6" aria-label="Sidebar">
            <div className="px-3 py-4 bg-white flex flex-col justify-between h-full">
                <ul className="space-y-2 font-normal text-sm p-3">
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-300 group">
                            <i className="fa-solid fa-house group-hover:text-violet-500"></i>
                            <span className="ml-3 group-hover:text-violet-500 group-hover:text-violet-500">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <p className="text-gray-400 py-3">ANALYTICS</p>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-300 group">
                            <i className="fa-solid fa-chart-simple group-hover:text-violet-500"></i>
                            <span className="flex-1 ml-3 group-hover:text-violet-500 whitespace-nowrap">Requests</span>
                        </a>
                    </li>
                    <li>
                        <p className="text-gray-400 py-3">USER</p>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-300 group">
                            <i className="fa-solid fa-user-group group-hover:text-violet-500"></i>
                            <span className="flex-1 ml-3 group-hover:text-violet-500 whitespace-nowrap">Patiens</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-300 group">
                            <i className="fa-solid fa-user-group group-hover:text-violet-500"></i>
                            <span className="flex-1 ml-3 group-hover:text-violet-500 whitespace-nowrap">Doctors</span>
                        </a>
                    </li>
                </ul>

                <ul className="space-y-2 font-normal text-sm p-3">
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-300 group">
                            <i className="fa-solid fa-gear group-hover:text-violet-500"></i>
                            <span className="flex-1 ml-3 group-hover:text-violet-500 whitespace-nowrap">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-300 group">
                            <i className="fa-solid fa-right-from-bracket group-hover:text-violet-500"></i>
                            <span className="flex-1 ml-3 group-hover:text-violet-500 whitespace-nowrap">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}