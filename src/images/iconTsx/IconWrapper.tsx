import { cloneElement, isValidElement } from "react";


type IconProps<T> = Partial<{
  width: string;
  height: string;
  fill: string;
  className: string;
}> & {children: T};

export default function IconWrapper<T>(props: IconProps<T>) {
  const omitChildrenProps: Omit<IconProps<T>, 'children'> = {
    width: props.width || '1em',
    height: props.height || '1em',
    fill: props.fill || 'currentColor',
    className: props.className
  }

  return <>
    { isValidElement(props.children) ? cloneElement(props.children, omitChildrenProps) : props.children }
  </>
}
