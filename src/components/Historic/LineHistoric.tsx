import * as React from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import { Historic } from '../../mocks/servicos'
import { Button, Card, CardContent } from '@mui/material'

export default function LineHistoric (props: { historic: Historic[] }) {
  const [activeStep, setActiveStep] = React.useState(0)
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSelect = (inx: number) => setActiveStep(inx)

  return (
    <Card sx={{ width: '100%', display: 'flex', mt: 4 }}>
      <Button
        onClick={handleBack}
        sx={{ color: '#3AB54A', fontSize: 22, fontWeight: 700 }}
        disabled={activeStep === 0 ?? true}
      >
        {'<'}
      </Button>
      <Stepper activeStep={activeStep} alternativeLabel >
        {props.historic?.map((step: Historic, index: number) => (
          <Step key={step.date} onClick={() => handleSelect(index)}>
            <StepLabel>
              {step.date}
            </StepLabel>

            <CardContent>
              <Typography>{step.description}</Typography>
            </CardContent>

          </Step>
        ))}
      </Stepper>
      <Button onClick={handleNext} disabled={activeStep === props.historic?.length - 1 ?? true}> {'>'} </Button>
    </Card>
  )
}
