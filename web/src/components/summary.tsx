import { CheckCircle2, Plus } from 'lucide-react'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">5 to 10 of August</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Register Goal
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            You have finished <span className="text-zinc-100">8</span> of the{' '}
            <span className="text-zinc-100">15</span> week goals.
          </span>
          <span>58%</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Study
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Clean dishes
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Exercise
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Play with cats
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Your week</h2>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Sunday <span className="text-zinc-400 text-xs">(August 10)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                {' '}
                You have completed "
                <span className="text-zinc-100">Exercise </span>" at{' '}
                <span className="text-zinc-100"> 08:15 </span>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Monday <span className="text-zinc-400 text-xs">(August 11)</span>
          </h3>

          <li className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-pink-500" />
            <span className="text-sm text-zinc-400">
              You have completed "
              <span className="text-zinc-100">Exercise </span>" at{' '}
              <span className="text-zinc-100"> 08:15 </span>
            </span>
          </li>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                You have completed "
                <span className="text-zinc-100">Exercise </span>" at
                <span className="text-zinc-100"> 08:15 </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
