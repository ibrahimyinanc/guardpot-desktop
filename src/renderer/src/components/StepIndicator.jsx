function StepIndicator({ steps, currentStep }) {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`step-item ${currentStep === step.id ? 'active' : ''} ${step.completed ? 'completed' : ''}`}
        >
          <div className="step-circle">
            {step.completed ? (
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path
                  d="M2 7L5.5 10.5L12 3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          <span className="step-label">{step.label}</span>
          {index < steps.length - 1 && <div className="step-line" />}
        </div>
      ))}
    </div>
  )
}

export default StepIndicator
