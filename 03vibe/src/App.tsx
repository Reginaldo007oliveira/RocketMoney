import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
<ThemeProvider theme={defaultTheme}>
<GlobalStyle/>  
     
    <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
    
  )
}


