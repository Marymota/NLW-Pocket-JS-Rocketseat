import { Plus } from 'lucide-react'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'

import logo from '../assets/logo.svg'
import letsStart from '../assets/illustration_lets-start.svg'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="lets start" />
      <p className="text-zink-300 leading-relaxed max-w-80 text-center">
        You don't have any goals yet. Do you want to register one now?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Register Goal
        </Button>
      </DialogTrigger>
    </div>
  )
}
