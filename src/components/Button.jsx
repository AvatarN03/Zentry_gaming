import React from 'react'

const Button = ({title, className, leftIcon, rightIcon , id}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${className}`}>
        {leftIcon}
        <span className="relative inline-flex overflow-hidden text-sm uppercase font-general">
            <div className="">
                {title}
            </div>
        </span>
        {rightIcon}
    </button>

  )
}

export default Button