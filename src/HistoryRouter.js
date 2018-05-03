import { BrowserRouter, HashRouter } from 'react-router-dom'

let HistoryRouter
if (process.env.NODE_ENV === 'production') {
  HistoryRouter = BrowserRouter
} else {
  HistoryRouter = HashRouter
}

export default HistoryRouter
