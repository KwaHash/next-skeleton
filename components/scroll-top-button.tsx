'use client'

import { ArrowUpIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useWindowScroll } from '@/hooks/use-window-scroll'

const ScrollTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll()

  if (scroll.y < 100) {
    return null
  }

  return (
    <Button
      data-test-id="scroll-top-button"
      variant="outline"
      size="icon"
      className="fixed rounded-full left-1/2 bottom-4 transform -translate-x-1/2"
      onClick={() => scrollTo({ top: 0 })}
    >
      <ArrowUpIcon className="h-5 w-5 animate-pulse" />
    </Button>
  )
}

export default ScrollTopButton
