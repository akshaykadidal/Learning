import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-[#A0BF3F]"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
              <span className="font-bold">SupplyAI</span>
            </div>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 ml-6">
          <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/analytics" className="text-sm font-medium transition-colors hover:text-primary">
            Analytics
          </Link>
          <Link href="/integrations" className="text-sm font-medium transition-colors hover:text-primary">
            Integrations
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline">Log in</Button>
          <Button className="bg-[#FA8E29] hover:bg-[#FA8E29]/90">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

