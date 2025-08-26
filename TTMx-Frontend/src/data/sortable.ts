interface TaskType {
    id: number;
    name?: string;
    filter?: string
    text?: string
}

interface DragItem {
    id: string;
    text: string;
    children?: DragItem[];  // children is optional since not all items will have it
    draggable?: boolean;    // draggable is optional since not all items will have this property
}

export let
    tasks: TaskType[] = [
        { id: 1, name: "1. Design logo for fictional company" },
        { id: 2, name: "2. Draft 300-word blog post" },
        { id: 3, name: "3. Create project plan with milestones" },
        { id: 4, name: "4. Develop sample interview questions" },
        { id: 5, name: "5. Generate customer feedback for product." },
        { id: 6, name: "6. Write email template for newsletter." },
    ],
    Drag1: TaskType[] = [
        { id: 1, name: "1. Sketch a website homepage" },
        { id: 2, name: "2. Plan team-building activity." },
        { id: 3, name: "3. Summarize meeting minutes." },
        { id: 4, name: "4. Code a simple webpage." },
        { id: 5, name: "5. Create survey questions." },
        { id: 6, name: "6. Schedule team meeting." },
    ],
    Drag2: TaskType[] = [
        { id: 1, name: "1. Edit product description" },
        { id: 2, name: "2. Brainstorm marketing ideas." },
        { id: 3, name: "3. Write slogan for brand." },
        { id: 4, name: "4. Update contact information." },
        { id: 5, name: "5. Proofread blog post." },
        { id: 6, name: "6. Analyze sales data." },
    ],
    Drag3: TaskType[] = [
        { id: 1, name: "Brainstorm blog topics." },
        { id: 2, name: "Draft press release." },
        { id: 3, name: "Update employee handbook." },
        { id: 4, name: "Design event tickets." },
        { id: 5, name: "Summarize research findings." },
        { id: 6, name: "Plan office layout." },
    ],
    Drag4: TaskType[] = [
        { id: 1, name: "Analyze market trends.", filter: "" },
        { id: 2, name: "Edit video content.", filter: "" },
        { id: 3, name: "Plan social media calendar.", filter: "" },
        { id: 4, name: "Update company policies.", filter: "filtered" },
        { id: 5, name: "Compile sales reports.", filter: "" },
        { id: 6, name: "Schedule client calls.", filter: "" },
    ],
    Drag5: TaskType[] = [
        { id: 1, name: "Update website images." },
        { id: 2, name: "Create marketing banners." },
        { id: 3, name: "Revise product descriptions." },
        { id: 4, name: "Set up client meetings." },
        { id: 5, name: "Check email for urgent messages." },
        { id: 6, name: "Proofread customer communications." },
    ],
    Drag6: TaskType[] = [
        { id: 1, name: "Test software functionality." },
        { id: 2, name: "Brainstorm team-building activities." },
        { id: 3, name: "Format spreadsheet cells." },
        { id: 4, name: "Plan virtual team event." },
        { id: 5, name: "Edit meeting agenda." },
        { id: 6, name: "Compile weekly progress report." },
        { id: 7, name: "Monthly report based on sales." },
    ],
    Drag7: TaskType[] = [
        { id: 1, name: "Item-1" },
        { id: 2, name: "Item-2" },
        { id: 3, name: "Item-3" },
        { id: 4, name: "Item-4" },
        { id: 5, name: "Item-5" },
        { id: 6, name: "Item-6" },
        { id: 7, name: "Item-7" },
        { id: 8, name: "Item-8" },
        { id: 9, name: "Item-9" },
        { id: 10, name: "Item-10" },
        { id: 11, name: "Item-11" },
        { id: 12, name: "Item-12" },
        { id: 13, name: "Item-13" },
        { id: 14, name: "Item-14" },
        { id: 15, name: "Item-15" },
        { id: 16, name: "Item-16" },
        { id: 17, name: "Item-17" },
        { id: 18, name: "Item-18" },
        { id: 19, name: "Item-19" },
        { id: 20, name: "Item-20" },
    ],
    Drag8: TaskType[] = [
        { id: 1, name: "Update social media profiles." },
        { id: 2, name: "Draft project budget." },
        { id: 3, name: "Brainstorm domain names." },
        { id: 4, name: "Revise resume content." },
        { id: 5, name: "Test website functionality." },
        { id: 6, name: "Edit meeting agenda." },
    ],
    Drag9: TaskType[] = [
        { id: 1, name: "Create mood board." },
        { id: 2, name: "Design event flyer." },
        { id: 3, name: "Research industry trends." },
        { id: 4, name: "Format spreadsheet cells." },
        { id: 5, name: "Outline marketing strategy." },
        { id: 6, name: "Compile data report." },
    ],
    Drag10: TaskType[] = [
        { id: 1, name: "Write customer service script." },
        { id: 2, name: "Schedule team training." },
        { id: 3, name: "Edit presentation slides." },
        { id: 4, name: "Generate weekly schedule." },
        { id: 5, name: "Review expense reports." },
        { id: 6, name: "Create product catalog." },
    ],
    sortlist: TaskType[] = [
        { id: 1, text: "Analyze market trends." },
        { id: 2, text: "Edit video content." },
        { id: 3, text: "Plan social media calendar." },
        { id: 4, text: "Update company policies." },
        { id: 5, text: "Compile sales reports." },
        { id: 6, text: "Schedule client calls." },
    ],

    Drag11: DragItem[] = [
        {
            id: '1.1',
            text: 'Item 1.1',
            children: [
                { id: '2.1', text: 'Item 2.1' },
                {
                    id: '2.2', text: 'Item 2.2', children: [
                        { id: '3.1', text: 'Item 3.1' },
                        { id: '3.2', text: 'Item 3.2' },
                        { id: '3.3', text: 'Item 3.3' },
                        { id: '3.4', text: 'Item 3.4', draggable: false },
                    ],
                },
                { id: '2.3', text: 'Item 2.3' },
                { id: '2.4', text: 'Item 2.4' },
            ],
        },
        { id: '1.2', text: 'Item 1.2' },
        { id: '1.3', text: 'Item 1.3' },
        {
            id: '1.4',
            text: 'Item 1.4',
            children: [
                { id: '2.4', text: 'Item 2.4', draggable: false },
                { id: '2.1', text: 'Item 2.1' },
                { id: '2.2', text: 'Item 2.2' },
                { id: '2.3', text: 'Item 2.3' },
            ],
        },
        { id: '1.5', text: 'Item 1.5' },
    ];