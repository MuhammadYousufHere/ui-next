'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState
} from 'react'

type ManageValues = {
  contentType: string
  subType: string
  wordRange: string | number
}
type MangeContent = {
  values: ManageValues
  onSetValues: Dispatch<SetStateAction<ManageValues>>
  onBack: () => void
  onNext: () => void
}
const ManageContext = createContext<MangeContent | null>(null)
export const ManageProvider = ({ children }: { children: ReactNode }) => {
  const [initailValues, setInitialValues] = useState<ManageValues>({
    contentType: 'Fun',
    subType: '',
    wordRange: ''
  })
  const onBack = () => {
    // Implement logic to navigate to the previous step
    console.log('Going back')
  }
  const onNext = () => {
    const data = `
      Content_type: ${initailValues.contentType}
      Sub_Type: ${initailValues.subType || 'None'}
      Word_Range: ${initailValues.wordRange}
    `
    alert(`Form Data:\n${data}`)
  }
  return (
    <ManageContext.Provider
      value={{
        values: initailValues,
        onSetValues: setInitialValues,
        onBack,
        onNext
      }}
    >
      {children}
    </ManageContext.Provider>
  )
}

export const useManage = (): MangeContent => {
  const context = useContext(ManageContext)
  if (!ManageContext) {
    throw new Error(
      'ManageContext has to be used within <ManageContext.Provider>'
    )
  }

  return context as MangeContent
}
