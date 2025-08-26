interface ProgressDataType {
    id: number;
    data: number;
    maincustomClass?: string;
    color?: string
    class?: string
}

interface MultipleProgressType {
    class1: string;
    class2: string;
    class3: string;
    now1: number;
    now2: number;
    now3: number;
    size: string;
    maincustomClass: string;
}


interface CustomProgress2DataType {
    class: string;
    now: number;
    class1: string;
    class2: string;
    class3: string;
}


export const
    progressdata: ProgressDataType[] = [
        { id: 1, data: 0, maincustomClass: "mb-3" },
        { id: 2, data: 25, maincustomClass: "mb-3" },
        { id: 3, data: 50, maincustomClass: "mb-3" },
        { id: 4, data: 75, maincustomClass: "mb-3" },
        { id: 5, data: 100, maincustomClass: "mb-0" },
    ],
    Stripeddata: ProgressDataType[] = [
        { id: 1, data: 10, color: "primary", maincustomClass: "mb-3" },
        { id: 2, data: 25, color: "secondary", maincustomClass: "mb-3" },
        { id: 3, data: 50, color: "success", maincustomClass: "mb-3" },
        { id: 4, data: 75, color: "info", maincustomClass: "mb-3" },
        { id: 5, data: 100, color: "warning", maincustomClass: "" },
    ],
    Labeldata: ProgressDataType[] = [
        { id: 1, data: 10, color: "primary", maincustomClass: "mb-3" },
        { id: 2, data: 20, color: "secondary", maincustomClass: "mb-3" },
        { id: 3, data: 40, color: "success", maincustomClass: "mb-3" },
        { id: 4, data: 60, color: "warning", maincustomClass: "mb-3" },
        { id: 5, data: 80, color: "info", maincustomClass: "" },
    ],
    Heightdata: ProgressDataType[] = [
        { id: 1, data: 10, class: "progress progress-xs mb-3" },
        { id: 2, data: 25, class: "progress progress-sm mb-3" },
        { id: 3, data: 50, class: "progress  mb-3" },
        { id: 4, data: 75, class: "progress progress-lg mb-3" },
        { id: 5, data: 100, class: "progress progress-xl" },
    ],
    Coloreddata: ProgressDataType[] = [
        { id: 1, data: 20, color: "secondary", maincustomClass: "mb-3" },
        { id: 2, data: 40, color: "warning", maincustomClass: "mb-3" },
        { id: 3, data: 60, color: "info", maincustomClass: "mb-3" },
        { id: 4, data: 80, color: "success", maincustomClass: "mb-3" },
        { id: 5, data: 100, color: "danger", maincustomClass: "" },
    ],
    Animatedata: ProgressDataType[] = [
        { id: 1, data: 10, color: "primary", class: "mb-3" },
        { id: 2, data: 20, color: "secondary", class: "mb-3" },
        { id: 3, data: 40, color: "success", class: "mb-3" },
        { id: 4, data: 60, color: "info", class: "mb-3" },
        { id: 5, data: 80, color: "warning", class: "mb-0" },
    ],
    Multipleprogress: MultipleProgressType[] = [
        { class1: "primary", class2: "secondary", class3: "success", now1: 5, now2: 10, now3: 15, size: "xs", maincustomClass: "mb-3" },
        { class1: "warning", class2: "info", class3: "danger", now1: 10, now2: 15, now3: 20, size: "sm", maincustomClass: "mb-3" },
        { class1: "info", class2: "success", class3: "", now1: 15, now2: 20, now3: 25, size: "", maincustomClass: "mb-3" },
        { class1: "purple", class2: "teal", class3: "orange", now1: 20, now2: 25, now3: 30, size: "lg", maincustomClass: "mb-3" },
        { class1: "success", class2: "danger", class3: "warning", now1: 25, now2: 30, now3: 35, size: "xl", maincustomClass: "" },

    ],
    CustomProgress2data: CustomProgress2DataType[] = [
        { class: "primary", now: 50, class1: "", class2: "", class3: "mb-4" },
        { class: "secondary", now: 60, class1: "", class2: "secondary", class3: "mb-4" },
        { class: "success", now: 70, class1: "", class2: "success", class3: "mb-4" },
        { class: "info", now: 80, class1: "info", class2: "info", class3: "mb-4" },
        { class: "warning", now: 90, class1: "warning", class2: "warning", class3: "" },
    ]