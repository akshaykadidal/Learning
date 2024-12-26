import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#A0BF3F]/30 via-[#FA8E29]/30 to-[#A0BF3F]/30 blur-3xl" />
      <div className="relative container px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            AI Automation Platform for{' '}
            <span className="bg-gradient-to-r from-[#A0BF3F] to-[#FA8E29] bg-clip-text text-transparent">
              Supply Chain
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Fast forward through tasks, unlock quick insights, and boost efficiency with our secure Enterprise Platform.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-[#FA8E29] hover:bg-[#FA8E29]/90">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-[#A0BF3F] text-[#A0BF3F] hover:bg-[#A0BF3F]/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

