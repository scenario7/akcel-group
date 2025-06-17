'use client'

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Carousel = ({
  images,
  title,
}: {
  images: string[]
  title: string
}) => {
  const [index, setIndex] = useState(0)
  const total = images.length

  const prev = () => setIndex((index - 1 + total) % total)
  const next = () => setIndex((index + 1) % total)

  return (
    <div className="relative w-full max-w-4xl mt-10">
      <div className="overflow-hidden rounded-lg shadow">
        <img
          src={images[index]}
          alt={`${title} image ${index + 1}`}
          className="w-full h-96 object-cover"
        />
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-black bg-white rounded-full p-2 shadow hover:bg-gray-200"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-black bg-white rounded-full p-2 shadow hover:bg-gray-200"
      >
        <ChevronRight />
      </button>
    </div>
  )
}

export default Carousel
