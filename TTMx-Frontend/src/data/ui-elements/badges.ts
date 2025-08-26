interface BadgeDataType {
    id: number;
    heading: string;
    color: string;
    class?: string;
}


export let Badgesdata: BadgeDataType[] = [
    { id: 1, heading: "Primary", color: "primary", class: "" },
    { id: 5, heading: "Secondary", color: "secondary", class: "" },
    { id: 6, heading: "Success", color: "success", class: "" },
    { id: 7, heading: "Danger", color: "danger", class: "" },
    { id: 8, heading: "Warning", color: "warning", class: "" },
    { id: 9, heading: "Info", color: "info", class: "" },
    { id: 10, heading: "Light", color: "light", class: "text-dark" },
    { id: 11, heading: "Dark", color: "dark", class: "text-white" },
],
    Outlinebadgesdata: BadgeDataType[] = [
        { id: 1, heading: "Primary", color: "primary", class: "" },
        { id: 5, heading: "Secondary", color: "secondary", class: "" },
        { id: 6, heading: "Success", color: "success", class: "" },
        { id: 7, heading: "Danger", color: "danger", class: "" },
        { id: 8, heading: "Warning", color: "warning", class: "" },
        { id: 9, heading: "Info", color: "info", class: "" },
        { id: 10, heading: "Light", color: "light", class: "text-dark" },
        { id: 11, heading: "Dark", color: "dark", class: "" },
    ],
    badges1: BadgeDataType[] = [
        { id: 1, heading: "Primary", color: "primary" },
        { id: 2, heading: "Secondary", color: "secondary" },
        { id: 3, heading: "Success", color: "success" },
        { id: 4, heading: "Danger", color: "danger" },
        { id: 5, heading: "Warning", color: "warning" },
        { id: 6, heading: "Info", color: "info" },
        { id: 7, heading: "Orange", color: "orange" },
        { id: 8, heading: "Purple", color: "purple" },
    ];