import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TaskBoard } from '@/components/dashboard/task-board'
import { Metrics } from '@/components/dashboard/metrics'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <Hero />
      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <TaskBoard />
          <Metrics />
        </div>
      </div>
    </div>
  )
}

