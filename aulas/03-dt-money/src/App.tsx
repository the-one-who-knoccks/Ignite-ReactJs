import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './context/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { defaultTheme } from './styles/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
