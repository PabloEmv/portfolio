import React from 'react'

const SkillsCard = ({title, text, borderColor}) => {
  return (
    <div
      className={`relative dark:bg-gray-900 dark:bg-opacity-40 block rounded-lg border-t-8 sm:border-t-0 sm:border-l-8 ${borderColor} p-4 shadow-xl sm:p-6 lg:p-8 mb-8 sm:mb-0 sm:mx-2 xl:mx-8`}
    >
      <div className="flex items-center gap-4">
        <h3 className="text-3xl font-bold sm:text-4xl">{title}</h3>
      </div>
      <p className="mt-4 font-medium text-gray-500">
        {text}
      </p>
    </div>
  )
}

export default SkillsCard