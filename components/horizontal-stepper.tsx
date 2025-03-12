import { cn } from "@/lib/utils"

interface StepperProps {
  steps: string[]
  currentStep: number
}

export function HorizontalStepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
              index < currentStep
                ? "bg-primary text-primary-foreground"
                : index === currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground",
            )}
          >
            {index + 1}
          </div>
          <div className="ml-2 text-sm font-medium">{step}</div>
          {index < steps.length - 1 && (
            <div className={cn("h-px w-12 mx-2", index < currentStep ? "bg-primary" : "bg-secondary")} />
          )}
        </div>
      ))}
    </div>
  )
}

