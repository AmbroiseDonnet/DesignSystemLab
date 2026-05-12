import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import DesignSystem from './DesignSystem.tsx'
import TestBalise from './TestBalise.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<DesignSystem />} />
            <Route path="/test" element={<TestBalise />} />
        </Routes>
    </BrowserRouter>
    </StrictMode>
)
