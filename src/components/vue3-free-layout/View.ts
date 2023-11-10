import {Container} from "./Container";
import type {StyleValue} from "vue";

export class View extends Container{
    width: number = 0;
    height: number = 0;
    x: number = 0;
    y: number = 0;
    backgroundColor: string = 'transparent';
    dom: Element | null = null;

    constructor(data?: Partial<View>) {
        super();
        Object.assign(this, data);
    }

    getStyle(): StyleValue {
        return {
            width: `${this.width}px`,
            height: `${this.height}px`,
            left: `${this.x}px`,
            top: `${this.y}px`,
            backgroundColor: this.backgroundColor,
        }
    }

    setDom(dom?: Element) {
        this.dom = dom ?? null;
    }

    setX(x: number) {
        this.x = x;
    }
    setY(y: number) {
        this.y = y;
    }
}