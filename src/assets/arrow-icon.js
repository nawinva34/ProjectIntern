import Icon from "@ant-design/icons";

const ArrowSvg = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.645823 7.44086C0.645823 3.65886 3.81041 0.620864 7.74999 0.620864C11.6896 0.620864 14.8542 3.65886 14.8542 7.44086C14.8542 11.2229 11.6896 14.2609 7.74999 14.2609C3.81041 14.2609 0.645823 11.2229 0.645823 7.44086ZM4.71457 7.00686L7.29791 4.52687C7.36249 4.46486 7.42707 4.40286 7.49166 4.40286C7.55624 4.34086 7.68541 4.34086 7.74999 4.34086C7.81457 4.34086 7.94374 4.34086 8.00832 4.40286C8.07291 4.40286 8.13749 4.46486 8.20207 4.52687L10.7854 7.00686C11.0437 7.25486 11.0437 7.62686 10.7854 7.87486C10.5271 8.12286 10.1396 8.12286 9.88124 7.87486L8.39582 6.44886L8.39582 9.92086C8.39582 10.2929 8.13749 10.5409 7.74999 10.5409C7.36249 10.5409 7.10416 10.2929 7.10416 9.92086L7.10416 6.44886L5.61874 7.87486C5.36041 8.12286 4.97291 8.12286 4.71457 7.87486C4.45624 7.62686 4.45624 7.25486 4.71457 7.00686ZM7.74999 13.0209C4.52082 13.0209 1.93749 10.5409 1.93749 7.44086C1.93749 4.34086 4.52082 1.86086 7.74999 1.86086C10.9792 1.86086 13.5625 4.34086 13.5625 7.44086C13.5625 10.5409 10.9792 13.0209 7.74999 13.0209Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowIcon = (props) => <Icon component={ArrowSvg} {...props} />;
