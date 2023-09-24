import { createContext } from 'react'

export const WorkoutContext = createContext()

const WorkoutsContextProvider = ({ children }) => {
  return <WorkoutsContextProvider>{children}</WorkoutsContextProvider>
}
