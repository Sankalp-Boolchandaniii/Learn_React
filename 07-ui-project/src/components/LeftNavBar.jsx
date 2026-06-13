import { Atom } from 'lucide-react';

export function LeftNavBar1() {
    return (
        <div className="w-1/5 h-full bg-blue-500 text-white">
            <div className='flex gap-6 p-1.5'>
                <Atom /> <h1 className='uppercase'>Creative Tim</h1>
            </div>
            <hr />
        </div>
    );
}