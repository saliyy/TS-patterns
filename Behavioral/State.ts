class DocumentItem {
    private content: string;

    private state: DocumentItemState;

    constructor(content: string) {
        this.content = content;
        this.setState(new DraftItemState(this))
    }

    public setState(state: DocumentItemState) {
        this.state = state
        this.state.setContextItem(this)
    }

    public publishDoc() {
        return this.state.publish()
    }

    public removeDoc() {
        return this.state.remove()
    }
}

abstract class DocumentItemState {
    protected item: DocumentItem;

    protected name: string;

    constructor(item: DocumentItem) {
       this.name = this.constructor.name     
       this.item = item;
    }

    public setContextItem(item: DocumentItem): this {
        this.item = item;
        return this
    }

    abstract publish(): void|never

    abstract remove(): void|never
}

class DraftItemState extends DocumentItemState {
    constructor(item: DocumentItem) {
        super(item)
        console.log("item now in " + this.name)
    }

    public publish(): void {
        this.item.setState(new PublicItemState(this.item))
    }

    public remove(): void {
        console.log("doc is deleted")
    }
}

class PublicItemState extends DocumentItemState {
    constructor(item: DocumentItem) {
        super(item)
        console.log("item now in " + this.name)
    }

    public publish(): void {
        throw new Error("already published")
    }

    public remove(): void {
        this.item.setState(new DraftItemState(this.item))
    }
}

const item = new DocumentItem("Hey world!")

item.publishDoc()

item.removeDoc()
