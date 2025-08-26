interface ContentDataType {
    id: number;
    class: string;
}

export let
    Contentdata: ContentDataType[] = [
        { id: 1, class: "start mb-3" },
        { id: 2, class: "end mb-3" },
        { id: 3, class: "center mb-3" },
        { id: 4, class: "between mb-3" },
        { id: 5, class: "around mb-3" },
        { id: 6, class: "evenly" }
    ],
    Contentdata1: ContentDataType[] = [
        { id: 1, class: "start mb-3" },
        { id: 2, class: "end mb-3" },
        { id: 3, class: "center mb-3" },
        { id: 4, class: "baseline mb-3" },
        { id: 5, class: "stretch " }
    ],
    Contentdata3: ContentDataType[] = [
        { id: 1, class: "start" },
        { id: 2, class: "end" },
        { id: 3, class: "center" },
        { id: 4, class: "baseline" },
        { id: 5, class: "stretch " }
    ],
    Contentdata4: ContentDataType[] = [
        { id: 1, class: "start" },
        { id: 2, class: "end" },
        { id: 3, class: "center" },
        { id: 4, class: "between" },
        { id: 5, class: "around " },
        { id: 6, class: "stretch " }
    ]