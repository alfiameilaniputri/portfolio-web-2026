import fotoProfil from '../assets/foto sicantik.png';

export default function ProfileCard () {
    const numDotRows = 10;
    const dotStyle = "w-1.5 h-1.5 bg-blue-600 rounded-full";
    const dotStyleWhite = "w-1.5 h-1.5 bg-white rounded-full";

    return (
        <div className="flex items-center justify-center mt-20 bg-white p-4 sm:p-8 overflow-x-hidden">
            <div className="relative w-full max-w-sm transform scale-90 sm:scale-95 md:scale-100 transition-transform duration-300 ease-in-out">
                <div
                    className="relative w-full h-full
                    bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500
                    rounded-[2rem] sm:rounded-[2.25rem] md:rounded-[2.5rem]
                    shadow-xl overflow-visible"
                >
                    <img
                        src={fotoProfil}
                        alt="Seseorang tersenyum lembut."
                        className="max-w-full max-h-full object-contain bg-transparent scale-[1.29] relative -translate-y-[3.25rem] sm:-translate-y-[3.75rem] lg:-translate-y-[3.5rem] z-50"
                    />
                </div>

                {/* Pola Titik di Atas (memanjang ke bawah, agak ke kiri) */}
                <div className="absolute top-1/2 left-0 -translate-x-[calc(100%+0.5rem)] -translate-y-[calc(100%+0.75rem)] flex flex-col space-y-2">
                    {Array(numDotRows).fill(0).map((_, i) => (
                        <div key={`top-dots-${i}`} className="flex space-x-2">
                            <div className={dotStyle}></div>
                            <div className={dotStyle}></div>
                        </div>
                    ))}
                </div>

                {/* Pola Titik agak ke bawah dan ke kiri */}
                <div className="absolute top-[55%] left-0 -translate-x-[calc(-120%+1rem)] -translate-y-[calc(100%+0.75rem)] flex flex-col space-y-2">
                    {Array(numDotRows).fill(0).map((_, i) => (
                        <div key={`left-dots-${i}`} className="flex space-x-2">
                            <div className={dotStyleWhite}></div>
                            <div className={dotStyleWhite}></div>
                        </div>
                    ))}
                </div>

                {/* Pola Titik kanan bawah */}
                <div className="absolute bottom-[10%] right-0 translate-x-[calc(100%+0.5rem)] mb-2 flex flex-col-reverse space-y-2 space-y-reverse">
                    {Array(numDotRows).fill(0).map((_, i) => (
                        <div key={`bottom-right-dots-${i}`} className="flex space-x-2">
                            <div className={dotStyle}></div>
                            <div className={dotStyle}></div>
                        </div>
                    ))}
                </div>

                {/* Pola Titik kanan bawah agak ke dalam */}
                <div className="absolute bottom-[15%] right-0 translate-x-[calc(-70%+0.5rem)] mb-2 flex flex-col-reverse space-y-2 space-y-reverse">
                    {Array(numDotRows).fill(0).map((_, i) => (
                        <div key={`inner-right-dots-${i}`} className="flex space-x-2">
                            <div className={dotStyleWhite}></div>
                            <div className={dotStyleWhite}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
