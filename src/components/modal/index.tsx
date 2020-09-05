import React, { FC } from 'react';
import './index.less';

type IProps = {
  className?: string;
};
export const Modal: FC<IProps> = (props) => {
  const { className = '' } = props;
  const cls = `ui-modal ${className}`;
  return <div className={cls}>Modal</div>;
};
