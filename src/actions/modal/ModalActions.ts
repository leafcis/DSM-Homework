type ModalState = <T>(state: T) => {}

interface modalStates {
  state: string
}

export const modalStates:ModalState = <modalStateProps>(state: modalStateProps) => (
  {
    type: "aa"
  }
)