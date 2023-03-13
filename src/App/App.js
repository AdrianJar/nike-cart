import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import NikeCart from '../features/NikeCart/NikeCart'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Normalize />
            <NikeCart />
        </ThemeProvider>
    )
}

export default App