import Loader from '@/app/ui/Loader';

export default function Loading() {
    return (
        // eslint-disable-next-line tailwindcss/enforces-shorthand
        <div className='m-auto flex h-screen w-screen items-center justify-center'>
            <Loader />
        </div>
    );
}
