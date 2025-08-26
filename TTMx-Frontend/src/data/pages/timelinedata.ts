import face1 from '/images/faces/1.jpg';
import face2 from '/images/faces/2.jpg';
import face5 from '/images/faces/5.jpg';
import face10 from '/images/faces/10.jpg';
import face11 from '/images/faces/11.jpg';
import face14 from '/images/faces/14.jpg';
import face15 from '/images/faces/15.jpg';
import face16 from '/images/faces/16.jpg';

interface TimelineEventType {
    date: string;
    title: string;
    description: string;
    bgColor: string;
}

interface ActivityLogType {
    title: string;
    description: string;
    timestamp: string;
}

interface ActivityType {
    title: string;
    time: string;
    user: string;
    message: string;
    avatar: string;
}

interface ProjectTimelineEventType {
    title: string;
    time: string;
    badgeColor: string;
    description: string;
}

export const TimelineData: TimelineEventType[] = [
    {
        date: "Jan 10, 2024 - 10:00 AM",
        title: "Project Kickoff",
        description:
            "Our team gathered to discuss project goals, scope, and initial milestones. The roadmap was finalized.",
        bgColor: "primary",
    },
    {
        date: "Feb 5, 2024 - 2:30 PM",
        title: "Initial Wireframes Completed",
        description:
            "The UI/UX team completed the first set of wireframes, ensuring a smooth user experience.",
        bgColor: "success",
    },
    {
        date: "Mar 12, 2024 - 11:00 AM",
        title: "Development Phase Begins",
        description:
            "The engineering team started coding, focusing on the core features of the platform.",
        bgColor: "warning",
    },
    {
        date: "May 8, 2024 - 4:45 PM",
        title: "Beta Version Released",
        description:
            "The first beta version was released for internal testing, and feedback collection began.",
        bgColor: "info",
    },
    {
        date: "Jun 20, 2024 - 9:15 AM",
        title: "Security Audit Completed",
        description:
            "A comprehensive security review was conducted to ensure data protection and system stability.",
        bgColor: "danger",
    },
],
    ActivityLogs: ActivityLogType[] = [
        {
            title: "Logged In",
            description: "User successfully logged into the dashboard from a new device.",
            timestamp: "Mar 17, 2025 - 09:15 AM",
        },
        {
            title: "Profile Updated",
            description: "User updated their profile details, including name and contact information.",
            timestamp: "Mar 17, 2025 - 09:45 AM",
        },
        {
            title: "File Uploaded",
            description: "A new document was uploaded to the project folder.",
            timestamp: "Mar 17, 2025 - 10:10 AM",
        },
        {
            title: "Comment Added",
            description: "User posted a comment on the project discussion board.",
            timestamp: "Mar 17, 2025 - 10:30 AM",
        },
        {
            title: "Payment Processed",
            description: "A payment of $99.99 was successfully processed for the premium plan.",
            timestamp: "Mar 17, 2025 - 11:00 AM",
        },
    ],
    Activities: ActivityType[] = [
        {
            title: "Logged In",
            time: "08:45 AM",
            user: "John Doe",
            message: "logged into the dashboard",
            avatar: face10,
        },
        {
            title: "Profile Updated",
            time: "09:10 AM",
            user: "Emily Johnson",
            message: "updated her profile information",
            avatar: face1,
        },
        {
            title: "File Uploaded",
            time: "09:35 AM",
            user: "Michael Brown",
            message: "uploaded a project report file",
            avatar: face11,
        },
        {
            title: "Comment Added",
            time: "10:05 AM",
            user: "Sarah Davis",
            message: "commented on a task in the project board",
            avatar: face2,
        },
        {
            title: "Payment Processed",
            time: "10:45 AM",
            user: "David Wilson",
            message: "completed the \"UI Redesign\" task",
            avatar: face14,
        },
        {
            title: "Task Assigned",
            time: "11:20 AM",
            user: "Olivia Harris",
            message: "processed a payment of $120.00",
            avatar: face5,
        },
        {
            title: "Settings Updated",
            time: "12:00 PM",
            user: "James Taylor",
            message: "invited a new team member to the project",
            avatar: face15,
        },
        {
            title: "Invitation Sent",
            time: "12:50 PM",
            user: "Lucas Scott",
            message: "modified security settings in the admin panel",
            avatar: face16,
        },
    ],
    ProjectTimeline: ProjectTimelineEventType[] = [
        {
            title: "Project Kickoff & Planning",
            time: "Jan 10, 2025 - 09:00 AM",
            badgeColor: "primary",
            description:
                'Project <span class="fw-medium text-default">"NextGen Web App"</span> was officially created, marking the beginning of development.',
        },
        {
            title: "Requirement Analysis",
            time: "Jan 11, 2025 - 10:30 AM",
            badgeColor: "success",
            description:
                "The team finalized the project scope, features, and initial milestones.",
        },
        {
            title: "Roadmap Planning",
            time: "Jan 12, 2025 - 02:15 PM",
            badgeColor: "warning",
            description:
                "A detailed roadmap was outlined, including design, development, and release phases.",
        },
        {
            title: "Team Assignments",
            time: "Jan 14, 2025 - 04:00 PM",
            badgeColor: "secondary",
            description:
                "Roles and responsibilities were assigned to developers, designers, and project managers.",
        },
        {
            title: "Wireframe & UI Design",
            time: "Jan 18, 2025 - 11:45 AM",
            badgeColor: "info",
            description:
                "Initial wireframes and UI mockups were created and shared for review.",
        },
        {
            title: "UI/UX Feedback & Revisions",
            time: "Jan 20, 2025 - 03:30 PM",
            badgeColor: "danger",
            description:
                "Stakeholders provided feedback on the design, leading to refinements.",
        },
    ]