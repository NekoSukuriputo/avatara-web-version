import Link from "next/link";

export default function Home() {
  return (
    <main
      className="
    flex
    min-h-full
    flex-col
    justify-center
    py-12
    sm:px-6
    lg:px-6
    bg-grey-100
    items-center
    "
    >
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Avatara Web Version
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          This web only for Portfolio all data in this web is dummy data
        </p>
        <ul className="my-4 space-y-3">
          <li>
            <Link
              href="/sign-in"
              className="flex items-center p-3 text-base font-bold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://github.com/abdulrahmat97dev/avatara-web-version"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Project Github Repository</span>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
