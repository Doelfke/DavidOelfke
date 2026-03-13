import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

import styles from './Card.module.scss';

type CardProps<T extends ElementType = 'div'> = PropsWithChildren<{
  as?: T;
  className?: string;
}> &
  Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export const Card = <T extends ElementType = 'div'>({ as, className, children, ...props }: CardProps<T>) => {
  const Component = as || 'div';
  const classes = className ? `${styles.card} ${className}` : styles.card;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
