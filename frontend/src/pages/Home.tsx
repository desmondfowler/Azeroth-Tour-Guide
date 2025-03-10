import {StrictMode} from 'react';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Reviews from '../components/Reviews';

export default function Home() {
    return (
        <StrictMode>
            <div className="min-h-screen bg-gray-100 flex flex-col">
                <Header />
                <CTA />
                <Reviews count={3}/>
            </div>
        </StrictMode>
    )
}