const InstantQuoteButton = () => {
    return (
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          className="bg-yellow-400 text-black font-bold py-1 px-2 rounded-l-xl shadow-lg hover:bg-yellow-500 transition duration-300
                     text-sm tracking-wide border-2 border-yellow-500"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            letterSpacing: "0.03em",
            minHeight: "100px",
            minWidth: "40px",
          }}
          tabIndex={0}
        >
          Instant Roof Quote
        </button>
      </div>
    );
  };
  
  export default InstantQuoteButton;
  