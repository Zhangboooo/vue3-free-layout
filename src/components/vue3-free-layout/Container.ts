import {Ground} from "./Ground.ts";

let uid = 0;
export abstract class Container {
    children: any[] = [];
    ground: Ground | null = null;
    parent: Container | null = null;
    uid: number = uid++;

    addChild<T extends Container>(child: T) {
        if (child instanceof Ground) {
            this.ground = child;
        }
        child.parent = this;
        this.children.push(child);
    }
}