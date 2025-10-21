const images = [
    "./Img1Carrosel.svg",
    "./Img2Carrosel.svg",
    "./Img3Carrosel.svg",
    "./Img4Carrosel.svg"
];

export default function InfiniteCarousel() {
    return (
        <div className="w-screen h-auto overflow-hidden relative">
            <div
                className="flex"
                style={{
                    animation: "scroll 60s linear infinite",
                    width: "max-content",
                }}
            >
                {images.concat(images).map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`slide-${i}`}
                        className="w-screen h-auto object-cover flex-shrink-0"
                    />
                ))}
            </div>

            {/* Estilo da animação inline */}
            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
        </div>
    );
}
