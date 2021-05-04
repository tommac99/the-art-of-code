const getRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (
    Math.round((Math.floor(Math.random() * (max - min + 1)) + min) / 10) * 10
  );
};

const ranges = {
  top: {
    min: 40,
    max: 100,
  },
  right: {
    min: 40,
    max: 80,
  },
  speed: {
    min: 1000,
    max: 2000,
  },
};

export const icons = [
  {
    icon: <i className="devicon-heroku-line-wordmark"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-yarn-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-npm-original-wordmark"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-visualstudio-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-photoshop-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-xd-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-illustrator-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-aftereffects-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-html5-plain-wordmark"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-css3-plain-wordmark"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-sass-original"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-javascript-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-typescript-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-ruby-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-react-original"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-redux-original"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-rails-plain-wordmark"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-materialui-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-bootstrap-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-graphql-plain"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
  {
    icon: <i className="devicon-postgresql-plain-wordmark"></i>,
    top: getRandomNumber(ranges.top.min, ranges.top.max),
    right: getRandomNumber(ranges.right.min, ranges.right.max),
    speed: getRandomNumber(ranges.speed.min, ranges.speed.max),
  },
];
