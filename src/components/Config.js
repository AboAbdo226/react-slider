export var Config = {
  infinite: true,
  speed: 1532,
  cssEase: 'ease-in-out',
  slidesToShow: 5,
  initialSlide: 2,
  autoplay: true,
  autoplaySpeed: 1885,
  centerMode: true,
  focusOnSelect: true,
  rows: 1,
  nextArrow: <MyNextArrow nextA="nextArrowStyle" />,
  prevArrow: <MyPrevArrow prevA="prevArrowStyle" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        infinite: true,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

function MyNextArrow(props) {
  const { nextA, style, onClick } = props;
  return (
    <button
      className={nextA}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      next
    </button>
  );
}
function MyPrevArrow(props) {
  const { prevA, style, onClick } = props;
  return (
    <button
      className={prevA}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      prev
    </button>
  );
}
