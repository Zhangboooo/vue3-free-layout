export abstract class Container {
    children: any[] = [];

    addChild<T extends Container>(child: T) {
        this.children.push(child);
    }
}