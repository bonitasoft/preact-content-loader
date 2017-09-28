// noinspection ES6UnusedImports
import { h } from 'preact';
import uuid from 'uuid';
// import { props, withComponent } from 'skatejs/esnext';
// import withPreact from '@skatejs/renderer-preact/esnext';

const Wrap = props => {
  let idClip = uuid.v1();
  let idGradient = uuid.v1();

  return (
    <svg
      viewBox={`0 0 ${props.width} ${props.height}`}
      version="1.1"
      style={props.style}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect
        style={{ fill: `url(#${idGradient})` }}
        clip-path={`url(#${idClip})`}
        x="0"
        y="0"
        width={props.width}
        height={props.height}
      />

      <defs>
        <clipPath id={`${idClip}`}>{props.children}</clipPath>

        <linearGradient id={`${idGradient}`}>
          <stop offset="0%" stop-color={props.primaryColor}>
            <animate
              attributeName="offset"
              values="-2; 1"
              dur={`${props.speed}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stop-color={props.secondaryColor}>
            <animate
              attributeName="offset"
              values="-1.5; 1.5"
              dur={`${props.speed}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stop-color={props.primaryColor}>
            <animate
              attributeName="offset"
              values="-1; 2"
              dur={`${props.speed}s`}
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Wrap;

// const SkateComponent = withComponent(withPreact());
// class WebComponentWrap extends SkateComponent {
//   static props = {
//     style: props.style,
//     type: props.type,
//     speed: props.speed,
//     width: props.width,
//     height: props.height,
//     primaryColor: props.primaryColor,
//     secondaryColor: props.secondaryColor
//   };
//   renderCallback ({props}) {
//     return <Wrap {...props} />;
//   }
// }
// customElements.define('content-loader-wrap', Wrap);
