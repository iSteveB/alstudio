import Loader from '@/app/ui/Loader';

export default function Loading() {
    return (
        // eslint-disable-next-line tailwindcss/enforces-shorthand
        <div className='fixed left-1/2 top-1/2 z-50 h-screen w-full -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur'>
            <Loader />
        </div>
    );
}
