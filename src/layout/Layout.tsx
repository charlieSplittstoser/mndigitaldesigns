import { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
  header?: JSX.Element;
  footer?: JSX.Element;
}

export const Layout = ({ children, header, footer }: ILayout) => {
  let grid;

  if (header) {
    grid = footer ? 'grid-full' : 'grid-no-footer';
  } else if (footer) {
    grid = 'grid-no-header';
  } else {
    grid = 'grid-body-only';
  }

  return (
    <div className={`layout ${grid}`}>
      {header && <div>{header}</div>}
      {children}
      {footer && footer}
    </div>
  );
};