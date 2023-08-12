import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import { useWindowSize } from 'react-use';

function MainLayout({ yScroll }) {
  const { height } = useWindowSize();
  return (
    <div>
      <Menu
        bgColor={
          yScroll > height ? 'bg-white/50 backdrop-blur-md' : 'bg-transparent'
        }
      />
      <Outlet />
    </div>
  );
}

export default MainLayout;
