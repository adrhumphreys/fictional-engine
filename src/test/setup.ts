import "@testing-library/jest-dom";
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// React 18 requires you to include this to use `act` within tests
declare var globalThis: { IS_REACT_ACT_ENVIRONMENT: boolean };
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
