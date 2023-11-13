export class View {
    width: number = 0;
    height: number = 0;
    x: number = 0;
    y: number = 0;
    backgroundColor: string = 'transparent';
    bindDom: HTMLElement | null = null;

    constructor(data?: Partial<View>) {
        Object.assign(this, data);
    }

    get style(): Record<string, string> {
        return {
            width: `${this.width}px`,
            height: `${this.height}px`,
            left: `${this.x}px`,
            top: `${this.y}px`,
            backgroundColor: this.backgroundColor,
        }
    }

    setBindDom(el: any) {
        this.bindDom = el
    }
}