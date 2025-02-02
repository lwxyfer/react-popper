import * as React from "react";
import * as PopperJS from "popper.js";

export interface ManagerProps {
  children: React.ReactNode;
}
export class Manager extends React.Component<ManagerProps, {}> { }

export type RefHandler = (ref: HTMLElement | null) => void;

export interface ReferenceChildrenProps {
  ref: RefHandler;
}

export interface ReferenceProps {
  children: (props: ReferenceChildrenProps) => React.ReactNode;
  innerRef?: RefHandler;
}
export class Reference extends React.Component<ReferenceProps, {}> { }

export interface PopperArrowProps {
  ref: RefHandler;
  style: React.CSSProperties;
}

export interface PopperChildrenProps {
  arrowProps: PopperArrowProps;
  outOfBoundaries: boolean | null;
  placement: PopperJS.Placement;
  ref: RefHandler;
  scheduleUpdate: () => void;
  style: React.CSSProperties;
}

export interface PopperProps {
  children: (props: PopperChildrenProps) => React.ReactNode;
  eventsEnabled?: boolean;
  innerRef?: RefHandler;
  modifiers?: PopperJS.Modifiers;
  placement?: PopperJS.Placement;
  positionFixed?: boolean;
  referenceElement?: PopperJS.ReferenceObject;
}
export class Popper extends React.Component<PopperProps, {}> { }
