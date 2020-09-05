import React, { FC } from 'react';
import './index.less';

type IProps = {
  className?: string;
};

const Button: FC<IProps> = (props) => {
  const { children, className = '' } = props;
  const cls = `ui-button ${className}`;
  return (
    <button type="button" className={cls}>
      {children}
    </button>
  );
};

export default Button;
