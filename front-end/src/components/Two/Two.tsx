const Two = () => {
  return (
    <div className="font-inter antialiased text-third">
      <div className=" min-h-1/2 flex flex-col justify-center bg-gray-200 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text ">
              Rent a house in{" "}
              <span className="text-gray-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                  <li>Addis</li>
                  <li>Adama</li>
                  <li>Hawassa</li>
                  <li>Bishoftu</li>
                  <li>Harar</li>
                  <li aria-hidden="true">Dire</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
