import React, { FC } from 'react';
import './index.less';

type IProps = {
  className?: string;
};
const Modal: FC<IProps> = (props) => {
  const { className = '' } = props;
  const cls = `ui-modal ${className}`;
  return <div className={cls}>Modal</div>;
};

export default Modal;
