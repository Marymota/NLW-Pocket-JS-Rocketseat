import { X } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupIndicator,
} from './ui/radio-group'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'

export function CreateGoal() {
  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Register Goal</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Add activities that you want to practice regularly to your week
            schedule.
          </DialogDescription>
        </div>

        <form action="" className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Which activity?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Study, exercise, do chores, etc..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">How often?</Label>
              <RadioGroup>
                <RadioGroupItem value="1">
                  <RadioGroupIndicator />
                  <span className="text-zink-300 text-sm font-medium">
                    1x a week
                  </span>
                  <span className="text-lg leading-none">😴</span>
                </RadioGroupItem>

                <RadioGroupItem value="2">
                  <RadioGroupIndicator />
                  <span className="text-zink-300 text-sm font-medium">
                    2x a week
                  </span>
                  <span className="text-lg leading-none">😮‍💨</span>
                </RadioGroupItem>

                <RadioGroupItem value="3">
                  <RadioGroupIndicator />
                  <span className="text-zink-300 text-sm font-medium">
                    3x a week
                  </span>
                  <span className="text-lg leading-none">🙂</span>
                </RadioGroupItem>

                <RadioGroupItem value="4">
                  <RadioGroupIndicator />
                  <span className="text-zink-300 text-sm font-medium">
                    4x a week
                  </span>
                  <span className="text-lg leading-none">😊</span>
                </RadioGroupItem>

                <RadioGroupItem value="5">
                  <RadioGroupIndicator />
                  <span className="text-zink-300 text-sm font-medium">
                    5x a week
                  </span>
                  <span className="text-lg leading-none">🤩</span>
                </RadioGroupItem>

                <RadioGroupItem value="6">
                  <RadioGroupIndicator />
                  <span className="text-zink-300 text-sm font-medium">
                    6x a week
                  </span>
                  <span className="text-lg leading-none">🤯</span>
                </RadioGroupItem>

                <RadioGroupItem value="7">
                  <RadioGroupIndicator />
                  <span className="text-zink-300 text-sm font-medium">
                    7x a week
                  </span>
                  <span className="text-lg leading-none">🤖</span>
                </RadioGroupItem>
              </RadioGroup>
            </div>
          </div>

          <div className="flex item-center gap-3">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button className="flex-1">Save</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
