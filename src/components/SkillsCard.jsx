import React from 'react'

const SkillsCard = () => {
  return (
    <div
      className="relative block rounded-lg border-t-8 sm:border-t-0 sm:border-l-8 border-pink-600 p-4 shadow-xl sm:p-6 lg:p-8 mb-8 sm:mb-0"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-3xl font-bold sm:text-4xl">100+</h3>
      </div>
      <p className="mt-4 font-medium text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        provident.
      </p>
    </div>
  )
}

export default SkillsCard