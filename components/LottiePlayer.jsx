'use client'
import dynamic from 'next/dynamic'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => <div style={{ width: '420px', height: '420px' }}></div>
  }
)

export default Player

