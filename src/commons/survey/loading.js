const Loading = () => {
    return (
        <div className="w-full h-80 grid content-center justify-center">
            <div className="flex flex-wrap gap-3">
                
                <span className="h-[25px] w-[25px] rounded-full rounded-bl-xl border-4 border-YVcyan animate-loader animation-delay-200">
                </span>
                <span className="h-[25px] w-[25px] rounded-full rounded-bl-xl border-4 border-YVmagenta animate-loader">
                </span>
                <span className="h-[25px] w-[25px] rounded-full rounded-bl-xl border-4 border-YVyellow animate-loader animation-delay-400">
                </span>
                
            </div>
            
        </div>
    );
}

export default Loading;