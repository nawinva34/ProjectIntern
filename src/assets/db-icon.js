import Icon from "@ant-design/icons";

const DBSvg = () => (
  <svg
    width="91"
    height="102"
    viewBox="0 0 91 102"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M91 79.3333V22.6667C91 10.3813 70.1667 0 45.5 0C20.8333 0 0 10.3813 0 22.6667V79.3333C0 91.6187 20.8333 102 45.5 102C70.1667 102 91 91.6187 91 79.3333ZM45.5 11.3333C66.4926 11.3333 79.2326 19.873 79.625 22.6327C79.2326 25.4603 66.4926 34 45.5 34C24.5074 34 11.7674 25.4603 11.375 22.7007C11.7674 19.873 24.5074 11.3333 45.5 11.3333ZM11.375 37.4397C19.7868 42.2393 32.0604 45.3333 45.5 45.3333C58.9396 45.3333 71.2132 42.2393 79.625 37.4397V50.966C79.2326 53.7937 66.4926 62.3333 45.5 62.3333C24.5074 62.3333 11.7674 53.7937 11.375 51V37.4397ZM11.375 79.3333V65.773C19.7868 70.5727 32.0604 73.6667 45.5 73.6667C58.9396 73.6667 71.2132 70.5727 79.625 65.773V79.2993C79.2326 82.127 66.4926 90.6667 45.5 90.6667C24.5074 90.6667 11.7674 82.127 11.375 79.3333Z"
      fill="currentColor"
    />
  </svg>
);

export const DBIcon = (props) => <Icon component={DBSvg} {...props} />;
