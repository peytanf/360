import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Collapse } from '@mui/material';
// hooks
import useActiveLink from '../../../hooks/useActiveLink';
//
import NavItem from './NavItem';

// ----------------------------------------------------------------------

NavList.propTypes = {
  data: PropTypes.object,
  depth: PropTypes.number,
  hasChild: PropTypes.bool,
};

export default function NavList({ data, depth, hasChild }) {
  const { pathname } = useRouter();

  const { active, isExternalLink } = useActiveLink(data.path);

  // Check if any child is active for parent menus
  const childActive = hasChild && data.children 
    ? data.children.some(child => {
        // Exact match
        if (pathname === child.path) return true;
        // Handle /dashboard/app vs /dashboard/app/ variations
        if (pathname === '/dashboard/app' && child.path === '/dashboard/app/') return true;
        if (pathname === '/dashboard/app/' && child.path === '/dashboard/app') return true;
        // Handle trailing slash variations for any path
        if (pathname + '/' === child.path) return true;
        if (pathname === child.path + '/') return true;
        // For specific child paths, check if current path starts with child path
        if (pathname.startsWith(child.path + '/')) return true;
        return false;
      })
    : false;
  
  const isActive = active || childActive;

  const [open, setOpen] = useState(isActive);

  useEffect(() => {
    if (!isActive) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        active={isActive}
        isExternalLink={isExternalLink}
        onClick={handleToggle}
      />

      {hasChild && (
        <Collapse in={open} unmountOnExit>
          <NavSubList data={data.children} depth={depth} />
        </Collapse>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

NavSubList.propTypes = {
  data: PropTypes.array,
  depth: PropTypes.number,
};

function NavSubList({ data, depth }) {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 1}
          hasChild={!!list.children}
        />
      ))}
    </>
  );
}
