import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

/* 
  {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
    return <Step key={step} active={currentStep >= step} />
  })}

  Nesse trecho de código a gente basicamente cria um array [1, 2, 3, 4]
  Depois percorremos todos com um map, e partir deles renderizo um componente Step
*/
