import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
`;

const Main = styled.main`
  width: 80vw;
  min-height: 100vh;
`;

function Layout() {
  return (
    <div>
      <Header>
        <span>Header</span>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default Layout;
