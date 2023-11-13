import {View} from "./View.ts";
import {Ground} from "./Ground.ts";

export class Container extends View{
    parent?: Container
    children: Container[] = []

    constructor(data?: Partial<Container>) {
        super(data);
        this.children = data?.children?.map(item => new Container(item)) ?? [];
    }

    addChild<T extends Container>(child: T) {
        child.parent = this;
        this.children.push(child);
    }

    get ground(): Ground | undefined {
        return this.parent?.ground;
    }
}