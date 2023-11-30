import Image from "next/image"
import AuthForm from "./components/AuthForm"

Image
export default function page() {
  return (
    <div
      className="
      flex
      min-h-full
      flex-col
      justify-center
      py-12
      sm:px-6
      lg:px-6
      bg-grey-100
    "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
        alt="logo"
        height={400}
        width={400}
        className="mx-auto w-auto"
        src='/images/avatara-logo-primary.png'
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign In Account
      </h2>
      {/* Auth Form */}
      <AuthForm/>
    </div>
  )
}
