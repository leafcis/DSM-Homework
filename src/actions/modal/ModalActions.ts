type ModalState = <T>(state: T) => {}

export const modalStates:ModalState = <modalStateProps>(state: modalStateProps) => (
  {
    type: "MODAL",
    state: state
  }
)