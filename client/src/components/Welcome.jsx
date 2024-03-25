import React from 'react'

const Welcome = () => {
  return (
    <div className="bg-zinc-50 m-5 flex items-center rounded-xl drop-shadow-md">
        <div className="flex flex-col gap-5 ml-8">
          <h1 className="text-3xl font-semibold text-blue-950">Hi, Sarah Parker</h1>
          <p className="text-sm">
            Welcome to Workflow Wizard, where your productivity meets its magic!
            Let&apos;s embark on a journey to streamline your tasks and unleash
            your efficiency.
          </p>
        </div>
        <img className="w-[50%]" src="/bg.png" alt="" />
      </div>
  )
}

export default Welcome