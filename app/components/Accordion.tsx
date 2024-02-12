'use client';

interface AccordionProps {
    isOpen: boolean;
    setIsOpen: () => void;
    onClick?: () => void;
    title: string | React.ReactNode;
    text: string | React.ReactNode;
}

const Accordion = ({ isOpen, setIsOpen, title, text }: AccordionProps) => {
    return (
        <div className='m-5 flex flex-col gap-2'>
            <div
                onClick={setIsOpen}
                className='bg-moggle text-crema'>
                <h2 className='m-0 border-t border-moggle'>
                    <button className=' flex w-full cursor-pointer appearance-none items-center border-none bg-none px-4 py-2 text-xl leading-8 outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:bg-crema hover:text-moggle'>
                        <span className='flex flex-1 text-left'>{title}</span>
                        <svg
                            viewBox='0 0 24 24'
                            focusable='false'
                            className=' inline-block size-8 shrink-0 origin-center fill-current align-middle text-xl leading-4 opacity-100 transition-transform duration-200 ease-linear'>
                            <path
                                fill='currentColor'
                                d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'></path>
                        </svg>
                    </button>
                </h2>

                <div
                    className={`grid ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    } bg-crema px-4 py-2 text-moggle transition-all duration-300 ease-out`}>
                    <div className=' overflow-hidden'>
                        <div>{text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
