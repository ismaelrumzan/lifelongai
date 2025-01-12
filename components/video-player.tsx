'use client'

import { Suspense } from 'react'

export function VideoPlayer() {
  return (
    <Suspense fallback={<div className="aspect-video bg-gray-100 animate-pulse rounded-lg" />}>
      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/UmaQjslQKDY"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Suspense>
  )
}

